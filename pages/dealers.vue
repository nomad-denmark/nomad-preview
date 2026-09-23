<template>

	<main class="l4 r4">

		<h1 class="name mv grid_vw_4 flex">Dealers<span class="date">Updated {{ $dateFns.format(updatedDate, 'yyyy.MM.dd') }}</span></h1>

		<div class="wrap flex">
			<div class="filter sticky grid_vw_1" data-lenis-prevent>
				<span class="heading">Area</span>
				<div class="area_wrap" data-lenis-prevent>
					<ul class="area_list flex-start align-center">
						<li class="selected">
							<button class="selected" @click="scrollToTarget('area1')">北海道・東北</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area2')">関東</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area3')">甲信越</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area4')">東海・北陸</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area5')">近畿</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area6')">中国</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area7')">四国</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('area8')">九州・沖縄</button>
						</li>
						<li>
							<button class="" @click="scrollToTarget('online')">オンラインショップ</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="list_wrap grid_vw_4">
				<div class="list_header flex">
					<div class="brand_wrap flex">
						<button class="toggle filter_button" :class="brandListStatus" @click="showBrandList">{{ brand }}<i></i></button>
						<ul class="brand_list" :class="brandListStatus"  data-lenis-prevent>
							<li>
								<button class="brand_filter" :class="{ 'selected': brand == 'All Brands' }" @click="selectBrand('All Brands')">All Brands</button>
							</li>
							<li v-for="brandName in brandList">
								<button class="brand_filter" :class="{ 'selected': brand == brandName }" @click="selectBrand(brandName)">{{ brandName }}</button>
							</li>
						</ul>
					</div>
					<span class="num">{{ dealerNum }} Dealers</span>
				</div>
				<ul class="area_list grid_vw_4">
					<li id="area1" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea1.length == 0 }">
							<h3>北海道・東北</h3>
							<span class="num">({{ dealerListArea1.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea1">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area2" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea2.length == 0 }">
							<h3>関東</h3>
							<span class="num">({{ dealerListArea2.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea2">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area3" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea3.length == 0 }">
							<h3>甲信越</h3>
							<span class="num">({{ dealerListArea3.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea3">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area4" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea4.length == 0 }">
							<h3>東海・北陸</h3>
							<span class="num">({{ dealerListArea4.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea4">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area5" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea5.length == 0 }">
							<h3>近畿</h3>
							<span class="num">({{ dealerListArea5.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea5">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area6" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea6.length == 0 }">
							<h3>中国</h3>
							<span class="num">({{ dealerListArea6.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea6">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area7" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea7.length == 0 }">
							<h3>四国</h3>
							<span class="num">({{ dealerListArea7.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea7">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="area8" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListArea8.length == 0 }">
							<h3>九州・沖縄</h3>
							<span class="num">({{ dealerListArea8.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListArea8">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
					<li id="online" class="flex grid_vw_4">
						<div class="area_wrap flex" :class="{ 'zero': dealerListOnline.length == 0 }">
							<h3>オンラインショップ</h3>
							<span class="num">({{ dealerListOnline.length }})</span>
						</div>
						<ul class="dealer_list flex grid_vw_3">
							<li class="flex grid_vw_3" v-for="dealer in dealerListOnline">
								<span class="name grid_vw_1">{{ dealer.title.rendered }}</span>
								<span class="address grid_vw_1">{{ dealer.acf.address }}</span>
								<div class="link_wrap grid_vw_1">
									<a v-if="dealer.acf.link" class="icon outside underline" target="_blank" :href="dealer.acf.link">Website<i></i></a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
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
						'area_category': 'hokkaido-tohoku',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'kanto',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'koushinetsu',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'tokai-hokuriku',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'kinki',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'chugoku',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'shikoku',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'kyushu-okinawa',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'area_category': 'online',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('dealers_brands', {
					params: {
					}
				}),
				app.$wordpress.getPosts('dealers', {
					params: {
						'posts_per_page': 1,
					}
				}),
			])
			.then((res) => {
				const dealerData1 = res[0].data
				const dealerData2 = res[1].data
				const dealerData3 = res[2].data
				const dealerData4 = res[3].data
				const dealerData5 = res[4].data
				const dealerData6 = res[5].data
				const dealerData7 = res[6].data
				const dealerData8 = res[7].data
				const dealerDataOnline = res[8].data
				const brandList = res[9].data
				const updatedDate = res[10].data[0].date
				return { dealerData1, dealerData2, dealerData3, dealerData4, dealerData5, dealerData6, dealerData7, dealerData8, dealerDataOnline, brandList, updatedDate }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Dealers | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Dealers | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/dealers/' },
			],
		}
	},
	data() {
		return {
			area: '',
			brand: 'All Brands',
			brandListStatus: '',
			// dealerNum: 0,
			dealersArea1: [],
			dealersArea2: [],
			dealersArea3: [],
			dealersArea4: [],
			dealersArea5: [],
			dealersArea6: [],
			dealersArea7: [],
			dealersArea8: [],
			dealersOnline: []
		}
	},
	mounted() {

		this.filter()

	},
	computed: {
		// areaName: function() {
		// 	return this.area
		// },
		// brandName: function() {
		// 	return this.brand
		// },
		dealerNum: function() {
			const dealerList = this.dealersArea1.concat(this.dealersArea2, this.dealersArea3, this.dealersArea4, this.dealersArea5, this.dealersArea6, this.dealersArea7, this.dealersArea8, this.dealersOnline)
			var dealerNameList = []
			dealerList.forEach((dealer) => {
				if (!dealerNameList.includes(dealer.title.rendered)) {
					dealerNameList.push(dealer.title.rendered)
				}
			})
			return dealerNameList.length
		},
		dealerListArea1: function() {
			return this.dealersArea1
		},
		dealerListArea2: function() {
			return this.dealersArea2
		},
		dealerListArea3: function() {
			return this.dealersArea3
		},
		dealerListArea4: function() {
			return this.dealersArea4
		},
		dealerListArea5: function() {
			return this.dealersArea5
		},
		dealerListArea6: function() {
			return this.dealersArea6
		},
		dealerListArea7: function() {
			return this.dealersArea7
		},
		dealerListArea8: function() {
			return this.dealersArea8
		},
		dealerListOnline: function() {
			return this.dealersOnline
		}
	},
	methods: {
		scrollToTarget: function(target) {
			this.$scrollTo('#' + target, {
				offset: window.innerWidth < 980 ? -69 : -90,
			})
		},
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
		selectBrand: function(brandName) {
			this.brand = brandName
			this.filter()
			this.brandListStatus = ''
		},
		filter: function() {

			if (this.brand == 'All Brands') {

				this.dealersArea1 = this.dealerData1
				this.dealersArea2 = this.dealerData2
				this.dealersArea3 = this.dealerData3
				this.dealersArea4 = this.dealerData4
				this.dealersArea5 = this.dealerData5
				this.dealersArea6 = this.dealerData6
				this.dealersArea7 = this.dealerData7
				this.dealersArea8 = this.dealerData8
				this.dealersOnline = this.dealerDataOnline


			} else {

				this.dealersArea1 = this.dealerData1.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea2 = this.dealerData2.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea3 = this.dealerData3.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea4 = this.dealerData4.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea5 = this.dealerData5.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea6 = this.dealerData6.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea7 = this.dealerData7.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersArea8 = this.dealerData8.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
				this.dealersOnline = this.dealerDataOnline.filter((dealer) => {
					return this.dealerBrandCheck(dealer)
				})
			}
			
		},
		dealerBrandCheck: function(dealer) {
			const dealerBrandList = dealer._embedded['acf:post'].filter((data) => {
				return data.title.rendered == this.brand
			})
			return dealerBrandList.length != 0
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
				width: calc(20% - 3.2rem);
				.heading {
					display: inline-block;
					line-height: 1;
				}
				.area_list {
					margin-top: 2.4rem;
					padding-top: 1.6rem;
					border-top: 1px solid #27343F;
					li {
						position: relative;
						margin-top: 0.8rem;
						button {
							display: inline-block;
							line-height: 1;
						}
						&.selected {
							&:before {
								// content: '';
								// position: absolute;
								// top: 0;
								// left: -1.2rem;
								// bottom: 0;
								// display: block;
								// margin: auto;
								// width: 4px;
								// height: 4px;
								// background-color: #27343F;
								// border-radius: 50%;
							}
						}
					}
				}
			}
			.list_wrap {
				.list_header {
					position: relative;
					z-index: 1;
					padding-bottom: 2.4rem;
					.brand_wrap {
						position: relative;
						.toggle {
							position: relative;
							display: inline-block;
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
							top: 2.5rem;
							left: 0;
							padding: 0.8rem 0;
							height: 30rem;
							opacity: 0;
							pointer-events: none;
							background-color: #F5F4EA;
							box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
							border-radius: 0.3rem;
							overflow: scroll;
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
					.num {
						display: inline-block;
						line-height: 1;
						// width: calc(19.5vw * 2);
					}
				}
				.area_list {
					> li {
						padding-bottom: 9.6rem;
						border-top: 1px solid #27343F;
						.area_wrap {
							margin-top: 2.4rem;
							h3 {
								margin-right: 0.6rem;
								font-size: 2rem;
								line-height: 1.5;
							}
							.num {
								display: inline-block;
								font-size: 1.4rem;
								line-height: 1.5;
							}
							&.zero {
								opacity: 0.3;
							}
						}
						.dealer_list {
							margin-left: auto;
							height: fit-content;
							> li {
								padding: 2.4rem 0;
								border-top: 1px solid rgba(39, 52, 63, 0.15);
								.link_wrap {
									text-align: right;
									a {
										line-height: 1.5;
									}
								}
							}
						}
						&.zero {
							.area_wrap {
								h3 {
									color: rgba(39, 52, 63, 0.6);
								}
							}
						}
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
					position: fixed;
					top: initial;
					left: 0;
					right: 0;
					bottom: 0;
					width: auto;
					background-color: #EAE9DC;
					z-index: 2;
					.heading {
						display: none;
					}
					.area_wrap {
						display: block;
						width: 100vw;
						overflow: scroll;
					}
					.area_list {
						display: flex;
						flex-wrap: nowrap;
						margin-top: 0;
						padding: 2rem;
						width: fit-content;
						white-space: nowrap;
						border-top: none;
						// overflow: scroll;
						li {
							display: inline-block;
							margin-top: 0;
							margin-left: 3rem;
							// padding: 2rem 0;
							button {
							}
							&.selected {
								&:before {
								}
							}
							&:first-of-type {
								margin-left: 0;
							}
						}
					}
				}
				.list_wrap {
					.list_header {
						position: relative;
						z-index: 1;
						padding-bottom: 2.4rem;
						.brand_wrap {
							position: relative;
							button {
								display: inline-block;
								line-height: 1;
							}
							ul {
								li {
									button {
										&:after {
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
						.num {
							display: inline-block;
							line-height: 1;
							// width: calc(19.5vw * 2);
						}
					}
					.area_list {
						> li {
							padding-bottom: 6rem;
							.area_wrap {
								margin-top: 1.6rem;
								h3 {
									margin-right: 0.6rem;
									font-size: 1.8rem;
								}
								.num {
									font-size: 1.2rem;
								}
								&.zero {
								}
							}
							.dealer_list {
								margin-top: 3.5rem;
								> li {
									padding: 1.6rem 0;
									width: 100%;
									.name {
										width: calc(100% - ((100vw - 1.6rem * 9) / 8) * 2 - (1.6rem * 2));
									}
									.address {
										margin-top: 0.4rem;
										width: 100%;
										width: calc(100% - ((100vw - 1.6rem * 9) / 8) * 2 - (1.6rem * 2));
										order: 1;
									}
									.link_wrap {
										margin-left: auto;
										a {
										}
									}
								}
							}
							&.zero {
								.area_wrap {
									h3 {
									}
								}
							}
						}
					}
				}
			}
		}

	}

</style>
