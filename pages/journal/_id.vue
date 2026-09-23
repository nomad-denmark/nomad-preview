<template>

	<main class="article l4 r4">

		<section class="mv flex">
			<div class="wrap flex">
				<div class="visual_wrap">
					<img v-if="journal.thumbnail" alt="" :src="journal.thumbnail">
				</div>
				<div class="title_wrap grid_vw_3 flex">
					<div class="upper">
						<h1 class="">{{ journal.title }}</h1>
						<ul class="list flex flex-start">
							<li class="flex flex-start" v-for="credit in journal.credit">
								<span class="heading">{{ credit.title }}</span>
								<a v-if="credit.url" class="name icon outside" target="_blank" :href="credit.url">{{ credit.name }}<i></i></a>
								<span v-else class="name">{{ credit.name }}</span>
								
							</li>
						</ul>
					</div>
					<p class="introduction">{{ journal.description }}</p>
				</div>
			</div>
			<div class="back_wrap">
				<NuxtLink class="icon back" to="/journal">Back to List<i></i></NuxtLink>
			</div>
		</section>

		<section class="contents flex">
			<div class="sticky grid_vw_2 flex">
				<div class="share_wrap grid_vw_1">
					<span class="share heading">Share</span>
					<ul class="share_list">
						<li>
							<a class="twitter share_button" target="_blank" :href="shareURL('Twitter')">
								<span class="icon outside underline">Twitter<i></i></span>
							</a>
						</li>
						<li>
							<a class="line share_button" target="_blank" :href="shareURL('LINE')">
								<span class="icon outside underline">LINE<i></i></span>
							</a>
						</li>
						<li>
							<a class="facebook share_button" target="_blank" :href="shareURL('Facebook')">
								<span class="icon outside underline">Facebook<i></i></span>
							</a>
						</li>
						<li>
							<button class="copy share_button" target="_blank" :href="copyURL()">
								<span class="underline">Link Copy</span>
							</button>
						</li>
					</ul>
				</div>
				<div class="title_wrap grid_vw_1 desktop">
					<span class="heading">Journal</span>
					<span class="title">{{ journal.title }}</span>
				</div>
			</div>
			<div class="content grid_vw_3" v-html="journal.content"></div>
		</section>

		<section class="latest">
			<span class="heading">Latest Articles</span>
			<ul class="journal_list flex flex-start">
				<li class="" v-for="article in journalList">
					<JournalItem class="" :data="article"></JournalItem>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>
export default {
	name: 'JournalDetailPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('journal', {
					params: {
						'slug': params.id
					}
				}),
				app.$wordpress.getPosts('journal', {
					params: {
						'slug[ne]': params.id
					}
				}),
			])
			.then((res) => {
				const journal = res[0].data[0]
				const journalList = res[1].data
				return { journal, journalList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: this.journal.title + ' | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.journal.title + ' | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/journal/' + this.journal.slug },
				{ hid: 'og:image', property: 'og:image', content: this.journal.thumbnail ? this.journal.thumbnail.src : 'https://preview.nomadinc.jp/no_image.jpg' },
				{ hid: 'og:description', property: 'og:description', content: this.journal.description },
			],
		}
	},
	data() {
		return {
		}
	},
	mounted() {

		if (window.innerWidth < 980) {
			const targetClassList = document.querySelector('.share_wrap .share_list').classList
			document.querySelector('.share_wrap .share').addEventListener('click', function() {
				if (targetClassList.contains('show')) {
					targetClassList.remove('show')
				} else {
					targetClassList.add('show')
					const self = this
					const removeShareView = function(e) {
						if (!e.target.classList.contains('share') && !e.target.classList.contains('share_button')) {
							targetClassList.remove('show')
							document.removeEventListener('click', removeShareView)
						}
					}
					document.addEventListener('click', removeShareView)
				}
			})
		}

	},
	computed: {
	},
	methods: {
		shareURL: function(shareTarget) {
			var url = 'https://twitter.com/intent/tweet?url='
			if (shareTarget == 'LINE') {
				url = 'https://line.me/R/share?text='
			} else if (shareTarget == 'Facebook') {
				url = 'https://www.facebook.com/share.php?u='
			}
			return url + 'https://preview.nomadinc.jp/njournalws/' + this.journal.slug
		},
		copyURL: function() {
			this.$copyText('https://preview.nomadinc.jp/journal/' + this.journal.slug)
			this.copyStatus = 'show'
			setTimeout(() => {
				this.copyStatus = ''
			}, 1500)
		}

	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 10.8rem;
		padding-bottom: 10.8rem;

		.mv {
			.wrap {
				margin-top: 3.5rem;
				width: 100%;
				.visual_wrap {
					width: 33vw;
				}
				.title_wrap {
					.upper {
						h1 {
							font-size: 3.5rem;
							line-height: 1.5;

						}
						.list {
							margin-top: 2.4rem;
							li {
								position: relative;
								margin-right: 3.5rem;
								width: min-content;
								span {
									display: block;
									width: max-content;
									font-size: 1.2rem;
									line-height: 1.5;
								}
								.heading {
									color: rgba(39, 52, 63, 0.6);
								}
								a {
									display: inline-block;
									width: max-content;
									font-size: 1.2rem;
									line-height: 1.5;
									vertical-align: top;
								}
							}
						}
					}
					.introduction {
						margin-top: auto;
					}
				}
			}
			.back_wrap {
				width: 100%;
				order: -1;
				a {
					i {
						
					}
				}
			}
			@media only screen and (max-width: 980px) {
				.wrap {
					.visual_wrap {
						margin-top: 2.4rem;
						width: 100%;
						.ratio {
						}
					}
					.title_wrap {
						order: -1;
						.upper {
							h1 {
								font-size: 2.4rem;
							}
							.list {
								display: block;
								margin-top: 1.2rem;
								li {
									margin-right: auto;
									margin-bottom: 0.4rem;
									width: auto;
									span {
										width: auto;
									}
									.heading {
										margin-right: 0.4rem;
									}
									a {
									}
								}
							}
						}
						.introduction {
							margin-top: 3.5rem;
						}
					}
				}
				.back_wrap {
					a {
						i {

						}
					}
				}
			}
		}

		.contents {
			position: relative;
			margin-top: 18rem;
			.sticky {
				.share_wrap {

				}
				.title_wrap {
					.title {
						margin-right: 6rem;
					}
				}
			}
			.content {
				
			}
			@media only screen and (max-width: 980px) {
				margin-top: 6rem;
			}
		}

		.latest {
			margin-top: 22rem;
			.heading {
				font-size: 5.8rem;
				line-height: 1.2;
			}
			.journal_list {
				margin-top: 3.5rem;
				li {
					&:not(:nth-of-type(5n)) {
						margin-right: 2rem;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 10.8rem;
				.heading {
					font-size: 3.3rem;
				}
				.journal_list {
					margin-top: 2.4rem;
					li {
						margin-bottom: 2.4rem;
						width: calc(50% - 0.8rem);
						&:not(:nth-of-type(5n)) {
							margin-right: 0;
						}
						&:nth-of-type(2n - 1) {
							margin-right: 1.6rem;
						}
					}
				}
			}
		}


	}

</style>
