<template>

	<main class="l4 r4">

		<h1 class="grid_vw_4">News</h1>

		<div class="list_wrap flex">
			<div class="filter sticky grid_vw_1">
				<span class="heading">Filter</span>
				<ul class="category_list">
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Information') }" @click="categoryFilter('Information')">Information</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Products') }" @click="categoryFilter('Products')">Products</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Media') }" @click="categoryFilter('Media')">Media</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Exhibition') }" @click="categoryFilter('Exhibition')">Exhibition</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Showroom') }" @click="categoryFilter('Showroom')">Showroom</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Press') }" @click="categoryFilter('Press')">Press</button>
					</li>
					<li>
						<button class="reset underline" @click="categoryFilter('')">Reset</button>
					</li>
				</ul>
			</div>
			<ul class="news_list grid_vw_4">
				<li v-for="article in newsList">
					<NewsItem v-if="article._embedded['wp:term'][0]?.[0]?.name != 'Press'" class="" :data="article"></NewsItem>
					<PressItem v-else class="" :data="article"></PressItem>
				</li>
			</ul>
		</div>

	</main>

</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
	name: 'NewsIndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('news', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const newsData = res[0].data
				return { newsData }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'News | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'News | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/news/' },
			],
		}
	},
	data() {
		return {
			filterType: [],
			news: []
		}
	},
	mounted() {

		this.filter()

		if (window.innerWidth < 980) {
			const targetClassList = document.querySelector('.filter .category_list').classList
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
		newsList: function() {
			return this.news
		}
	},
	methods: {
		categoryFilter: function(type) {
			if (type != '') {
				if (!this.filterType.includes(type)) {
					this.filterType.push(type)
				} else {
					this.filterType = this.filterType.filter((category) => {
						return category != type
					})
				}
			} else {
				this.filterType = []
			}
			this.filter()
			this.$nextTick(() => {

				// this.$lenis.destroy()
				// this.lenis = new Lenis()
				requestAnimationFrame(this.raf)

			})
			// this.filterType = this.filterType != type ? type : ''
			// this.filter()
		},
		filter() {

			var list = this.newsData
			if (this.filterType != '') {
				list = list.filter((article) => {
					return this.filterCheck(article)
				})
			}
			this.news.length = 0
			this.news.push(...list)
			
		},
		filterCheck: function(article) {
			return article._embedded['wp:term'][0].some((category) => {
				return this.filterType.includes(category.name)
			})
		},
		raf: function(time) {
			this.lenis.raf(time)
			requestAnimationFrame(this.raf)
		}
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 15rem;
		padding-bottom: 10.8rem;
		h1 {
			margin-left: auto;
		}
		.list_wrap {
			margin-top: 3.5rem;
			.filter {
				width: calc(20% - 3.2rem);
				.heading {
					font-size: 1.4rem;
					line-height: 1;
				}
				.category_list {
					margin-top: 3rem;
					li {
						margin-top: 0.8rem;
						button {
						}
						&:last-of-type {
							margin-top: 3rem;
						}
					}
				}
			}
			.news_list {
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				li {
				}
			}
		}
		@media only screen and (max-width: 980px) {
			position: relative;
			padding-top: 12rem;
			padding-bottom: 6rem;
			h1 {
				width: auto;
			}
			.list_wrap {
				margin-top: 1.6rem;
				width: 100%;
				.filter {
					position: absolute;
					top: 13.9rem;
					right: 1.6rem;
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
					.category_list {
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
							&:last-of-type {
								margin-top: 2.4rem;
							}
						}
						&.show {
							opacity: 1;
							visibility: visible;
							pointer-events: auto;
						}
					}
				}
				.news_list {
					width: 100%;
				}
			}
		}





	}

</style>
