<template>

	<main class="">

		<div class="mv">
			<span class="heading">Catalog Download</span>
			<h1 class="">{{ brandCatalogData.title }}</h1>
			<p class="introduction">
				ブランド紹介や商品ラインナップが掲載されたデジタルカタログを無料でダウンロードいただけます。送付をご希望の方はお気軽にお問い合わせください。<br>
				※一部のカタログを除き、カタログ掲載の価格はディーラー様向けに税抜き表記となっております。
			</p>
		</div>

		<div class="catalog_wrap flex">
			<!-- <a v-if="nomadCatalog && nomadCatalog.length != 0" class="grid_vw_2" target="_blank" :href="nomadCatalog.pdf">
				<div class="thumbnail ratio">
					<img alt="" :src="nomadCatalog.thumbnail">
				</div>
				<div class="text_wrap">
					<span class="title">NOMAD取り扱いブランド総合カタログ</span>
					<p v-if="nomadCatalog.date" class="date">{{ nomadCatalog.date }}</p>
				</div>
			</a> -->
			<a v-if="brandCatalogData.catalog_list.length != 0" class="grid_vw_2" target="_blank" :href="catalog.pdf" v-for="catalog in brandCatalogData.catalog_list">
				<div class="thumbnail ratio">
					<img alt="" :src="catalog.thumbnail">
				</div>
				<div class="text_wrap">
					<span class="title">{{ catalog.title }}</span>
					<p v-if="catalog.date" class="date">{{ catalog.date }}</p>
				</div>
			</a>
		</div>

		<!-- <div v-if="otherList && otherList.length != 0" class="list_wrap flex">
			<h2 class="">Resource & Guide</h2>
			<p class="introduction">商品についての資料、ガイドなどはこちらからダウンロードいただけます。</p>
			<ul class="list flex flex-start">
				<li class="grid_vw_1" v-for="data in otherList">
					<a class="grid_vw_1" target="_blank" :href="data.pdf">
						<div class="thumbnail ratio">
							<img alt="" :src="data.thumbnail">
						</div>
						<div class="text_wrap">
							<span class="title">{{ data.title }}</span>
							<p v-if="data.date" class="date">{{ data.date }}</p>
						</div>
					</a>
				</li>
			</ul>
		</div> -->
	</div>

	</main>

</template>

<script>
export default {
	layout: 'download',
	name: 'CatalogDownloadPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('brands', {
					params: {
						'slug': params.id,
						'catalog_download': true,
						// '_embed': true,
					}
				}),
			])
			.then((res) => {
				const brandCatalogData = res[0].data[0]
				return { brandCatalogData }
			})
		} catch(error) {
			// console.log(error)
		}
	},
	head() {
		return {
			title: 'Catalog Download | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Catalog Download | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/catalog/' + this.brandCatalogData.slug },
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

		padding: 16rem;
		padding-bottom: 8rem;
		.mv {
			.heading {
				display: inline-block;
				line-height: 1.5;
			}
			h1 {
				margin-top: 1.6rem;
				font-size: 5.8rem;
				line-height: 1.1;
			}
			.introduction {
				margin-top: 4.8rem;
				font-size: 1.8rem;
				line-height: 2;
			}
		}
		.catalog_wrap {
			margin-top: 7rem;
			a {
				display: block;
				margin-bottom: 3.5rem;
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
					margin-top: 1.6rem;
					.title {
						display: block;
						font-size: 1.8rem;
						line-height: 1.5;
					}
					.date {
						margin-top: 0.4rem;
						line-height: 1.2;
						color: rgba(39, 52, 63, 0.6);
					}
				}
			}
		}
		.list_wrap {
			margin-top: 3.5rem;
			padding-top: 7rem;
			border-top: 1px solid #27343F;
			h2 {
				font-size: 3.3rem;
				line-height: 1.2;
			}
			.introduction {
				margin-top: 1.2rem;
				font-size: 1.8rem;
				line-height: 2;
			}
			ul {
				margin-top: 7rem;
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
			}
		}
		@media only screen and (max-width: 980px) {
			padding: 9rem 1.6rem 4.8rem;
			.mv {
				.heading {
				}
				h1 {
					margin-top: 0.8rem;
					font-size: 3.3rem;
				}
				.introduction {
					margin-top: 2.4rem;
					font-size: 1.4rem;
				}
			}
			.catalog_wrap {
				margin-top: 3.5rem;
				a {
					// margin-bottom: 3.5rem;
					width: 100%;
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
			.list_wrap {
				margin-top: 3.5rem;
				padding-top: 3.5rem;
				h2 {
					font-size: 2.4rem;
				}
				.introduction {
					margin-top: 0.8rem;
				}
				ul {
					margin-top: 3.5rem;
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
				}
			}
		}



	}

</style>
