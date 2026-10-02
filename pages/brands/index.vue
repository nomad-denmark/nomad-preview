<template>

	<main class="">

		<h1 class="name grid_vw_4">Brands</h1>

		<div class="list flex">
			<div class="filter sticky grid_vw_1 l4">
				<span class="heading">Filter</span>
				<ul class="category_list">
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Tableware') }" @click="categoryFilter('Tableware')">Tableware</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Kitchen') }" @click="categoryFilter('Kitchen')">Kitchen</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Interior') }" @click="categoryFilter('Interior')">Interior</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Lighting') }" @click="categoryFilter('Lighting')">Lighting</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Textile') }" @click="categoryFilter('Textile')">Textile</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Furniture') }" @click="categoryFilter('Furniture')">Furniture</button>
					</li>
					<li>
						<button class="checkbox" :class="{ 'selected': filterType.includes('Other') }" @click="categoryFilter('Other')">Other</button>
					</li>
					<li>
						<button class="reset underline" @click="categoryFilter('')">Reset</button>
					</li>
				</ul>
			</div>
			<div class="list_wrap">
				<div class="list_header flex align-center r4">
					<span class="num">{{ brandList.length }} Brands</span>
					<div class="sort_wrap flex flex-start">
						<span class="heading">Sort by:</span>
						<div class="button_wrap">
							<button class="sort_button" @click="showSortList">{{ sortType }}</button>
							<ul class="sort_list" :class="sortListStatus">
								<li>
									<button class="sort" :class="{ 'selected': sortType == 'Recommended' }" @click="sortSelect('Recommended')">Recommended</button>
								</li>
								<li>
									<button class="sort" :class="{ 'selected': sortType != 'Recommended' }" @click="sortSelect('A to Z')">A to Z</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="layout_wrap flex">
						<button class="button_4" :class="layout" @click="switchLayout">
							<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
									<rect x="4.5" y="4.5" width="6" height="6" stroke="#27343F"/>
									<rect x="13.5" y="4.5" width="6" height="6" stroke="#27343F"/>
									<rect x="4.5" y="13.5" width="6" height="6" stroke="#27343F"/>
									<rect x="13.5" y="13.5" width="6" height="6" stroke="#27343F"/>
								</g>
							</svg>
						</button>
						<button class="button_2" :class="layout" @click="switchLayout">
							<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="19.5" y="4.5" width="6" height="15" transform="rotate(90 19.5 4.5)" stroke="#27343F"/>
								<rect x="19.5" y="13.5" width="6" height="15" transform="rotate(90 19.5 13.5)" stroke="#27343F"/>
							</svg>
						</button>
					</div>
				</div>
				<div class="wrap">
					<div id="brandCursor" class="brand_cursor cursor desktop">
						<svg width="100%" height="100%" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.3334L23 11.3334L23 12.6667L7 12.6667L7 11.3334Z" fill="#F5F4EA"/>
							<path d="M16 6L23 12L16 18" stroke="#F5F4EA"/>
						</svg>
					</div>
					<ul class="brand_list flex">
						<li class="" :class="layout" v-for="brand in brandList">
							<NuxtLink class="" :to="{ name: 'brands-id', params: { id: brand.slug } }">
								<div class="visual_wrap ratio">
									<img v-if="layout == 'layout_2'" alt="" :src="brand.acf.thumbnail_horizontal">
									<img v-if="layout == 'layout_4'" alt="" :src="brand.acf.thumbnail_vertical">
									<h3>{{ brand.title.rendered }}</h3>
								</div>
								<div class="detail_wrap flex">
									<img class="logo" alt="" :src="brand.acf.logo">
									<ul class="category_list">
										<li v-for="category in brand._embedded['wp:term'][0]">
											<span class="category">{{ category.name }}</span>
										</li>
										<!-- <li v-if="brand.otherCategory">
											<span class="category">{{ brand.otherCategory }}</span>
										</li> -->
									</ul>
								</div>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</main>

</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
	name: 'BrandIndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('brands', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const brandData = res[0].data
				return { brandData }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Brands | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Brands | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/brands/' },
			],
		}
	},
	data() {
		return {
			filterType: [],
			filterCategories: ['Tableware', 'Kitchen', 'Interior', 'Lighting', 'Textile', 'Furniture'],
			sortType: 'Recommended',
			sortListStatus: '',
			layout: 'layout_4',
			brands: [],
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
		} else {

			const gsap = this.$gsap

			const brandListArea = document.querySelector('.list .list_wrap .brand_list')
			const brandCursor = document.getElementById('brandCursor')
			var cursorX = window.innerWidth / 2
			var cursorY = window.innerHeight / 2
			document.addEventListener("scroll", (e) => {

				gsap.to(brandCursor, {
					x: cursorX - 50,
					y: cursorY - 50,
					// ease: "none",
					duration: 0.4,
				})

			})
			brandListArea.addEventListener('mouseenter', function(e) {

				brandCursor.classList.add('visible')

			})
			brandListArea.addEventListener('mouseover', function(e) {

				if (e.target.localName == 'a') {
					brandCursor.classList.add('visible')
					gsap.to(brandCursor, {
						x: cursorX - 50,
						y: cursorY - 50,
						// ease: "none",
						duration: 0.4,
					})
				} else {
					brandCursor.classList.remove('visible')
				}

			})
			brandListArea.addEventListener('mousemove', function(e) {

				cursorX = e.x
				cursorY = e.y

				if (e.target.localName == 'a') {
					gsap.to(brandCursor, {
						x: e.x - 50,
						y: e.y - 50,
						// ease: "none",
						duration: 0.4,
					})
				} else {
					brandCursor.classList.remove('visible')
				}
				

			})
			brandListArea.addEventListener('mouseleave', function(e) {

				brandCursor.classList.remove('visible')

			})

		}

	},
	computed: {
		brandList: function() {
			return this.brands
		},
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
				// requestAnimationFrame(this.raf)

			})
		},
		showSortList: function() {
			this.sortListStatus = this.sortListStatus == 'show' ? '' : 'show'
			if (this.sortListStatus == 'show') {
				const self = this
				const removeSortView = function(e) {
					if (!e.target.classList.contains('sort_button') && !e.target.classList.contains('sort')) {
						self.sortListStatus = ''
						document.removeEventListener('click', removeSortView)
					}
				}
				document.addEventListener('click', removeSortView)
			}
		},
		sortSelect: function(type) {
			this.sortType = this.sortType != type ? type : ''
			this.filter()
			this.sortListStatus = ''
		},
		switchLayout: function() {
			this.layout = this.layout == 'layout_4' ? 'layout_2' : 'layout_4'
			this.$nextTick(() => {

				// this.$lenis.destroy()
				// this.lenis = new Lenis()
				// requestAnimationFrame(this.raf)

			})
		},
		filter() {

			var list = this.brandData

			if (this.filterType.length) {
				list = list.filter((brand) => {
					return this.filterCheck(brand)
				})
			}

			if (this.sortType != 'Recommended') {
				list = [...list].sort((a, b) => {
					if (a.title.rendered < b.title.rendered) {
						return -1
					} else if (a.title.rendered > b.title.rendered) {
						return 1
					}
					return 0
				})
			}

			this.brands.length = 0
			this.brands.push(...list)
			
		},
		filterCheck: function(brand) {
			const brandCategoryList = brand._embedded['wp:term'].flat().filter(term => term.taxonomy == 'brand_category')
			return brandCategoryList.some((category) => {
				var categoryCheck = this.filterType.includes(category.name)
				if (this.filterType.includes('Other')) {
					categoryCheck = this.filterType.includes(category.name) || !this.filterCategories.includes(category.name)
				}
				return categoryCheck
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
			width: calc(19.5vw * 4);
		}
		.list {
			margin-top: 4.8rem;
			.filter {
				width: calc(20% - 3.2rem);
				.heading {
					display: inline-block;
					margin-top: 0.6rem;
					margin-bottom: 3rem;
					font-size: 1.4rem;
					line-height: 1;
				}
				.category_list {
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
			.list_wrap {
				.list_header {
					position: relative;
					z-index: 1;
					.num {
						width: calc(19.5vw * 2);
					}
					.sort_wrap {
						width: 19.5vw;
						.heading {
							display: inline-block;
							margin-right: 0.8rem;
							font-size: 1.4rem;
							line-height: 1;
						}
						.button_wrap {
							position: relative;
							.sort_button {
								position: relative;
								padding-right: 2rem;
								font-size: 1.4rem;
								line-height: 1;
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
							.sort_list {
								position: absolute;
								top: 2.5rem;
								left: 0;
								padding: 2rem;
								opacity: 0;
								visibility: hidden;
								pointer-events: none;
								background-color: #F5F4EA;
								box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
								border-radius: 0.3rem;
								li {
									button {
										position: relative;
										display: block;
										width: 15rem;
										font-size: 1.4rem;
										line-height: 1;
										&:after {
											position: absolute;
											top: 0;
											right: 0;
											bottom: 0;
											display: block;
											margin: auto;
											width: 1.4rem;
											height: 1.4rem;
											background-image: url('~/assets/img/icon/check.svg');
											background-position: center;
											background-size: contain;
											background-repeat: no-repeat;
										}
										&.selected {
											&:after {
												content: '';
											}
										}
									}
									&:not(:first-of-type) {
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
					}
					.layout_wrap {
						margin-left: auto;
						width: fit-content;
						button {
							width: 2.4rem;
							svg {
								opacity: 0.3;
							}
						}
						.button_4.layout_4,
						.button_2.layout_2 {
							svg {
								opacity: 1;
							}
						}
					}
				}
				.wrap {
					position: relative;
					margin-top: 2.4rem;
					.brand_cursor {
						position: absolute;
						position: fixed;
						top: 0;
						left: 0;
						margin: auto;
						width: 7.2rem;
						height: 7.2rem;
						border-radius: 10rem;
						background-color: rgba(0, 0, 0, 0.4);
						backdrop-filter: blur(8px);
						opacity: 0;
						visibility: hidden;
						pointer-events: none;
						z-index: 15;
						svg {
							display: block;
							margin: auto;
							width: 3.1rem;
						}
						&.visible {
							opacity: 1;
							visibility: visible;
						}
					}
					.brand_list {
						width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 4 + (2rem * 3) + 4rem);
						border-top: 1px solid rgba(21, 38, 50, 0.15);
						border-left: 1px solid rgba(21, 38, 50, 0.15);
						&:before,
						&:after {
							content: '';
							display: block;
							width: 19.5vw;
							width: calc(19.5vw - 3px / 4);
							order: 1;
						}
						> li {
							border-right: 1px solid rgba(21, 38, 50, 0.15);
							border-bottom: 1px solid rgba(21, 38, 50, 0.15);
							a {
								display: block;
								.visual_wrap {
									padding-top: 33rem;
									img {
										transition: transform 0.3s ease-out;
									}
									h3 {
										position: absolute;
										left: 1.6rem;
										right: 1.6rem;
										bottom: 1.6rem;
										display: -webkit-box;
										padding: 0.2rem 1.2rem 0.16rem;
										width: fit-content;
										max-width: calc(100% - 2.4rem - 3.3rem);
										font-size: 1.2rem;
										// line-height: 1.2;
										color: #F5F4EA;
										-webkit-line-clamp: 1;
										-webkit-box-orient: vertical;
										word-break: break-all;
										background-color: rgba(0, 0, 0, 0.25);
										backdrop-filter: blur(8px);
										border-radius: 10rem;
										overflow: hidden;
										transition: all 0.3s ease-out;
									}
								}
								.detail_wrap {
									padding: 1.6rem;
									min-height: 15rem;
									transition: background-color 0.3s ease-out;
									.logo {
										width: 11rem;
										height: fit-content;
									}
									.category_list {
										height: fit-content;
										li {
											span {
												display: block;
												font-size: 1.2rem;
												line-height: 1;
												color: rgba(39, 52, 63, 0.6);
											}
											&:not(:first-of-type) {
												margin-top: 0.4rem;
											}
										}
									}
								}
								&:hover {
									.visual_wrap {
										img {
											transform: scale(1.05);
										}
										h3 {
											color: #27343F;
											background-color: #F5F4EA;
										}
									}
									.detail_wrap {
										background-color: #EAE9DC;
									}
								}
							}
						}
						.layout_4 {
							width: calc(19.5vw - 3px / 4);
							a {
								.visual_wrap {
									padding-top: 124%;
								}
							}
							&:nth-of-type(4n) {
								border-right: none;
							}
						}
						.layout_2 {
							width: calc(39vw - 1px / 2);
							a {
								.visual_wrap {
									padding-top: 62.4%;
								}
							}
							&:nth-of-type(2n) {
								border-right: none;
							}
						}
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			position: relative;
			padding-top: 12rem;
			padding-bottom: 0;
			h1 {
				margin-left: 1.6rem;
				width: auto;
			}
			.list {
				margin-top: 3.5rem;
				.filter {
					position: absolute;
					top: 12rem;
					right: 1.6rem;
					width: auto;
					.heading {
						position: relative;
						margin-top: 1.6rem;
						margin-bottom: 0;
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
						top: 4.4rem;
						right: 0;
						padding: 2rem;
						opacity: 0;
						visibility: hidden;
						pointer-events: none;
						background-color: #F5F4EA;
						box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
						border-radius: 0.3rem;
						z-index: 2;
						li {
							margin-top: 0.8rem;
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
				.list_wrap {
					.list_header {
						position: sticky;
						top: 0;
						padding-left: 1.6rem;
						height: fit-content;
						.num {
							margin-right: 1.6rem;
							width: auto;
						}
						.sort_wrap {
							width: auto;
							.heading {
							}
							.button_wrap {
								.sort_button {
								}
								.sort_list {
									li {
										button {
											&:after {
											}
											&.selected {
												&:after {
												}
											}
										}
										&:not(:first-of-type) {
										}
									}
									&.show {
									}
								}
							}
						}
						.layout_wrap {
							margin-left: auto;
							width: fit-content;
							button {
								width: 2.4rem;
								svg {
									opacity: 0.3;
								}
							}
							.button_4.layout_4,
							.button_2.layout_2 {
								svg {
									opacity: 1;
								}
							}
						}
					}
					.wrap {
						margin-top: 1.6rem;
						.brand_list {
							width: 100vw;
							border-left: none;
							&:before,
							&:after {
								width: calc(50vw - 1px / 2);
							}
							> li {
								border-right: 1px solid rgba(21, 38, 50, 0.15);
								a {
									.visual_wrap {
										padding-top: 22rem;
										h3 {
											position: absolute;
											left: 1.2rem;
											right: 1.2rem;
											bottom: 1.2rem;
											padding: 0.2rem 1rem 0.16rem;
											max-width: calc(100% - 2rem - 2.4rem);
											font-size: 1.1rem;
										}
									}
									.detail_wrap {
										padding: 1.2rem;
										min-height: 10rem;
										.logo {
											margin-bottom: auto;
											width: 7rem;
											height: auto;
										}
										.category_list {
											li {
												span {
													font-size: 1.1rem;
												}
												&:not(:first-of-type) {
												}
											}
										}
									}
									&:hover {
										.visual_wrap {
											img {
												transform: scale(1);
											}
											h3 {
												color: #F5F4EA;
												background-color: rgba(0, 0, 0, 0.25);
											}
										}
										.detail_wrap {
											background-color: transparent;
										}
									}
								}
							}
							.layout_4 {
								width: calc(50vw - 1px / 2);
								a {
									.visual_wrap {
									}
								}
								&:nth-of-type(2n) {
									border-right: none;
								}
							}
							.layout_2 {
								width: 100vw;
								border-right: none;
								a {
									.visual_wrap {
									}
								}
								&:nth-of-type(2n) {
								}
							}
						}
					}
				}
			}
		}

	}

</style>
