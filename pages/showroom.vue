<template>

	<main class="">

		<section class="mv l4 r4">
			<h1 class="grid_vw_4">Showroom</h1>
			<div class="flex">
				<div class="contact grid_vw_1">
					<div class="wrap">
						<span class="heading">お問い合わせ</span>
						<a class="link" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9">
							<span>150-0022</span>
							<span>東京都渋谷区恵比寿南2-8-2</span>
							<span class="icon outside">キョウデンビル 6F<i></i></span>
						</a>
						<span class="tel">TEL： 03-6407-1073</span>
						<div class="link_wrap">
							<a class="underline" target="_blank" href="tel:03-6407-1073">お電話でのお問い合わせ</a>
						</div>
						<div class="form link_wrap">
							<NuxtLink class="underline" to="/contact">フォームからお問い合わせ</NuxtLink>
						</div>
					</div>
					<div class="wrap">
						<span class="heading">営業時間</span>
						<p class="hour">
							平日 9:00〜18:00<br>
							＊電話受付は17時まで<br>
							第3金曜 9:00〜14:00
						</p>
					</div>
				</div>
				<div class="visual">
					<div class="ratio scroll">
						<img alt="" src="~/assets/img/showroom.jpg">
					</div>
				</div>
				<div class="text_wrap">
					<p class="introduction">お取引企業さま、プレス関係者の皆さま、法人さまにご利用いただける事前予約制のショールームです。スタイリストが創り上げる美しい空間演出は、訪れるたびに新しいインスピレーションを提供します。</p>
					<p class="introduction en">For use by our partners, the press, and corporate clients by reservation only. Our stylists will create a beautiful space that will provide new inspiration each time you visit.</p>
					<div class="button_wrap flex">
						<button class="icon outside" @click="scrollToTarget('overview')">Overview<i></i></button>
						<button class="icon outside" @click="scrollToTarget('news')">News<i></i></button>
						<button class="icon outside" @click="scrollToTarget('service')">Services<i></i></button>
						<button class="icon outside" @click="scrollToTarget('season')">{{ showroom.season }}<i></i></button>
					</div>
				</div>
			</div>
		</section>

		<section id="overview" class="overview l4 r4">
			<div class="wrap flex">
				<div class="grid_vw_1">
					<span class="heading">Overview</span>
				</div>
				<div class="sub_title grid_vw_1">
					<span class="heading">Embrace the Seasons <br class="smart">in a Showroom</span>
				</div>
				<p class="introduction grid_vw_3">
					見る楽しさ、選ぶ楽しさ、組み合わせる楽しさにあふれるショールームは、シーズンごとに視点を変えた空間をスタイリング。それぞれに魅力をもったブランドのアイテムは、コーディネートされることで互いに引き立て合い、より魅力を増します。イメージに合ったアイテムを選びたい、デザインに役立つヒントを見つけたいなど、クリエイティブなアイデアを生み出すよろこびを、ぜひショールームで体感ください。
				</p>
			</div>
		</section>

		<section id="news" class="news l4 r4">
			<div class="wrap flex">
				<div class="grid_vw_1">
					<span class="heading">News</span>
				</div>
				<div class="list_wrap grid_vw_4">
					<ul class="news_list">
						<li class="" v-for="news in newsList">
							<NewsItem class="flex" :data="news"></NewsItem>
						</li>
					</ul>
					<div class="to_all grid_vw_1">
						<NuxtLink class="icon" to="/news">View All News<i></i></NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section id="service" class="service l4 r4">
			<div class="wrap flex">
				<div class="grid_vw_1">
					<span class="sec_title heading">Services</span>
				</div>
				<div class="list_wrap">
					<div class="grid_vw_4 flex">
						<span class="heading">Experience</span>
						<p class="description grid_vw_3">実際に見て、触って、商品の質感を実際に体感した り、家具やインテリアの使い勝手などを確認することができます。</p>
					</div>
					<div class="grid_vw_4 flex">
						<span class="heading">Consulting</span>
						<p class="description grid_vw_3">豊富なラインナップの中からコンセプトに最適なインテリア商品をセレクトし、ご希望に合う空間演出のお手伝いをいたします。</p>
					</div>
					<div class="grid_vw_4 flex">
						<span class="heading">Rental</span>
						<p class="description grid_vw_3">PRESS関係者様への撮影用サンプルの貸出し、また、 お取引をご希望される法人様や商品サンプルをご覧 になりたい法人様へのご商談・貸出しも行っており ます。ご要望の方はお気軽にお問い合わせください。</p>
					</div>
				</div>
			</div>
		</section>

		<section id="season" class="season">
			<div class="kv_wrap">
				<div id="navCursor" class="nav_cursor cursor">
					<span class="status">{{ currentIndex }} - {{ slideNum }}</span>
				</div>
				<div class="wrap">
					<swiper ref="mainVisual" class="" :options="visualOption">
						<swiper-slide v-for="visual, index in showroom.key_visuals" :key="index">
							<div class="ratio">
								<img alt="" :src="visual">
							</div>
						</swiper-slide>
					</swiper>
				</div>
				<span class="title">{{ showroom.season }}</span>
				<div class="autoplay-progress">
					<span class="status"></span>
				</div>
				<div class="swiper-nav smart">
					<svg class="swiper-prev" width="100%" height="100%" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.66675 4L5.00008 8L9.66675 12" stroke="#F5F4EA"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.5L24 7.5L24 8.5L6 8.5L6 7.5Z" fill="#F5F4EA"/>
					</svg>
					<svg class="swiper-next" width="100%" height="100%" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M8.74228e-08 7.5L18 7.5L18 8.5L0 8.5L8.74228e-08 7.5Z" fill="#F5F4EA"/>
						<path d="M14 4L18.6667 8L14 12" stroke="#F5F4EA"/>
					</svg>
				</div>
			</div>
			<div class="detail_wrap flex l4 r4">
				<span class="title heading grid_vw_1">{{ showroom.season }}</span>
				<div class="wrap grid_vw_4">
					<div class="concept grid_vw_4 flex">
						<span class="heading">Concept</span>
						<div class="grid_vw_3">
							<h2 class="">{{ showroom.name }}</h2>
							<p class="introduction">{{ showroom.introduction }}</p>
							<div class="artist_wrap grid_vw_1">
								<div class="artist flex flex-start align-center" v-for="artist in showroom.artists">
									<span class="">{{ artist.label }}</span>
									<a class="icon outside" target="_blank" :href="artist.link">{{ artist.name }}<i></i></a>
								</div>
							</div>
						</div>
					</div>
					<div class="featured grid_vw_4 flex">
						<span class="heading">Now Featured</span>
						<div class="list_wrap grid_vw_3">
							<ul>
								<li v-for="brand in showroom.featured_brand">
									<NuxtLink class="grid_vw_3 icon flex" :to="{ name: 'brands-id', params: { id: brand.slug } }">
										<img class="logo" alt="" :src="brand.logo">
										<div class="title_wrap grid_vw_2">
											<span class="title">{{ brand.name }}</span>
											<span class="category">{{ brand.brand_category.map(term => term.name).join(', ') }}</span>
										</div>
										<i></i>
									</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>


	</main>

</template>

<script>
export default {
	name: 'ShowroomPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('settings', {
					params: {
					}
				}),
				app.$wordpress.getPosts('news', {
					params: {
						'news_category': 'showroom',
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const showroom = res[0].data.showroom
				const newsList = res[1].data
				return { showroom, newsList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Showroom',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Showroom | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/showroom/' },
			],
		}
	},
	data() {
		return {
			visualOption: {
				loop: true,
				// loopAdditionalSlides: 5,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				autoplay: {
					delay: 4400,
					disableOnInteraction: false,
				},
				speed: 700,
				slidesPerView: 1,
				centeredSlides: true,
				preventInteractionOnTransition: true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				breakpoints: {
					980: {
						// slidesPerView: 2,
						// spaceBetween: 8,
						navigation: false
					}
				}
			},
			slideNum: 5,
			currentIndex: 1,
		}
	},
	mounted() {

		const self = this
		const gsap = this.$gsap

		this.$nextTick(() => {

			gsap.to('.mv .visual img', {
				y: '10%',
				scrollTrigger: {
					id: 'mv',
					trigger: '.mv',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				}
			})

		})

		const mainVisual = this.$refs.mainVisual.$swiper
		this.slideNum = this.showroom.key_visuals.length
		gsap.fromTo('.autoplay-progress .status', {
			width: '0%',
			ease: "none",
		},{
			width: '100%',
			ease: "none",
			duration: 5.1,
		})
		mainVisual.on('slideChangeTransitionStart', function() {
			self.currentIndex = mainVisual.realIndex + 1
			gsap.fromTo('.autoplay-progress .status', {
				width: '0%',
				ease: "none",
			},{
				width: '100%',
				ease: "none",
				duration: 5.1,
			})
		})

		if (window.innerWidth > 980) {

			const navCursorArea = document.querySelector('.season .kv_wrap')
			const navCursor = document.getElementById('navCursor')
			var kvAreaTop = document.querySelector('.season .kv_wrap').getBoundingClientRect().top
			const textAreaTop = document.querySelector('.season .detail_wrap').getBoundingClientRect().top
			var cursorX = window.innerWidth / 2
			var cursorY = window.innerHeight / 2
			document.addEventListener("scroll", (e) => {

				kvAreaTop = document.querySelector('.season .kv_wrap').getBoundingClientRect().top

				gsap.to(navCursor, {
					x: cursorX - 50,
					y: cursorY - 24 - kvAreaTop,
					// ease: "none",
					duration: 0.4,
				})

			})
			navCursorArea.addEventListener('mouseenter', function(e) {

				navCursor.classList.add('visible')

			})
			navCursorArea.addEventListener('mouseover', function(e) {

				navCursor.classList.add('visible')
				gsap.to(navCursor, {
					x: cursorX - 50,
					y: cursorY - 24 - kvAreaTop,
					// ease: "none",
					duration: 0.4,
				})

			})
			navCursorArea.addEventListener('mousemove', function(e) {

				cursorX = e.x
				cursorY = e.y

				gsap.to(navCursor, {
					x: e.x - 50,
					y: e.y - 24 - kvAreaTop,
					// ease: "none",
					duration: 0.4,
				})

			})
			navCursorArea.addEventListener('mouseleave', function(e) {

				navCursor.classList.remove('visible')

			})
			navCursor.addEventListener('click', function(e) {

				mainVisual.slideToLoop(mainVisual.realIndex + 1, 700, () => {})

			})
		}

		this.$nextTick(() => {

			gsap.to('.season .kv_wrap .wrap', {
				y: '10%',
				scrollTrigger: {
					id: 'season',
					trigger: '.season .detail_wrap',
					start: 'top bottom',
					end: 'bottom 50%',
					scrub: true,
				}
			})

		})


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

		.heading {
			display: inline-block;
			line-height: 1.5;
		}

		.mv {
			position: relative;
			padding-top: 15rem;
			padding-bottom: 18rem;
			h1 {
				margin-left: auto;
				margin-bottom: 6rem;
			}
			.contact {
				* {
					font-size: 1.4rem;
				}
				span:not(.icon) {
					display: block;
				}
				.heading {
					margin-bottom: 0.8rem;
					line-height: 2;
				}
				.tel {
					margin-top: 0.8rem;
				}
				.link_wrap {
					.underline {
						padding: 0.4rem 0;
					}
					&.form {
						margin-bottom: 3.5rem;
					}
				}
			}
			.visual {
				width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 5 + (2rem * 4));
				.ratio {
					padding-top: 133%;
					img {
						transform: translateY(-10%);
					}
				}
			}
			.text_wrap {
				width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
				.introduction {
					line-height: 2;
					&.en {
						margin-top: 2.4rem;
					}
				}
				.button_wrap {
					margin-top: 2.4rem;
					button {
						position: relative;
						display: inline-block;
						padding: 1.2rem 1.8rem;
						width: calc(50% - 1rem - (1.8rem * 2));
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
			@media only screen and (max-width: 980px) {
				padding-top: 12rem;
				padding-bottom: 9.6rem;
				h1 {
					margin-bottom: 3.5rem;
				}
				.contact {
					display: flex;
					justify-content: space-between;
					margin-top: 2.4rem;
					width: 100%;
					* {
						font-size: 1.2rem;
					}
					span:not(.icon) {
						display: block;
					}
					.heading {
						margin-bottom: 0.4rem;
						line-height: 2;
					}
					.tel {
						margin-top: 0.6rem;
					}
					.link_wrap {
						.underline {
						}
						&.form {
							margin-bottom: 0;
						}
					}
					.wrap {
						width: calc(50% - 0.8rem);
					}
				}
				.visual {
					width: 100%;
					order: -1;
					.ratio {
					}
				}
				.text_wrap {
					margin-top: 6rem;
					width: 100%;
					.introduction {
						&.en {
							margin-top: 2rem;
						}
					}
					.button_wrap {
						margin-top: 2rem;
						button {
							font-size: 1.2rem;
							i {
							}
						}
					}
				}
			}
		}

		.overview {
			padding-bottom: 15rem;
			.wrap {
				padding-top: 2rem;
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				.introduction {
					line-height: 2;
				}
			}
			@media only screen and (max-width: 980px) {
				padding-bottom: 7rem;
				.wrap {
					padding-top: 0;
					border-top: none;
					.sub_title {
						margin-top: 2rem;
						padding-top: 2rem;
						width: 100%;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
					}
					.introduction {
						margin-top: 2rem;
					}
				}
			}
		}

		.news {
			padding-bottom: 18rem;
			.wrap {
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				.heading {
					margin-top: 2rem;
				}
				.list_wrap {
					.news_list {
						width: 100%;
					}
					.to_all {
						margin-top: 3.5rem;
						margin-left: auto;
						text-align: right;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-bottom: 9.6rem;
				.wrap {
					border-top: none;
					.heading {
						margin-top: 0;
					}
					.list_wrap {
						margin-top: 2rem;
						.news_list {
							width: 100%;
							border-top: 1px solid rgba(39, 52, 63, 0.15);
						}
						.to_all {
							margin-top: 3.5rem;
							margin-left: auto;
							text-align: right;
						}
					}
				}
			}
		}

		.service {
			padding-bottom: 22rem;
			.wrap {
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				.sec_title {
					margin-top: 2rem;
				}
				.list_wrap {
					.grid_vw_4 {
						padding: 2rem 0 6rem;
						&:not(:first-of-type) {
							border-top: 1px solid rgba(39, 52, 63, 0.15);
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-bottom: 8rem;
				.wrap {
					border-top: none;
					.sec_title {
						margin-top: 0;
					}
					.list_wrap {
						margin-top: 2rem;
						.grid_vw_4 {
							padding: 2rem 0;
							border-top: 1px solid rgba(39, 52, 63, 0.15);
							.description {
								margin-top: 2rem;
							}
						}
					}
				}
			}
		}

		.season {
			padding-bottom: 10.8rem;
			.kv_wrap {
				position: relative;
				height: 100vh;
				overflow: hidden;
				.nav_cursor {
					position: absolute;
					top: 0;
					left: 0;
					display: block;
					margin: auto;
					width: fit-content;
					height: fit-content;
					border-radius: 10rem;
					background-color: rgba(0, 0, 0, 0.1);
					backdrop-filter: blur(8px);
					opacity: 0;
					visibility: hidden;
					pointer-events: none;
					z-index: 15;
					.status {
						display: block;
						margin: auto;
						padding: 0.8rem 1.2rem 0.6rem;
						padding: 8px 12px 6px;
						font-size: 16px;
						color: #F5F4EA;
						line-height: 1;
						pointer-events: none;
					}
					&.visible {
						opacity: 1;
						visibility: visible;
						pointer-events: auto;
					}
				}
				.wrap {
					transform: translateY(-10%);
				}
				.ratio {
					padding-top: 120vh;
					&:after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						display: block;
						background-color: rgba(0, 0, 0, 0.25);
						z-index: 1;
					}
				}
				.title {
					position: absolute;
					left: 4rem;
					bottom: 4.4rem;
					display: inline-block;
					margin: auto;
					font-size: 1.8rem;
					line-height: 1.2;
					color: #F5F4EA;
					z-index: 10;
				}
				.autoplay-progress {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					display: block;
					width: 100vw;
					height: fit-content;
					z-index: 10;
					.status {
						display: block;
						width: 0;
						height: 0.5rem;
						background-color: #FFDB85;
					}
				}
			}
			.detail_wrap {
				position: relative;
				padding-top: 9.6rem;
				background-color: #F5F4EA;
				z-index: 1;
				.heading {
					display: inline-block;
					line-height: 1.2;
				}
				.wrap {
					.concept {
						padding-bottom: 6rem;
						.introduction {
							margin-top: 3.5rem;
						}
						.artist_wrap {
							margin-top: 9.6rem;
							.artist {
								span {
									display: inline-block;
									margin-right: 0.8rem;
									// width: 4.2rem;
									font-size: 1.3rem;
									line-height: 1.5;
									color: rgba(39, 52, 63, 0.6);
								}
								a {
									display: inline-block;
									font-size: 1.3rem;
									line-height: 1.5;
								}
								&:not(:first-of-type) {
									margin-top: 0.8rem;
								}
							}
						}
					}
					.featured {
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						.heading {
							margin-top: 2rem;
						}
						ul {
							li {
								a {
									display: flex;
									padding: 2rem 0;
									border-bottom: 1px solid rgba(39, 52, 63, 0.15);
									.logo {
										width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 1);
									}
									.title_wrap {
										width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 4 + (2rem * 3));
										.title {
											display: block;
											width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
											font-size: 2.6rem;
											line-height: 1.2;
										}
										.category {
											display: inline-block;
											margin-top: 0.8rem;
											font-size: 1.3rem;
											line-height: 1;
											color: rgba(39, 52, 63, 0.6);
										}
									}
									i {
										top: 2rem;
										bottom: initial;
									}
								}
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-bottom: 8rem;
				.kv_wrap {
					position: relative;
					height: 100vw;
					.nav_cursor {
						position: absolute;
						top: initial;
						left: 1.6rem;
						bottom: 2.4rem;
						display: block;
						margin: auto;
						width: fit-content;
						height: fit-content;
						border-radius: 10rem;
						background-color: transparent;
						backdrop-filter: blur(0);
						opacity: 1;
						visibility: visible;
						z-index: 15;
						.status {
							padding: 0;
							font-size: 1.4rem;
						}
					}
					.wrap {
						transform: translateY(-5%);
					}
					.ratio {
						padding-top: 110vw;
						&:after {
						}
					}
					.title {
						left: 1.6rem;
						bottom: 6.4rem;
						font-size: 1.6rem;
					}
					.autoplay-progress {

					}
					.swiper-nav {
						position: absolute;
						right: 1.6rem;
						bottom: 2rem;
						z-index: 10;
						svg {
							width: 2.4rem;
							&.swiper-prev {
								margin-right: 2.4rem;
							}
						}
					}
				}
				.detail_wrap {
					padding-top: 4.8rem;
					.title {
						display: none;
					}
					.wrap {
						.concept {
							h2 {
								margin-top: 2rem;
							}
							.introduction {
								margin-top: 2rem;
							}
							.artist_wrap {
								margin-top: 4.8rem;
								.artist {
									span {
										font-size: 1.2rem;
									}
									a {
										font-size: 1.2rem;
									}
									&:not(:first-of-type) {
									}
								}
							}
						}
						.featured {
							border-top: none;
							.heading {
								margin-top: 0;
							}
							.list_wrap {
								width: 100%;
							}
							ul {
								margin-top: 2rem;
								border-top: 1px solid rgba(39, 52, 63, 0.15);
								li {
									a {
										.logo {
											width: calc(((100vw - 1.6rem * 9) / 8) * 2 + (1.6rem * 1));
										}
										.title_wrap {
											width: calc(((100vw - 1.6rem * 9) / 8) * 6 + (1.6rem * 5));
											.title {
												width: calc(((100vw - 1.6rem * 9) / 8) * 5 + (1.6rem * 4));
												font-size: 1.8rem;
											}
											.category {
												margin-top: 0.6rem;
												font-size: 1.2rem;
											}
										}
										i {
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
