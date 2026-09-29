<template>

	<main class="article l4 r4">

		<section class="mv flex">
			<div class="wrap flex">
				<div class="visual_wrap">
					<div class="ratio">
						<img v-if="news._embedded['wp:featuredmedia']" alt="" :src="news._embedded['wp:featuredmedia'][0].source_url">
					</div>
				</div>
				<div class="title_wrap grid_vw_3 flex">
					<div class="upper">
						<span class="date">{{ $dateFns.format(news.date, 'yyyy.MM.dd') }}</span>
						<h1 class="">{{ news.title.rendered }}</h1>
						<ul class="category_list flex flex-start">
							<li v-for="category in news._embedded['wp:term'][0]">
								<NuxtLink class="underline" to="/news">{{ category.name }}</NuxtLink>
							</li>
						</ul>
					</div>
					<p class="introduction">{{ news.acf.introduction }}</p>
				</div>
			</div>
			<div class="back_wrap">
				<NuxtLink class="icon back" to="/news">Back to List<i></i></NuxtLink>
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
							<button class="copy share_button" @click="copyURL()">
								<span class="underline">Link Copy</span>
							</button>
						</li>
					</ul>
					<span class="link_copied" :class="copyStatus">Link Copied</span>
				</div>
				<div class="title_wrap desktop grid_vw_1">
					<span class="heading">News</span>
					<span class="title">{{ news.title.rendered }}</span>
				</div>
			</div>
			<div class="content grid_vw_3" v-html="news.content.rendered"></div>
		</section>

		<section class="related flex">
			<span class="heading">Related</span>
			<ul class="news_list grid_vw_4">
				<li class="" v-for="article in otherNewsList">
					<NewsItem class="" :data="article"></NewsItem>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>
export default {
	name: 'NewsDetailPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('news', {
					params: {
						'slug': params.id,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const news = res[0].data[0]
				return Promise.all([
					app.$wordpress.getPosts('news', {
						params: {
							// 'posts_per_page': 3,
							'per_page': 3,
							'exclude': news.id,
							'categories': news.news_category[0],
							'_embed': true
						}
					}),
				])
				.then((res) => {
					const otherNewsList = res[0].data
					return { news, otherNewsList }
				})
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: this.news.title.rendered + ' | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.news.title.rendered + ' | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/news/' + this.news.slug },
				{ hid: 'og:image', property: 'og:image', content: this.news._embedded['wp:featuredmedia'] ? this.news._embedded['wp:featuredmedia'][0].source_url : 'https://preview.nomadinc.jp/no_image.jpg' },
				{ hid: 'og:description', property: 'og:description', content: this.news.introduction },
			],
		}
	},
	data() {
		return {
			copyStatus: ''
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
			return url + 'https://preview.nomadinc.jp/news/' + this.news.slug
		},
		copyURL: function() {
			this.$copyText('https://preview.nomadinc.jp/news/' + this.news.slug)
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
		.mv {
			.wrap {
				margin-top: 3.5rem;
				width: 100%;
				.visual_wrap {
					width: 33vw;
					.ratio {
						padding-top: 125%;
						background-image: url('/no_image.jpg');
						background-position: center;
						background-size: cover;
						background-repeat: no-repeat;
					}
				}
				.title_wrap {
					.upper {
						.date {
							display: block;
							line-height: 2;
						}
						h1 {
							margin-top: 2.4rem;
							font-size: 3.5rem;
							line-height: 1.5;

						}
						.category_list {
							margin-top: 2.4rem;
							li {
								position: relative;
								margin-right: 1.2rem;
								a {

								}
								&:not(:last-of-type) {
									&:after {
										content: ',';
										position: absolute;
										top: 0;
										right: -0.4rem;
										bottom: 0;
										display: block;
									}
								}
							}
						}
					}
					.introduction {
						margin-top: auto;
						line-height: 2;
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
		}
		.contents {
			position: relative;
			margin-top: 22rem;
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
		}
		.related {
			margin-top: 22rem;
			border-top: 1px solid rgba(39, 52, 63, 0.15);
			.heading {
				margin-top: 2rem;
			}
			.news_list {
				li {
					
				}
			}
		}
		@media only screen and (max-width: 980px) {
			.mv {
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
							.date {
							}
							h1 {
								margin-top: 1.2rem;
								font-size: 2.4rem;

							}
							.category_list {
								margin-top: 1.2rem;
								li {
									a {

									}
									&:not(:last-of-type) {
										&:after {
										}
									}
								}
							}
						}
						.introduction {
							margin-top: 3.5rem;
							line-height: 2;
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
			.contents {
				margin-top: 6rem;
				.sticky {
					.share_wrap {

					}
					.title_wrap {
						.title {
							margin-right: 0;
						}
					}
				}
				.content {

				}
			}
			.related {
				margin-top: 10.8rem;
				border-top: none;
				.heading {
					margin-top: 0;
				}
				.news_list {
					margin-top: 2rem;
					border-top: 1px solid rgba(39, 52, 63, 0.15);
					li {

					}
				}
			}
		}


	}

</style>
