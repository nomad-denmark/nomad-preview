<template>

	<main class="l4 r4">

		<section class="mv flex">
			<h1 class="grid_vw_4">Catalog Download</h1>
			<div class="wrap flex">
				<span class="heading grid_vw_1">Free Download</span>
				<p class="introduction grid_vw_3">NOMADの世界観や幅広いラインナップをデジタルカタログでご覧いただけます。各種カタログ送付をご希望の方はお気軽にお問い合わせください。</p>
				<div class="button_wrap grid_vw_1">
					<button class="icon outside" @click="scrollToTarget('catalog')">Catalog<i></i></button>
					<button class="icon outside" @click="scrollToTarget('priceList')">Price List<i></i></button>
				</div>
			</div>
		</section>

		<section class="list">
			<div id="catalog" class="wrap flex">
				<h2 class="title grid_vw_1">Catalog</h2>
				<div class="list_wrap grid_vw_4">
					<ul class="nomad_list flex flex-start">
						<li class="grid_vw_2" v-for="nomad_catalog in nomadList">
							<a class="grid_vw_2" target="_blank" :href="nomad_catalog.pdf">
								<div class="thumbnail ratio">
									<img alt="" :src="nomad_catalog.thumbnail">
								</div>
								<div class="text_wrap">
									<span class="title">{{ nomad_catalog.title }}</span>
									<p v-if="nomad_catalog.date" class="date">{{ nomad_catalog.date }}</p>
								</div>
							</a>
						</li>
					</ul>
					<ul class="brand_list flex flex-start">
						<li class="grid_vw_1" v-for="brand_catalog in brandList">
							<a class="grid_vw_1" target="_blank" :href="brand_catalog.pdf">
								<div class="thumbnail ratio">
									<img alt="" :src="brand_catalog.thumbnail">
								</div>
								<div class="text_wrap">
									<span class="title">{{ brand_catalog.title }}</span>
									<p v-if="brand_catalog.date" class="date">{{ brand_catalog.date }}</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="priceList" class="wrap flex">
				<h2 class="title grid_vw_1">Price List</h2>
				<div class="list_wrap grid_vw_4">
					<ul class="price_list flex flex-start">
						<li class="grid_vw_1" v-for="price_catalog in priceList">
							<a class="grid_vw_1" target="_blank" :href="price_catalog.pdf">
								<div class="thumbnail ratio">
									<img alt="" :src="price_catalog.thumbnail">
								</div>
								<div class="text_wrap">
									<span class="title">{{ price_catalog.title }}</span>
									<p v-if="price_catalog.date" class="date">{{ price_catalog.date }}</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>

	</main>

</template>

<script>
export default {
	name: 'CatalogDownloadPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('catalog', {
					params: {
						'category': 'NOMAD',
						'order': '-_sys.customOrder'
					}
				}),
				app.$wordpress.getPosts('catalog', {
					params: {
						'category': 'BRAND',
						'order': '-_sys.customOrder'
					}
				}),
				app.$wordpress.getPosts('catalog', {
					params: {
						'category': 'PRICE',
						'order': '-_sys.customOrder'
					}
				}),
			])
			.then((res) => {
				const nomadList = res[0].data
				const brandList = res[1].data
				const priceList = res[2].data
				return { nomadList, brandList, priceList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Catalog Download | NOMAD',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Catalog Download | NOMAD' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/catalog/' },
			],
		}
	},
	data() {
		return {
		}
	},
	mounted() {

	},
	computed: {
	},
	methods: {
		scrollToTarget: function(target) {
			this.$scrollTo('#' + target, {
				offset: window.innerWidth < 980 ? -69 : -100,
			})
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 15rem;
		.mv {
			h1 {
				margin-left: auto;
			}
			.wrap {
				margin-top: 6rem;
				width: 100%;
				.heading {
					display: inline-block;
					line-height: 1.2;
				}
				.introduction {
					width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 3 + (2rem * 2) - 2rem);
					font-size: 1.8rem;
					line-height: 2;
				}
				.button_wrap {
					button {
						position: relative;
						display: inline-block;
						padding: 1.2rem 1.8rem;
						width: calc(100% - 1rem - (1.8rem * 2));
						font-size: 1.4rem;
						line-height: 1;
						border-bottom: 1px solid rgba(39, 52, 63, 0.15);
						i {
							left: 0;
							right: initial;
							transform: rotate(90deg);
						}
					}
				}
			}
		}
		.list {
			margin-top: 15rem;
			.wrap {
				margin-bottom: 18rem;
				padding-top: 2rem;
				border-top: 1px solid #27343F;
				h2 {
					font-size: 3.3rem;
					line-height: 1.2;
				}
				ul {
					li {
						margin-right: 2rem;
						margin-bottom: 4.8rem;
						a {
							display: block;
							.thumbnail {
								padding-top: 133%;
							}
							.text_wrap {
								margin-top: 1.6rem;
								.title {
									display: block;
									line-height: 1.5;
								}
								.date {
									margin-top: 0.4rem;
									line-height: 1.2;
									color: rgba(39, 52, 63, 0.6);
								}
							}
						}
						&:nth-of-type(4n),
						&:last-of-type {
							margin-right: 0;
						}
					}
					&.nomad_list {
						li {
							a {
								.thumbnail {
									padding-top: 75%;
									background-color: #EAE9DC;
									img {
										margin: 3rem auto;
										width: auto;
										height: calc(100% - 6rem);
									}
								}
								.text_wrap {
									.title {
										font-size: 2.2rem;
									}
									.introduction {
									}
								}
							}
						}
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
			.mv {
				h1 {
					width: 100%;
				}
				.wrap {
					margin-top: 3.5rem;
					width: 100%;
					.heading {
						display: none;
					}
					.introduction {
						width: 100%;
						font-size: 1.4rem;
					}
					.button_wrap {
						margin-top: 2rem;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						width: 100%;
						button {
							width: calc(50% - 0.8rem - (1.8rem * 2));
							font-size: 1.2rem;
							i {
							}
						}
					}
				}
			}
			.list {
				margin-top: 7rem;
				.wrap {
					margin-bottom: 15rem;
					padding-top: 1.6rem;
					h2 {
						font-size: 2.4rem;
					}
					.list_wrap {
						margin-top: 3.5rem;
						width: 100%;
					}
					ul {
						li {
							margin-right: auto;
							margin-bottom: 3.5rem;
							width: calc(50% - 0.8rem);
							a {
								.thumbnail {
								}
								.text_wrap {
									margin-top: 0.8rem;
									.title {
									}
									.date {
									}
								}
							}
							&:nth-of-type(4n),
							&:last-of-type {
								margin-right: 0;
							}
						}
						&.nomad_list {
							li {
								width: 100%;
								a {
									.thumbnail {
										img {
											margin: 1.6rem auto;
											height: calc(100% - 1.6rem * 2);
										}
									}
									.text_wrap {
										margin-top: 1.2rem;
										.title {
											font-size: 1.8rem;
										}
										.introduction {
										}
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
