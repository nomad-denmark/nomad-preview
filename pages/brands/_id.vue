<template>

	<main class="">

		<div>

			<div class="back_wrap sticky grid_vw_1 l4">
				<NuxtLink class="icon back" to="/brands">Back to List<i></i></NuxtLink>
			</div>

			<div>

				<!-- <section class="mv flex"> -->
					<div class="mv_title mv grid_vw_4 r4">
						<div class="wrap grid_vw_4 flex">
							<div class="logo_wrap grid_vw_1">
								<img class="logo" alt="" :src="brand.acf.logo">
							</div>
							<!-- <div class="text_wrap grid_vw_3"> -->
								<h1 class="grid_vw_3">{{ brand.title.rendered }}</h1>
								<ul class="category_list flex flex-start grid_vw_3">
									<li v-for="category in brand._embedded['wp:term'][0]">
										<span class="category">{{ category.name }}</span>
									</li>
									<!-- <li v-if="brand.otherCategory">
										<span class="category">{{ brand.otherCategory }}</span>
									</li> -->
								</ul>
							<!-- </div> -->
						</div>
					</div>
					<div class="nav_wrap sticky grid_vw_4 r4" data-lenis-prevent>
						<div class="wrap flex align-center">
							<button class="about" @click="scrollToTarget('contents')">About</button>
							<ul class="flex flex-start">
								<li v-for="link in brand.acf.links">
									<a class="icon outside" target="_blank" :href="link.url">{{ link.label }}<i></i></a>
								</li>
							</ul>
						</div>
					</div>
				<!-- </section> -->

				<div class="visual">
					<div class="ratio">
						<img alt="" :src="brand.acf.thumbnail_horizontal">
					</div>
				</div>

				<section id="contents" class="contents flex l4 r4">
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
							<span class="heading">Brand</span>
							<span class="name">{{ brand.title.rendered }}</span>
						</div>
					</div>
					<div class="content grid_vw_3">
						<div class="wrap" v-html="brand.content.rendered">
						</div>
						<div class="modal_list">
							<div class="modal" v-for="modal in brand.acf.modal">
								<button class="modal_button underline" @click="modalOpen('modal_' + index)">{{ modal.title }}</button>
								<div :id="'modal_' + index" class="modal_bg" @click="clickModalBg" data-lenis-prevent>
									<div class="modal_content">
										<div class="title flex">
											<h3>{{ modal.title }}</h3>
											<button @click="modalClose('modal_' + index)"></button>
										</div>
										<div class="html" v-html="modal.content"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="download_list">
							<a class="download underline" target="_blank" :href="catalog.acf.pdf" v-for="catalog in brand._embedded['acf:post']" download>
								<span class="title">
									{{ catalog.title.rendered }}
								</span>
								<span class="date">{{ catalog.acf.date + ' 更新版' }}</span>
							</a>
						</div>
					</div>
				</section>

				<section class="movie l4 r4">
					<div class="wrap" v-for="movie in brand.acf.movie">
						<div class="ratio">
							<iframe alt="" :src="movie.url.replace('vimeo.com', 'player.vimeo.com/video')" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
						</div>
						<span class="caption">{{ movie.caption }}</span>
					</div>
				</section>

				<section class="gallery flex l4 r4">
					<ul>
						<li v-for="gallery in brand.acf.gallery_source.formatted_value.gallery_1">
							<img alt="" :src="gallery">
						</li>
					</ul>
					<ul>
						<li v-for="gallery in brand.acf.gallery_source.formatted_value.gallery_2">
							<img alt="" :src="gallery">
						</li>
					</ul>
				</section>

			</div>

		</div>

		<section class="related">
			<h3 class="l4">Other Brands</h3>
			<ul class="brand_list flex">
				<li class="" v-for="data, index in otherBrandList">
					<NuxtLink class="" :to="{ name: 'brands-id', params: { id: data.slug } }">
						<div class="visual_wrap ratio">
							<img v-if="index == 0" alt="" :src="data.acf.thumbnail_horizontal">
							<img v-if="index != 0" alt="" :src="data.acf.thumbnail_vertical">
							<h4>{{ data.title.rendered }}</h4>
						</div>
						<div class="detail_wrap flex">
							<img class="logo" alt="" :src="data.acf.logo">
							<ul class="category_list">
								<li v-for="category in data._embedded['wp:term'][0]">
									<span class="category">{{ category.name }}</span>
								</li>
								<!-- <li v-if="data.otherCategory">
									<span class="category">{{ data.otherCategory }}</span>
								</li> -->
							</ul>
						</div>
					</NuxtLink>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>
export default {
	name: 'BrandDetailPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('brands', {
					params: {
						'slug': params.id,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const brand = res[0].data[0]
				return Promise.all([
					app.$wordpress.getPosts('brands', {
						params: {
							'posts_per_page': 4,
							'exclude': brand.id,
							'_embed': true
						}
					}),
				])
				.then((res) => {
					const otherBrandList = res[0].data
					return { brand, otherBrandList }
				})
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: this.brand.title.rendered + ' | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.brand.title.rendered + ' | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/brands/' + this.brand.slug },
				{ hid: 'og:image', property: 'og:image', content: this.brand.acf.thumbnail_horizontal ? this.brand.acf.thumbnail_horizontal : 'https://preview.nomadinc.jp/no_image.jpg' },
				{ hid: 'og:description', property: 'og:description', content: 'NOMADが取り扱う' + this.brand.title.rendered + 'のブランド概要や注目の製品、ストーリーなどを紹介するページです。最新のカタログやプライスリストもダウンロード可能です。' },
			],
			bodyAttrs: {
				class: this.modalStatus
			},
		}
	},
	data() {
		return {
			modalStatus: '',
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
	methods: {
		scrollToTarget: function(target) {
			this.$scrollTo('#' + target, {
				offset: window.innerWidth < 980 ? -124 : -190,
			})
		},
		modalOpen: function(modalName) {
			this.modalStatus = 'body_fix'
			document.getElementById(modalName).classList.add('open')
		},
		modalClose: function(modalName) {
			this.modalStatus = ''
			document.getElementById(modalName).classList.remove('open')
		},
		clickModalBg: function(e) {
			if (e.target.classList.contains('modal_bg')) {
				this.modalStatus = ''
				document.getElementById(e.target.id).classList.remove('open')
			}
		},
		shareURL: function(shareTarget) {
			var url = 'https://twitter.com/intent/tweet?url='
			if (shareTarget == 'LINE') {
				url = 'https://line.me/R/share?text='
			} else if (shareTarget == 'Facebook') {
				url = 'https://www.facebook.com/share.php?u='
			}
			return url + 'https://preview.nomadinc.jp/brands/' + this.brand.slug
		},
		copyURL: function() {
			this.$copyText('https://preview.nomadinc.jp/brands/' + this.brand.slug)
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

		padding-top: 16rem;
		// padding-top: 8rem;
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
		}

		// .mv {
			// top: 8rem;
			// z-index: 1;
			.mv_title {
				position: relative;
				margin-top: -5rem;
				margin-left: auto;
				z-index: 1;
				.wrap {
					padding-bottom: 6rem;
					// border-bottom: 1px solid rgba(39, 52, 63, 0.15);
					.logo_wrap {
						margin-top: 2rem;
						width: 11rem;
						height: fit-content;
					}
					// .text_wrap {
						h1 {
							line-height: 1.2;
						}
						.category_list {
							margin-top: 1.2rem;
							margin-left: auto;
							li {
								line-height: 1.5;
								span {
									position: relative;
									display: inline-block;
									line-height: 1.5;
								}
								&:not(:last-of-type) {
									margin-right: 0.8rem;
									span {
										&:after {
											content: ',';
											position: absolute;
											top: 0;
											right: -0.4rem;
											bottom: 0;
											display: block;
											margin: auto;
										}
									}
								}
							}
						}
					// }
				}
				@media only screen and (max-width: 980px) {
					margin-top: 1.6rem;
					.wrap {
						position: relative;
						padding: 0 1.6rem 2.4rem;
						.logo_wrap {
							margin-top: auto;
						}
						h1 {
							margin-bottom: 3.5rem;
							width: 100%;
							line-height: 1.2;
							order: -1;
						}
						.category_list {
							display: block;
							margin-top: 0;
							li {
								display: block;
								span {
									font-size: 1.2rem;
								}
								&:not(:last-of-type) {

								}
							}
						}
					}
				}
			}
			.nav_wrap {
				top: calc(2.4rem * 3);
				// top: 0;
				margin-left: auto;
				background-color: #F5F4EA;
				z-index: 1;
				&:before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					display: block;
					margin: auto;
					width: 100%;
					height: 1px;
					background-color: rgba(39, 52, 63, 0.15);
				}
				.wrap {
					padding-top: 1rem;
					padding-bottom: 1rem;
					// border-top: 1px solid rgba(39, 52, 63, 0.15);
					a {
						font-size: 1.4rem;
						line-height: 1;
					}
					ul {
						li {
							position: relative;
							line-height: 3rem;
							a {
								position: relative;
								&.download {
									padding-right: 1.5rem;
									&:after {
										content: '';
										position: absolute;
										top: 0;
										right: 0;
										bottom: 0;
										display: block;
										margin: auto;
										width: 1rem;
										height: 1rem;
										background-image: url('~/assets/img/icon/download.svg');
										background-position: center;
										background-size: contain;
										background-repeat: no-repeat;
									}
								}
							}
							&:not(:last-of-type) {
								margin-right: 3.5rem;
							}
						}
					}
				}
				@media only screen and (max-width: 980px) {
					position: sticky;
					top: calc(1.6rem * 2 + 2rem);
					padding-right: 0;
					&:before {
						width: calc(100% - 1.6rem * 2);
					}
					.wrap {
						flex-wrap: nowrap;
						justify-content: flex-start;
						padding: 1.2rem 1.6rem;
						width: calc(100% - 1.6rem * 2);
						overflow: scroll;
						.about {
							margin-right: 2rem;
						}
						ul {
							flex-wrap: nowrap;
							width: fit-content;
							li {
								line-height: 1;
								a {
									position: relative;
									white-space: nowrap;
									&.download {
										&:after {
										}
									}
								}
								&:not(:last-of-type) {
									margin-right: 2rem;
								}
							}
						}
					}
				}
			}
			.back_wrap {
				top: calc(2.4rem * 3);
				padding-right: 2rem;
				padding-top: 1rem;
				padding-bottom: 1rem;
				background-color: #F5F4EA;
				order: -1;
				z-index: 1;
				a {
					display: inline-block;
					line-height: 3rem;
					i {

					}
				}
				@media only screen and (max-width: 980px) {
					top: 0;
					padding-top: 0;
					padding-right: 0;
					padding-bottom: 0;
					a {
						display: inline-block;
						line-height: 2;
						i {

						}
					}
				}
			}
		// }

		.visual {
			width: 100%;
			.ratio {
				padding-top: 100vh;
			}
			@media only screen and (max-width: 980px) {
				.ratio {
					padding-top: 75%;
				}
			}
		}

		.contents {
			position: relative;
			margin-top: 12rem;
			padding-bottom: 15rem;
			.sticky {
				// top: 20rem;
				top: 16rem;
				.heading {
					display: block;
					margin-bottom: 0.8rem;
					color: rgba(39, 52, 63, 0.6);
					line-height: 2;
				}
				.share_wrap {
					ul {

					}
				}
				.title_wrap {
					.name {
						display: block;
					}
				}
			}
			.content {
				.wrap {
					&:deep(*) {
						margin-top: 4.8rem;
						&:first-child {
							margin-top: 0;
						}
					}
					&:deep(h2) {
						// margin-top: 6.4rem;
						font-size: 3.3rem;
						line-height: 1.5;
					}
					&:deep(h3) {
						font-size: 2.5rem;
					}
					&:deep(p),
					&:deep(span) {
						font-size: 1.8rem;
						line-height: 2;
					}
					&:deep(a) {
						position: relative;
						display: inline-block;
						padding-bottom: 0.6rem;
						font-size: 1.8rem;
						line-height: 1.5;
						&:after {
							content: '';
							position: absolute;
							right: 0;
							bottom: 0;
							display: block;
							margin: auto;
							width: 100%;
							height: 1px;
							background-color: #1A1A1A;
							transform: scaleX(1);
							transform-origin: left;
							transition: transform 0.4s cubic-bezier(0.16, 0.97, 0.32, 1), transform 0.4s cubic-bezier(0.16, 0.97, 0.32, 1);
						}
						&:hover {
							@media only screen and (min-width: 980px) {
								&:after {
									transform: scaleX(0);
									transform-origin: right;
								}
							}
						}
					}
					&:deep(img) {
						margin-top: 6.4rem;
					}
				}
				.download_list {
					.download {
						position: relative;
						display: block;
						margin-top: 4.8rem;
						padding: 1.6rem 0;
						span {
							display: block;
							line-height: 1.5;
						}
						.title {
							font-size: 1.8rem;
						}
						.date {
							font-size: 1.4rem;
							color: rgba(39, 52, 63, 0.6);
						}
						&:before {
							content: '';
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							display: block;
							margin: auto;
							width: 2rem;
							height: 2rem;
							background-image: url('~/assets/img/icon/download.svg');
							background-position: center;
							background-size: contain;
							background-repeat: no-repeat;
						}
					}
				}
				.modal_list {
					.modal {
						margin-top: 4.8rem;
						.modal_button {
							position: relative;
							display: inline-block;
							padding-right: 3rem;
							padding-bottom: 0.6rem;
							font-size: 1.8rem;
							&:before {
								content: '';
								position: absolute;
								top: 0;
								right: 0;
								bottom: 0.6rem;
								display: block;
								margin: auto;
								width: 2rem;
								height: 2rem;
								background-image: url('~/assets/img/icon/modal.svg');
								background-position: center;
								background-size: contain;
								background-repeat: no-repeat;
							}
						}
						.modal_bg {
							position: fixed;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-color: rgba(0, 0, 0, 0.5);
							opacity: 0;
							visibility: hidden;
							pointer-events: none;
							z-index: 0;
							transition: all 0s ease-out;
							transition-delay: 0.3s;
							.modal_content {
								position: absolute;
								top: 2rem;
								right: 2rem;
								bottom: 2rem;
								width: 37vw;
								height: calc(100vh - 4rem);
								overflow: scroll;
								transform: translateX(calc(37vw + 2rem));
								transition: all 0.2s 0.1s ease-out;
								background-color: #F5F4EA;
								.title {
									position: sticky;
									top: 0;
									padding: 2.4rem;
									padding-bottom: 2rem;
									height: fit-content;
									border-bottom: 1px solid rgba(39, 52, 63, 0.15);
									background-color: #F5F4EA;
									h3 {
										width: calc(96% - 4.8rem);
										font-size: 1.8rem;

									}
									button {
										padding: 0.4rem;
										width: 2.4rem;
										height: 2.4rem;
										background-image: url('~/assets/img/icon/cross.svg');
										background-position: center;
										background-size: contain;
										background-repeat: no-repeat;
									}
								}
								.html {
									padding: 2.4rem;
									&:deep(img) {
										padding: 1.6rem 0;
									}
									&:deep(h3) {
										margin-top: 2.4rem;
										font-size: 1.8rem;
									}
									&:deep(p),
									&:deep(span) {
										margin: 2.4rem 0;
										font-size: 1.4rem;
										line-height: 2;
									}
									&:deep(a) {
										position: relative;
										display: inline-block;
										padding-bottom: 0.4rem;
										font-size: 1.4rem;
										line-height: 1.5;
										&:after {
											content: '';
											position: absolute;
											right: 0;
											bottom: 0;
											display: block;
											margin: auto;
											width: 100%;
											height: 1px;
											background-color: #1A1A1A;
											transform: scaleX(1);
											transform-origin: left;
											transition: transform 0.4s cubic-bezier(0.16, 0.97, 0.32, 1), transform 0.4s cubic-bezier(0.16, 0.97, 0.32, 1);
										}
										&:hover {
											@media only screen and (min-width: 980px) {
												&:after {
													transform: scaleX(0);
													transform-origin: right;
												}
											}
										}
									}
								}
							}
							&.open {
								opacity: 1;
								visibility: visible;
								pointer-events: auto;
								z-index: 50;
								transition-delay: 0s;
								.modal_content {
									transform: translateX(0);
								}
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 6rem;
				padding-bottom: 6rem;
				.sticky {
					top: 0;
					.heading {
					}
					.share_wrap {
						ul {

						}
					}
					.title_wrap {
						.name {
						}
					}
				}
				.content {
					width: 100%;
					.wrap {
						margin-top: 4.8rem;
						&:deep(*) {
							margin-top: 3.5rem;
						}
						&:deep(h2) {
							font-size: 2.4rem;
						}
						&:deep(h3) {
							font-size: 3rem;
						}
						&:deep(p),
						&:deep(span) {
							font-size: 1.6rem;
						}
						&:deep(a) {
							font-size: 1.6rem;
							&:after {
							}
							&:hover {
								&:after {
									content: none;
								}
							}
						}
						&:deep(img) {
							margin-top: 6.4rem;
						}
					}
					.download_list {
						.download {
							padding: 1.2rem 0;
							span {
							}
							.title {
								font-size: 1.6rem;
							}
							.date {
								font-size: 1.2rem;
							}
							&:before {
							}
						}
					}
					.modal_list {
						.modal {
							.modal_button {
								font-size: 1.6rem;
								&:before {
								}
							}
							.modal_bg {
								.modal_content {
									top: 1rem;
									right: 1rem;
									bottom: 1rem;
									width: calc(100vw - 2rem);
									height: calc(100dvh - 2rem);
									.title {
										padding: 1.6rem;
										padding-bottom: 2rem;
										h3 {
											font-size: 1.6rem;
										}
										button {
											padding: 0.2rem;
										}
									}
									.html {
										padding: 1.6rem;
										&:deep(img) {
										}
										&:deep(h3) {
											margin-top: 2rem;
											font-size: 1.6rem;
										}
										&:deep(p),
										&:deep(span) {
											margin: 2rem 0;
											font-size: 1.2rem;
										}
										&:deep(a) {
											font-size: 1.2rem;
											&:after {
											}
											&:hover {
												&:after {
													content: none;
												}
											}
										}
									}
								}
								&.open {
								}
							}
						}
					}
				}
			}
		}

		.movie {
			.wrap {
				margin-bottom: 4.8rem;
			}
			.caption {
				display: block;
				margin-top: 1.6rem;
			}
			@media only screen and (max-width: 980px) {
				.wrap {
					margin-bottom: 2.4rem;
				}
				.caption {
					margin-top: 1.2rem;
				}
			}
		}

		.gallery {
			margin-top: 12rem;
			ul {
				width: calc(50% - 1rem);
				li {
					margin-bottom: 2rem;
					height: fit-content;
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 6rem;
				ul {
					column-count: 1;
					column-gap: 0;
					li {
						margin-bottom: 1.2rem;
					}
				}
			}
		}

		.related {
			margin-top: 22rem;
			h3 {
				margin-top: 2rem;
				font-size: 5.8rem;
				line-height: 1.2;
			}
			.brand_list {
				margin-top: 3.5rem;
				> li {
					width: 20vw;
					border-bottom: 1px solid rgba(21, 38, 50, 0.15);
					a {
						display: block;
						.visual_wrap {
							padding-top: 35rem;
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
					&:not(:nth-of-type(4n)) {
						.detail_wrap {
							border-right: 1px solid rgba(21, 38, 50, 0.15);
						}
					}
					&:first-of-type {
						width: 40vw;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 10.8rem;
				h3 {
					margin-top: 0;
					font-size: 3.3rem;
				}
				.brand_list {
					margin-top: 2.4rem;
					> li {
						width: calc(50vw - 1px / 2);
						a {
							.visual_wrap {
								padding-top: 22rem;
								h3 {
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
						&:not(:nth-of-type(2n)) {
							.detail_wrap {
								border-right: 1px solid rgba(21, 38, 50, 0.15);
							}
						}
						&:first-of-type {
							width: calc(50vw - 1px / 2);
						}
					}
				}
			}
		}


	}

</style>
