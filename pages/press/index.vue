<template>

	<main class="l4 r4">

		<div class="title_wrap">
			<h1 class="grid_vw_4">Press Release</h1>
			<div class="wrap flex">
				<span class="heading desktop grid_vw_1">From NOMAD</span>
				<div class="text_wrap grid_vw_3">
					<p class="introduction">
						NOMADが取り扱うブランドの新作情報や展示会出展情報、プレスリリースはこちらからご覧ください。また、NOMADおよび取扱ブランドに関する取材依頼・メディア掲載に関するお問い合わせは、コンタクトフォームをご利用ください。内容を確認し担当者より折り返しご連絡いたします。
					</p>
				</div>
				<div class="catalog_wrap grid_vw_1">
					<p class="description">取材依頼・メディア掲載に関するお問い合わせはこちら</p>
					<NuxtLink class="underline" to="/contact">Contact us</NuxtLink>
				</div>
			</div>
		</div>

		<div class="list_wrap flex">
			<div class="filter sticky grid_vw_1">
				<span class="heading">Filter</span>
				<ul class="date_list">
					<li v-for="filter in filterList">
						<button class="checkbox" :class="{ 'selected': filterType == filter }" @click="categoryFilter(filter)">{{ filter }}</button>
					</li>
					<li>
						<button class="reset underline" @click="categoryFilter('')">Reset</button>
					</li>
				</ul>
			</div>
			<ul class="press_list grid_vw_4">
				<li class="" v-for="article in pressList">
					<PressItem class="" :data="article"></PressItem>
				</li>
			</ul>
		</div>

	</main>

</template>

<script>
export default {
	name: 'PressReleaseIndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('news', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'category': 'press',
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const pressData = res[0].data
				return { pressData }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Press Release | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Press Release | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/press/' },
			],
		}
	},
	data() {
		return {
			filterType: '',
			filterList: [],
			press: []
		}
	},
	mounted() {

		var date = ''
		this.pressData.forEach((article) => {
			const articleDate = this.$dateFns.format(article.date, 'yyyy.MM')
			if (date != articleDate) {
				this.filterList.push(articleDate)
				date = articleDate
			}
		})
		this.filter()

		if (window.innerWidth < 980) {
			const targetClassList = document.querySelector('.filter .date_list').classList
			document.querySelector('.filter .heading').addEventListener('click', function() {
				if (targetClassList.contains('show')) {
					targetClassList.remove('show')
				} else {
					targetClassList.add('show')
				}
			})
		}

	},
	computed: {
		pressList: function() {
			return this.press
		}
	},
	methods: {
		categoryFilter: function(type) {
			this.filterType = this.filterType != type ? type : ''
			this.filter()
		},
		filter() {

			var list = this.pressData
			if (this.filterType != '') {
				list = list.filter((article) => {
					const articleDate = this.$dateFns.format(article.date, 'yyyy.MM')
					return this.filterType == articleDate
				})
			}
			this.press.length = 0
			this.press.push(...list)
			
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 15rem;
		padding-bottom: 10.8rem;
		.title_wrap {
			h1 {
				margin-left: auto;
			}
			.wrap {
				margin-top: 6rem;
				.heading {
					line-height: 1.2;
				}
				.text_wrap {
					.introduction {
						margin-right: 4rem;
						font-size: 1.8rem;
						line-height: 2;
					}
				}
				.catalog_wrap {
					.description {
						font-size: 1.4rem;
						line-height: 2;
					}
					a {
						margin-top: 1.6rem;
						font-size: 1.4rem;
						line-height: 2;
					}
				}
			}
		}
		.list_wrap {
			margin-top: 15rem;
			.filter {
				width: calc(20% - 3.2rem);
				.heading {
					font-size: 1.4rem;
					line-height: 1;
				}
				.date_list {
					margin-top: 3rem;
					li {
						margin-top: 0.8rem;
						button {
						}
					}
				}
			}
			.press_list {
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				li {
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
			padding-bottom: 6rem;
			.title_wrap {
				h1 {
					width: auto;
				}
				.wrap {
					margin-top: 3rem;
					.heading {
					}
					.text_wrap {
						.introduction {
							margin-right: 0;
							font-size: 1.4rem;
						}
					}
					.catalog_wrap {
						margin-top: 3rem;
						.description {
							font-size: 1.2rem;
						}
						a {
							margin-top: 1.2rem;
							font-size: 1.2rem;
						}
					}
				}
			}
			.list_wrap {
				position: relative;
				margin-top: 12rem;
				width: 100%;
				.filter {
					position: absolute;
					top: -4.2rem;
					right: 0;
					width: auto;
					.heading {
						position: relative;
						padding-right: 2rem;
						&:after {
							content: '';
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							display: block;
							margin: auto;
							width: 1.4rem;
							height: 1.4rem;
							background-image: url('~/assets/img/icon/toggle.svg');
							background-position: center;
							background-size: contain;
							background-repeat: no-repeat;
						}
						&.open {
							&:after {
								transform: scale(1, -1);
							}
						}
					}
					.date_list {
						position: absolute;
						top: 2.5rem;
						right: 0;
						margin-top: 0;
						padding: 2rem;
						opacity: 0;
						visibility: hidden;
						pointer-events: none;
						background-color: #F5F4EA;
						box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
						border-radius: 0.3rem;
						z-index: 2;
						li {
							button {
							}
						}
						&.show {
							opacity: 1;
							visibility: visible;
							pointer-events: auto;
						}
					}
				}
				.press_list {
					width: 100%;
				}
			}
		}



	}

</style>
