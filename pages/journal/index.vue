<template>

	<main class="">

		<section class="mv">
			<div class="wrap">
				<div class="ratio">
					<img alt="" src="~/assets/img/journal_kv.jpg">
				</div>
				<div class="title_wrap">
					<div class="flex">
						<span class="heading">Journal</span>
						<h1 class="grid_vw_4">Danish Diaries</h1>
					</div>
					<span class="ja grid_vw_3">デニッシュダイアリーズ</span>
				</div>
			</div>
			<p class="introduction grid_vw_3 l4 r4">デンマークと日本の架け橋となり、幸せなライフスタイルを創造するための知恵を伝え合うというNOMADの使命を体現したウェブマガジンです。デンマークの豊かでユニークな文化や、伝統と革新が共存するデザイン、そしてデンマークならではの温かく居心地の良いライフスタイルなどを紹介します。</p>
		</section>

		<section class="list">
			<div class="pickup flex l4">
				<span class="heading grid_vw_1">Stories of Lifestyle and Culture from Denmark.</span>
				<div class="wrap">
					<NuxtLink class="thumbnail ratio" :to="{ name: 'journal-id', params: { id: pickupJournal.slug } }">
						<img alt="" :src="pickupJournal.thumbnail">
					</NuxtLink>
					<NuxtLink class="text_wrap grid_vw_2" :to="pickupJournal.slug">
						<span class="title">{{ pickupJournal.title }}</span>
						<p class="introduction">{{ pickupJournal.description }}</p>
					</NuxtLink>
				</div>
			</div>
			<ul class="journal_list flex flex-start l4 r4">
				<li class="" v-for="journal in journalList">
					<JournalItem class="" :data="journal"></JournalItem>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>
export default {
	name: 'JournalIndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('journal', {
					params: {
						
					}
				}),
			])
			.then((res) => {
				const journalData = res[0].data
				const pickupJournal = journalData[0]
				const journalList = journalData.slice(1) ?? []
				return { pickupJournal, journalList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Journal | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Journal | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/journal/' },
			],
		}
	},
	data() {
		return {
			journals: [],
		}
	},
	mounted() {

		window.addEventListener('resize', () => {
			if (this.$scrollTrigger.getById('headerJournal')) {
				setTimeout(() => {
					this.$scrollTrigger.getById('headerJournal').refresh()
				}, 250)
			}
		})

		this.$nextTick(() => {

			this.$gsap.to('.mv img', {
				y: '10%',
				scrollTrigger: {
					id: 'visual',
					trigger: '.mv img',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				}
			})

		})

	},
	computed: {
		// journalList: function() {
		// 	return this.journalData
		// },
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-bottom: 10.8rem;
		.mv {
			.wrap {
				position: relative;
				.ratio {
					padding-top: 90vh;
					&:after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						background-color: rgba(0, 0, 0, 0.25);
					}
				}
				.title_wrap {
					position: absolute;
					left: 4rem;
					right: 4rem;
					bottom: -1.3rem;
					margin: auto;
					.heading {
						display: inline-block;
						line-height: 1.2;
						color: #F5F4EA;
					}
					h1 {
						margin-left: auto;
						font-size: 8.3rem;
						line-height: 1;
						color: #F5F4EA;
					}
					.ja {
						position: absolute;
						left: 0;
						right: 0;
						bottom: -2.4rem;
						display: block;
						margin-top: -1.5rem;
						margin-left: auto;
						font-size: 3.5rem;
						line-height: 1;
					}
				}
			}
			.introduction {
				margin: 18rem 0 22rem auto;
				font-size: 1.8rem;
				line-height: 2;
			}
		}
		.list {
			.pickup {
				.heading {
				}
				.wrap {
					width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 3 + (2rem * 2) + 4rem);
					a {
						display: block;
					}
					.thumbnail {
						padding-top: 66%;
					}
					.text_wrap {
						margin: 2rem 4rem 0 auto;
						.title {
							display: block;
							font-size: 2rem;
							line-height: 1.5;
						}
						.introduction {
							margin-top: 0.8rem;
							font-size: 1.4rem;
							line-height: 1.75;
							color: rgba(39, 52, 63, 0.6);
						}
					}
				}
			}
			.journal_list {
				margin-top: 9.6rem;
				li {
					&:not(:nth-of-type(5n)) {
						margin-right: 2rem;
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-bottom: 10.8rem;
			.mv {
				.wrap {
					position: relative;
					.ratio {
						padding-top: 90svh;
					}
					.title_wrap {
						position: absolute;
						left: 1.6rem;
						right: 1.6rem;
						bottom: -0.6rem;
						margin: auto;
						.heading {
							display: inline-block;
							line-height: 1.2;
							color: #F5F4EA;
						}
						h1 {
							margin: 0;
							font-size: 4.6rem;
						}
						.ja {
							left: auto;
							bottom: -1.6rem;
							font-size: 2.4rem;
						}
					}
				}
				.introduction {
					margin: 8rem auto 10.8rem;
					font-size: 1.6rem;
				}
			}
			.list {
				.pickup {
					.heading {
					}
					.wrap {
						margin-top: 4.8rem;
						width: calc(100vw - 1.6rem);
						a {
						}
						.text_wrap {
							margin: 1.6rem 1.6rem 0 0;
							.title {
								font-size: 1.8rem;
							}
							.introduction {
								font-size: 1.2rem;
							}
						}
					}
				}
				.journal_list {
					margin-top: 4.8rem;
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
