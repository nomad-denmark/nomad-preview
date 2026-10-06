<template>

	<main class="l4 r4">

		<h1 class="name mv grid_vw_4 flex">
			Dealers
			<span class="date">Updated {{ $dateFns.format(updatedDate, 'yyyy.MM.dd') }}</span>
		</h1>

		<div class="wrap flex">
			<div class="filter sticky grid_vw_1 flex" data-lenis-prevent>
				<span class="heading">Filter</span>
				<div class="brand_wrap filter_wrap flex">
					<button class="toggle filter_button" :class="brandListStatus" @click="showBrandList">{{ brandName }}<i></i></button>
					<ul class="brand_list" :class="brandListStatus"  data-lenis-prevent>
						<li>
							<button class="brand_filter" :class="{ 'selected': brandName == 'All Brands' }" @click="selectBrand('All Brands')">All Brands</button>
						</li>
						<li v-for="brand in brandList">
							<button class="brand_filter" :class="{ 'selected': brandName == brand }" @click="selectBrand(brand)">{{ brand }}</button>
						</li>
					</ul>
				</div>
				<div class="area_wrap filter_wrap flex" data-lenis-prevent>
					<button class="toggle filter_button" :class="areaListStatus" @click="showAreaList">{{ areaName }}<i></i></button>
					<ul class="area_list" :class="areaListStatus"  data-lenis-prevent>
						<li class="">
							<button class="area_filter" :class="{ 'selected': areaName == 'All Area' }" @click="selectArea('All Area')">All Area</button>
						</li>
						<li v-for="area in areaList">
							<button v-if="area.parent != 0" class="area_filter" :class="{ 'selected': areaName == area.name }" @click="selectArea(area.name)">{{ area.name }}</button>
						</li>
						<li class="">
							<button class="area_filter" :class="{ 'selected': areaName == 'Online' }" @click="selectArea('Online')">Online</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="list_wrap grid_vw_4">
				<div class="list_header flex flex-start">
					<span class="heading">Showing</span>
					<span class="num grid_vw_1">{{ dealerNum }} Dealers</span>
				</div>
				<div class="dealer_list grid_vw_4 flex">
					<p v-if="dealerList.length == 0" class="zero">No Dealers matched current filters.</p>
					<div v-else class="dealer grid_vw_2" v-for="dealer in dealerList">
						<span class="name">{{ dealer.title.rendered }}</span>
						<div class="filter_wrap flex">
							<span>Brands:</span>
							<p class="filter_list">{{ dealer.acf.brands_source.formatted_value.map(data => data.post_title).join(' / ') }}</p>
						</div>
						<div class="filter_wrap flex">
							<span>Area:</span>
							<p class="filter_list">{{ dealer._embedded['wp:term'][0].map(term => term.name).join(' , ') }}</p>
						</div>
						<a v-if="dealer.acf.link" class="link icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
					</div>					
				</div>
			</div>
		</div>

	</main>

</template>

<script>
export default {
	name: 'DealerPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('dealers', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers_brands', {
					params: {
						// 'per_page': 100,
					}
				}),
				app.$wordpress.getPosts('area_category', {
					params: {
						'per_page': 100,
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						// 'posts_per_page': 1,
						'per_page': 1,
					}
				}),
			])
			.then((res) => {
				const dealerData = res[0].data
				const brandList = res[1].data
				const areaList = res[2].data
				const updatedDate = res[3].data[0].date
				return { dealerData, brandList, areaList, updatedDate }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Dealers | NOMAD',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Dealers | NOMAD' },
				{ hid: 'og:url', property: 'og:url', content: 'https://nomadinc.jp/dealers/' },
			],
		}
	},
	data() {
		return {
			areaName: 'All Area',
			areaListStatus: '',
			brandName: 'All Brands',
			brandListStatus: '',
			dealers: [],
			dealersOnline: [],
		}
	},
	mounted() {

		this.brandFilter()
		this.areaFilter()

	},
	computed: {
		dealerNum: function() {
			const allDealers = this.dealers
			var dealerNameList = []
			allDealers.forEach((dealer) => {
				if (!dealerNameList.includes(dealer.title.rendered)) {
					dealerNameList.push(dealer.title.rendered)
				}
			})
			return dealerNameList.length
		},
		dealerList: function() {
			return this.dealers
		},
		dealerListOnline: function() {
			return this.dealersOnline
		}
	},
	methods: {
		showBrandList: function(brandName) {
			this.brandListStatus = this.brandListStatus == 'show' ? '' : 'show'
			if (this.brandListStatus == 'show') {
				const self = this
				const removeBrandListView = function(e) {
					if (!e.target.classList.contains('filter_button') && !e.target.classList.contains('brand_filter')) {
						self.brandListStatus = ''
						document.removeEventListener('click', removeBrandListView)
					}
				}
				document.addEventListener('click', removeBrandListView)
			}
		},
		selectBrand: function(brand) {
			this.brandName = brand
			this.brandFilter()
			this.brandListStatus = ''
		},
		brandFilter: function() {

			if (this.brandName == 'All Brands') {

				this.dealers = this.dealerData

			} else {

				this.dealers = this.dealerData.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})

			}
			
		},
		dealerBrandCheck: function(dealer) {
			const dealerBrandList = dealer.acf.brands_source.formatted_value.filter((data) => {
				return data.post_title == this.brandName
			})
			return dealerBrandList.length != 0
		},
		showAreaList: function() {
			this.areaListStatus = this.areaListStatus == 'show' ? '' : 'show'
			if (this.areaListStatus == 'show') {
				const self = this
				const removeAreaListView = function(e) {
					if (!e.target.classList.contains('filter_button') && !e.target.classList.contains('area_filter')) {
						self.areaListStatus = ''
						document.removeEventListener('click', removeAreaListView)
					}
				}
				document.addEventListener('click', removeAreaListView)
			}
		},
		selectArea: function(area) {
			this.areaName = area
			this.areaFilter()
			this.areaListStatus = ''
		},
		areaFilter: function() {

			if (this.areaName == 'All Area') {

				this.dealers = this.dealerData

			} else {

				this.dealers = this.dealerData.filter((dealer) => {
					return this.dealerAreaCheck(dealer)
				})

			}
			
		},
		dealerAreaCheck: function(dealer) {
			const dealerAreaList = dealer._embedded['wp:term'][0].filter((data) => {
				return data.name == this.areaName
			})
			return dealerAreaList.length != 0
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 15rem;
		h1 {
			margin-left: auto;
			vertical-align: baseline;
			.date {
				display: inline-block;
				margin-top: auto;
				margin-left: auto;
				font-size: 1.6rem;
				line-height: 2;
				vertical-align: baseline;
			}
		}
		.wrap {
			margin-top: 4.8rem;
			.filter {
				display: block;
				width: calc(20% - 3.2rem);
				z-index: 1;
				.heading {
					display: inline-block;
					margin-bottom: 3.5rem;
					font-size: 1.4rem;
					line-height: 1;
				}
				.filter_wrap {
					position: relative;
					margin-bottom: 1.6rem;
					.toggle {
						position: relative;
						display: block;
						padding-right: 2rem;
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
						&.show {
							&:after {
								transform: scale(1, -1);
							}
						}
					}
					ul {
						position: absolute;
						top: 3rem;
						left: 0;
						padding: 0.8rem 0;
						height: 30rem;
						opacity: 0;
						pointer-events: none;
						background-color: #F5F4EA;
						box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
						border-radius: 0.3rem;
						overflow: scroll;
						z-index: 1;
						li {
							button {
								position: relative;
								display: block;
								padding: 1.6rem 2rem;
								width: 30rem;
								font-size: 1.4rem;
								line-height: 1;
								&:after {
									position: absolute;
									top: 0;
									right: 2rem;
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
								&:hover {
									background-color: #EAE9DC;
								}
								&.selected {
									background-color: rgba(39, 52, 63, 0.15);
									&:after {
										content: '';
									}
								}
							}
						}
						&.show {
							opacity: 1;
							pointer-events: auto;
						}
					}
				}
			}
			.list_wrap {
				.list_header {
					position: relative;
					z-index: 1;
					// padding: 0.6rem 0 2.4rem;
					padding-bottom: 2.4rem;
					span {
						display: block;
						line-height: 1;
					}
					.num {
						margin-left: auto;
						width: fit-content;
					}
				}
				.dealer_list {
					border-top: 1px solid #27343F;
					.dealer {
						position: relative;
						margin-bottom: 4.8rem;
						padding: 2.4rem 0 3.5rem;
						.name {
							display: block;
							margin-bottom: 1.2rem;
						}
						.filter_wrap {
							width: 100%;
							* {
								font-size: 1.4rem;
								color: rgba(39, 52, 63, 0.6);
							}
							span {
								width: 20%;
							}
							.filter_list {
								width: 75%;
							}
						}
						.link {
							position: absolute;
							right: 0;
							bottom: 0;
							font-size: 1.4rem;
							line-height: 1.5;
						}
						&:nth-of-type(n + 3) {
							border-top: 1px solid rgba(39, 52, 63, 0.15);
						}
					}
					.zero {
						padding: 2.4rem;
						color: rgba(39, 52, 63, 0.6);
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
			h1 {
				.date {
					font-size: 1.4rem;
				}
			}
			.wrap {
				margin-top: 4.2rem;
				.filter {
					position: sticky;
					// position: fixed;
					// top: initial;
					// left: 0;
					// right: 0;
					// bottom: 0;
					top: 0;
					display: flex;
					width: 100%;
					// background-color: #EAE9DC;
					background-color: #F5F4EA;
					z-index: 2;
					.heading {
						// display: none;
						margin-bottom: 0;
						width: 25%;
						font-size: 1.2rem;
					}
					.filter_wrap {
						position: relative;
						margin-left: auto;
						margin-bottom: 1.6rem;
						width: 75%;
						.toggle {
							display: inline-block;
							line-height: 1;
						}
						ul {
							top: 2.5rem;
							height: 20rem;
							li {
								button {
									padding: 1.2rem 1.6rem;
									width: 20rem;
									font-size: 1.2rem;
									&:after {
										right: 2rem;
									}
									&:hover {
										background-color: #F5F4EA;
									}
									&.selected {
										&:after {
										}
									}
								}
							}
							&.show {
								opacity: 1;
								pointer-events: auto;
							}
						}
					}
					// .area_wrap {
					// 	display: block;
					// 	width: 100vw;
					// 	overflow: scroll;
					// }
					// .area_list {
					// 	display: flex;
					// 	flex-wrap: nowrap;
					// 	margin-top: 0;
					// 	padding: 2rem;
					// 	width: fit-content;
					// 	white-space: nowrap;
					// 	border-top: none;
					// 	// overflow: scroll;
					// 	li {
					// 		display: inline-block;
					// 		margin-top: 0;
					// 		margin-left: 3rem;
					// 		// padding: 2rem 0;
					// 		button {
					// 		}
					// 		&.selected {
					// 			&:before {
					// 			}
					// 		}
					// 		&:first-of-type {
					// 			margin-left: 0;
					// 		}
					// 	}
					// }
				}
				.list_wrap {
					margin-top: 1rem;
					width: 100%;
					.list_header {
						position: relative;
						z-index: 1;
						padding-bottom: 2.4rem;
						.heading {
							width: 25%;
							font-size: 1.2rem;
						}
						.num {
							display: inline-block;
							line-height: 1;
							// width: calc(19.5vw * 2);
							width: 75%;
						}
					}
					.dealer_list {
						.dealer {
							margin-bottom: 3.5rem;
							padding: 1.6rem 0 3rem;
							width: 100%;
							.filter_wrap {
								margin-top: 0.6rem;
								* {
									font-size: 1.2rem;
								}
								span {
								}
								.filter_list {
								}
							}
							.link {
								font-size: 1.2rem;
							}
							&:nth-of-type(n + 1) {
								border-top: 1px solid rgba(39, 52, 63, 0.15);
							}
						}
						.zero {
							padding: 1.6rem;
						}
					}
				}
			}
		}

	}

</style>
