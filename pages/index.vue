<template>

	<main class="home">

		<section class="mv">
			<div id="navCursor" class="nav_cursor cursor">
				<span class="status">{{ currentIndex + 1 }} - {{ slideNum }}</span>
			</div>
			<div class="wrap">
				<swiper ref="mainVisual" class="" :options="mvOption">
					<swiper-slide v-for="mainVisual, index in mainVisualList" :key="index">
						<div class="ratio">
							<img class="desktop" alt="" :src="mainVisual.top_visual_desktop">
							<img v-if="mainVisual.top_visual_smart" class="smart" alt="" :src="mainVisual.top_visual_smart">
							<img v-else class="smart" alt="" :src="mainVisual.top_visual_desktop">
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="title_wrap flex align-start">
				<ul class="category_list flex flex-start grid_vw_1">
					<li v-for="category in mainVisualList[currentIndex].brand_category">
						<span class="category">{{ category.name }}</span>
					</li>
					<!-- <li v-if="mainVisualList[currentIndex].brand.otherCategory">
						<span class="category">{{ mainVisualList[currentIndex].brand.otherCategory }}</span>
					</li> -->
				</ul>
				<div class="title grid_vw_4">
					<NuxtLink class="name" :to="{ name: 'brands-id', params: { id: mainVisualList[currentIndex].slug } }">{{ mainVisualList[currentIndex].name }}</NuxtLink>
					<span class="copy">{{ mainVisualList[currentIndex].copy }}</span>
				</div>
			</div>
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
		</section>

		<section class="about l4 r4">
			<div class="upper flex">
				<div class="block_l flex">
					<span class="heading grid_vw_1 desktop">About Us</span>
					<span class="heading grid_vw_1">Our<br>Concept</span>
				</div>
				<div class="block_r grid_vw_3">
					<h1>
						Denmark and Japan<br>Sharing lifestyle knowledge
					</h1>
				</div>
			</div>
			<div class="lower flex">
				<div class="block_l">
					<p class="introduction grid_vw_2">
						NOMAD aims to "kyouden" a fusion of Danish and Japanese cultures, creating happy lifestyles together. We select timeless, sustainable Danish brands that are high quality and familiar. Our broad perspective introduces them to you.
					</p>
				</div>
				<div class="block_r grid_vw_3 flex">
					<p class="introduction grid_vw_2">
						NOMADは、デンマークと日本の文化を融合し、幸せなライフスタイルを共に創造する「共伝」を目指します。上質ながら身近で、時代を問わないサステナブルな価値をもつデンマークのブランドを、広い視野と自由な発想で選び抜き、みなさまにご紹介します。
					</p>
					<NuxtLink class="icon" to="/about">About Us<i></i></NuxtLink>
				</div>
			</div>
		</section>

		<section class="brands">
			<div class="sec_title flex l4 r4">
				<span class="heading">Brands({{ brandData.length }})</span>
				<h2 class="grid_vw_3">Featured Brands</h2>
			</div>
			<div class="list_wrap">
				<div id="brandCursor" class="brand_cursor cursor desktop">
					<svg width="100%" height="100%" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.3334L23 11.3334L23 12.6667L7 12.6667L7 11.3334Z" fill="#F5F4EA"/>
						<path d="M16 6L23 12L16 18" stroke="#F5F4EA"/>
					</svg>
				</div>
				<ul class="brand_list flex">
					<li v-for="brand, index in brandList">
						<NuxtLink class="" :to="{ name: 'brands-id', params: { id: brand.slug } }">
							<div class="visual_wrap ratio">
								<img v-if="index % 8 == 0 || index % 8 == 1" alt="" :src="brand.thumbnail_horizontal">
								<img v-else alt="" :src="brand.thumbnail_vertical">
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
				<div class="more_wrap grid_vw_2">
					<button v-if="moreBrandsStatus == 'more'" id="brand_more" class="more flex" @click="moreBrand">
						<span class="grid_vw_1">View</span>
						<span class="">More</span>
						<i></i>
					</button>
					<NuxtLink v-if="moreBrandsStatus == 'all'" class="all flex" to="/brands">
						<span class="grid_vw_1">View</span>
						<span class="">All</span>
						<i></i>
					</NuxtLink>
				</div>
			</div>
		</section>

		<div class="visual_sec ratio scroll">
			<img alt="" src="~/assets/img/home/visual.jpg">
		</div>

		<section class="news l4 r4">
			<div class="sec_title flex">
				<span class="heading">What’s New</span>
				<div class="wrap flex grid_vw_3">
					<h2>News Release</h2>
					<div class="desktop">
						<NuxtLink class="icon" to="/news">View All<i></i></NuxtLink>
					</div>
				</div>
			</div>
			<div class="list_wrap">
				<ul class="news_list grid_vw_4">
					<li v-for="article in newsList">
						<PressItem v-if="article.news_category.includes('Press')" class="" :data="article"></PressItem>
						<NewsItem v-else class="" :data="article"></NewsItem>
					</li>
				</ul>
				<div class="to_all smart">
					<NuxtLink class="icon" to="/news">View All<i></i></NuxtLink>
				</div>
			</div>
		</section>

		<!-- <section class="journal">
			<div class="sec_title flex l4 r4">
				<span class="heading">Journal</span>
				<h2 class="grid_vw_3">Danish Diaries</h2>
			</div>
			<div class="list_wrap">
				<div class="pickup flex l4">
					<span class="heading grid_vw_1">Stories of Lifestyle and Culture from Denmark.</span>
					<div class="wrap">
						<NuxtLink class="thumbnail ratio" :to="pickupJournal.slug">
							<img alt="" :src="pickupJournal.thumbnail">
						</NuxtLink>
						<NuxtLink class="text_wrap grid_vw_2" :to="pickupJournal.slug">
							<span class="title">{{ pickupJournal.title }}</span>
							<p class="introduction">{{ pickupJournal.introduction }}</p>
						</NuxtLink>
					</div>
				</div>
				<ul class="journal_list flex flex-start l4 r4">
					<li v-for="journal in journalList">
						<JournalItem class="grid_vw_1" :data="journal"></JournalItem>
					</li>
				</ul>
				<div class="more_wrap grid_vw_2">
					<a class="more flex" to="/journal">
						<span class="grid_vw_1">View</span>
						<span class="">All</span>
						<i></i>
					</a>
				</div>
			</div>
		</section> -->

		<section class="professionals">
			<div class="sec_title flex l4 r4">
				<span class="heading">Use for Business</span>
				<div class="wrap grid_vw_3 flex">
					<h2>Professionals</h2>
					<div class="desktop">
						<NuxtLink class="icon" to="/professionals">For Professionals<i></i></NuxtLink>
					</div>
				</div>
			</div>
			<Professionals></Professionals>
			<div class="link_wrap smart">
				<NuxtLink class="icon" to="/professionals">For Professionals<i></i></NuxtLink>
			</div>
		</section>

		<Showroom class=""></Showroom>

	</main>

</template>

<script>
import Lenis from '@studio-freight/lenis'


export default {
	name: 'IndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				// app.$wordpress.getPosts('pages', {
				// 	params: {
				// 		'slug': 'settings',
				// 		'_embed': true
				// 	}
				// }),
				app.$wordpress.getPosts('settings', {
					params: {
						
					}
				}),
				app.$wordpress.getPosts('brands', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('news', {
					params: {
						// 'posts_per_page': 4,
						'per_page': 4,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const mainVisualList = res[0].data.top_main_visual
				const brandData = res[1].data
				const newsList = res[2].data
				return { mainVisualList, brandData, newsList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	data() {
		return {
			lenis: [],
			mvOption: {
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
			brands: [],
			moreBrandsStatus: 'more',
			slideNum: 5,
			currentIndex: 0,
		}
	},
	mounted() {

		window.addEventListener('resize', () => {
			if (this.$scrollTrigger.getById('headerIndex')) {
				setTimeout(() => {
					this.$scrollTrigger.getById('headerIndex').refresh()
				}, 250)
			}
		})


		this.brands = this.brandData.slice(0, 8)

		const self = this
		const gsap = this.$gsap
		
		const mainVisual = this.$refs.mainVisual.$swiper
		this.slideNum = this.mainVisualList.length
		gsap.fromTo('.autoplay-progress .status', {
			width: '0%',
			ease: "none",
		},{
			width: '100%',
			ease: "none",
			duration: 5.1
		})
		mainVisual.on('slideChangeTransitionStart', function() {
			self.currentIndex = mainVisual.realIndex
			gsap.fromTo('.autoplay-progress .status', {
				width: '0%',
				ease: "none",
			},{
				width: '100%',
				ease: "none",
				duration: 5.1
			})
		})

		if (window.innerWidth > 980) {

			const navCursorArea = document.querySelector('.mv')
			const navCursor = document.getElementById('navCursor')
			const titleArea = document.querySelector('.mv .title')
			const aboutAreaTop = document.querySelector('.about').getBoundingClientRect().top
			var cursorX = window.innerWidth / 2
			var cursorY = window.innerHeight / 2
			document.addEventListener("scroll", (e) => {

				if (window.scrollY + cursorY < aboutAreaTop) {
					gsap.to(navCursor, {
						x: cursorX - 50,
						y: cursorY - 24,
						// ease: "none",
						duration: 0.4,
					})
				} else {
					navCursor.classList.remove('visible')
				}

			})
			navCursorArea.addEventListener('mouseenter', function(e) {

				navCursor.classList.add('visible')

			})
			navCursorArea.addEventListener('mouseover', function(e) {

				navCursor.classList.add('visible')
				gsap.to(navCursor, {
					x: cursorX - 50,
					y: cursorY - 24,
					// ease: "none",
					duration: 0.4,
				})

			})
			navCursorArea.addEventListener('mousemove', function(e) {

				cursorX = e.x
				cursorY = e.y

				gsap.to(navCursor, {
					x: e.x - 50,
					y: e.y - 24,
					// ease: "none",
					duration: 0.4,
				})

			})
			navCursorArea.addEventListener('mouseleave', function(e) {

				navCursor.classList.remove('visible')

			})
			titleArea.addEventListener('mouseenter', function(e) {

				navCursor.classList.remove('visible')

			})
			titleArea.addEventListener('mouseover', function(e) {

				navCursor.classList.remove('visible')

			})
			titleArea.addEventListener('mousemove', function(e) {

				navCursor.classList.remove('visible')

			})
			titleArea.addEventListener('mouseleave', function(e) {

				navCursor.classList.add('visible')

			})
			navCursor.addEventListener('click', function(e) {

				mainVisual.slideToLoop(mainVisual.realIndex + 1, 700, () => {})

			})



			const brandListArea = document.querySelector('.brands .list_wrap ul')
			const brandCursor = document.getElementById('brandCursor')
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

		this.$nextTick(() => {

			gsap.to('.mv .wrap', {
				y: '10%',
				scrollTrigger: {
					id: 'mv',
					trigger: '.about',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			})

			gsap.to('.home .visual_sec img', {
				y: '10%',
				scrollTrigger: {
					id: 'visualImage',
					trigger: '.home .visual_sec',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				}
			})
		})

	},
	computed: {
		brandList: function() {
			return this.brands
		},
	},
	methods: {
		moreBrand: function() {

			this.brands = this.brandData
			this.moreBrandsStatus = 'all'

			this.$nextTick(() => {

				if (this.$scrollTrigger.getById('visualImage')) {
					this.$scrollTrigger.getById('visualImage').refresh()
				}
				
				this.$lenis.destroy()
				this.lenis = new Lenis()
				requestAnimationFrame(this.raf)

			})

		},
		raf: function(time) {
			this.lenis.raf(time)
			requestAnimationFrame(this.raf)
		}
	},
}
</script>

<style lang="scss" scoped>

	main {

		.heading {
			display: inline-block;
			line-height: 1.2;
		}	

		.mv {
			position: relative;
			height: 100vh;
			* {
				color: #F5F4EA;
			}
			.nav_cursor {
				position: absolute;
				position: fixed;
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
					padding: 8px 12px 6px;
					font-size: 16px;
					line-height: 1;
					pointer-events: none;
				}
				&.visible {
					opacity: 1;
					visibility: visible;
					pointer-events: auto;
				}
			}
			.ratio {
				padding-top: 100vh;
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
			.title_wrap {
				position: absolute;
				left: 4rem;
				bottom: 3rem;
				z-index: 1;
				.category_list {
					margin-top: 1.2rem;
					height: fit-content;
					li {
						position: relative;
						span {
							display: block;
							line-height: 1.2;
						}
						&:not(:last-of-type) {
							margin-right: 0.8rem;
							&:after {
								content: ',';
								position: absolute;
								top: 0;
								right: -0.4rem;
								bottom: 0;
								display: block;
								margin: auto;
								line-height: 1.2;
							}
						}
					}
				}
				.title {
					.name {
						position: relative;
						display: inline;
						font-size: 8.3rem;
						line-height: 1.1;
						word-break: break-word;
						background: linear-gradient(transparent 0, transparent calc(100% - 1.9rem - 2px),
													#F5F4EA calc(100% - 1.9rem - 2px), #F5F4EA calc(100% - 1.9rem),
													transparent calc(100% - 1.9rem), transparent 100%) no-repeat;
						vertical-align: baseline;
						z-index: 1;
					}
					.copy {
						display: block;
						margin-top: 2rem;
						line-height: 1.2;
					}
				}
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
			@media only screen and (max-width: 980px) {
				height: 100svh;
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
				.ratio {
					padding-top: 100svh;
				}
				.title_wrap {
					position: absolute;
					left: 1.6rem;
					right: 1.6rem;
					bottom: 6rem;
					.category_list {
						display: flex;
						margin-top: auto;
						width: 100%;
						li {
							position: relative;
							span {
								display: block;
								line-height: 1.2;
							}
							&:not(:last-of-type) {
								margin-right: 0.8rem;
								&:after {
									content: ',';
									position: absolute;
									top: 0;
									right: -0.4rem;
									bottom: 0;
									display: block;
									margin: auto;
									line-height: 1.2;
								}
							}
						}
					}
					.title {
						margin-top: 1.2rem;
						width: 100%;
						.name {
							width: 100%;
							font-size: 3.5rem;
							background: linear-gradient(transparent 0, transparent calc(100% - 0.8rem - 1px),
														#F5F4EA calc(100% - 0.8rem - 1px), #F5F4EA calc(100% - 0.8rem),
														transparent calc(100% - 0.8rem), transparent 100%) no-repeat;
						}
						.copy {
							display: none;
						}
					}
				}
				.autoplay-progress {
				}
				.swiper-nav {
					position: absolute;
					right: 1.6rem;
					bottom: 2.2rem;
					z-index: 10;
					svg {
						width: 2.4rem;
						&.swiper-prev {
							margin-right: 2.4rem;
						}
					}
				}
			}
		}

		.about {
			position: relative;
			padding-top: 15rem;
			padding-bottom: 22rem;
			background-color: #F5F4EA;
			z-index: 1;
			.block_l {
				width: calc(40% - 2rem);
			}
			.block_r {
				
			}
			.upper {
				.heading {
				}
				h1 {
					display: block;
					font-size: 5.8rem;
					line-height: 1.2;
				}
			}
			.lower {
				margin-top: 22rem;
				.introduction {
					line-height: 2;
				}
				.block_l {
					.introduction {
						
					}
				}
				.block_r {
					.introduction {
						
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 7.2rem;
				padding-bottom: 10.8rem;
				.block_l {
					width: 100%;
				}
				.block_r {

				}
				.upper {
					.heading {
						&.desktop {
							display: none;
						}
					}
					h1 {
						margin-top: 2rem;
						font-size: 3.3rem;
						line-height: 1.2;
					}
				}
				.lower {
					margin-top: 10.8rem;
					.introduction {
						line-height: 2;
					}
					.block_l {
						.introduction {

						}
					}
					.block_r {
						margin-top: 2rem;
						.introduction {

						}
						a {
							margin-top: 3.5rem;
							margin-left: auto;
						}
					}
				}
			}
		}

		.brands {
			padding-bottom: 22rem;
			.sec_title {
				
			}
			.list_wrap {
				position: relative;
				margin-top: 3.5rem;
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
					width: 100%;
					border-top: 1px solid rgba(21, 38, 50, 0.15);
					&:before,
					&:after {
						content: '';
						display: block;
						width: 20%;
						order: 1;
					}
					> li {
						width: 20%;
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
								// border-left: 0.5px solid rgba(21, 38, 50, 0.15);
								border-right: 1px solid rgba(21, 38, 50, 0.15);
							}
						}
						&:nth-of-type(8n),
						&:nth-of-type(8n + 1) {
							width: 40%;
						}
					}
				}
				.more_wrap {
					margin: 3.5rem 4rem 0 auto;
					button, a {
						position: relative;
						margin-left: auto;
						&:before,
						&:after {
							position: absolute;
							top: 0;
							bottom: 0;
							margin: auto;
							background-color: #27343F;
						}
						i {
							position: absolute;
							top: 0;
							right: 0.3rem;
							bottom: 0;
							margin: auto;
							display: block;
							width: 33px;
							height: 33px;
							&:before,
							&:after {
								content: '';
								position: absolute;
								margin: auto;
								background-color: #27343F;
								transition: all 0.4s ease-in-out;
							}
						}
						span {
							display: block;
							font-size: 5.8rem;
							line-height: 1.2;
							&:last-of-type {
								width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 1 - 4.8rem);
								padding-right: 4.8rem;
								text-align: right;
							}
						}						
						&.more {
							&:before {
								content: '';
								right: calc(0.3rem + 15.5px);
								width: 3px;
								height: 33px;
							}
							i {
								&:before,
								&:after {
									top: 0;
									bottom: 0;
									width: 19px;
									height: 3px;
								}
								&:before {
									left: 0;
								}
								&:after {
									right: 0;
								}
							}
						}
						&.all {
							&:after {
								content: '';
								right: 0.3rem;
								width: 33px;
								height: 3px;
							}
							i {
								&:before,
								&:after {
									left: 0;
									right: 0;
									width: 3px;
									height: 19px;
								}
								&:before {
									top: 0;
								}
								&:after {
									bottom: 0;
								}
							}
						}
						&:hover {
							&.more {
								&:before {
								}
								i {
									&:before {
										transform: translate3d(1.65px, 12px, 0px) rotate(45deg);
									}
									&:after {
										transform: translate3d(-1.65px, 12px, 0px) rotate(-45deg);
									}
								}
							}
							&.all {
								&:before {
								}
								i {
									&:before {
										transform: translate3d(12px, 1.65px, 0px) rotate(-45deg);
									}
									&:after {
										transform: translate3d(12px, -1.65px, 0px) rotate(45deg);
									}
								}
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-bottom: 7.2rem;
				.sec_title {
					h2 {
						margin-top: 2rem;
						width: 100%;
					}
				}
				.list_wrap {
					margin-top: 2.4rem;
					.brand_list {
						&:before,
						&:after {
							width: 50vw;
						}
						&:before {
							content: none;
						}
						> li {
							width: 50vw;
							a {
								display: block;
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
							&:not(:nth-of-type(4n)) {
								.detail_wrap {
									border-right: none;
								}
							}
							&:nth-of-type(8n),
							&:nth-of-type(8n + 1) {
								width: 100vw;
							}
							&:nth-of-type(2n):not(:nth-of-type(8n)) {
								.detail_wrap {
									border-right: 1px solid rgba(21, 38, 50, 0.15);
								}
							}
						}
					}
					.more_wrap {
						margin: 2.4rem 1.6rem 0;
						button, a {
							position: relative;
							margin-left: 0;
							width: 100%;
							&:before,
							&:after {
							}
							i {
								right: 1.6px;
								width: 20px;
								height: 20px;
								&:before,
								&:after {
								}
							}
							span {
								font-size: 3.3rem;
								&:last-of-type {
									width: auto;
									padding-right: 3rem;
								}
							}
							&.more {
								&:before {
									content: '';
									right: calc(1.6px + 9px);
									width: 1.6px;
									height: 20px;
								}
								&:after {
									content: '';
									right: 1.6px;
									width: 20px;
									height: 1.6px;
								}
								i {
									&:before,
									&:after {
										content: none;
									}
								}
							}
							&.all {
								&:after {
									content: '';
									right: 1px;
									width: 20px;
									height: 1.6px;
								}
								i {
									&:before,
									&:after {
										left: 0;
										right: 0;
										width: 1.6px;
										height: 11.8px;
									}
									&:before {
										top: 0;
										transform: translate3d(8px, 0.42px, 0px) rotate(-45deg);
									}
									&:after {
										bottom: 0;
										transform: translate3d(8px, -0.42px, 0px) rotate(45deg);
									}
								}
							}
							&:hover {
								&.more {
									&:before {
									}
									i {
										&:before,
										&:after {
											transform: none;
										}
									}
								}
								&.all {
									&:after {
									}
									i {
										&:before {
											top: 0;
											transform: translate3d(8px, 0.42px, 0px) rotate(-45deg);
										}
										&:after {
											bottom: 0;
											transform: translate3d(8px, -0.42px, 0px) rotate(45deg);
										}
									}
								}
							}
						}
					}
				}
			}
		}

		.visual_sec {
			img {
				transform: translateY(-10%);
			}
			@media only screen and (max-width: 980px) {
				padding-top: 100vw;
			}
		}

		.news {
			margin-top: 22rem;
			padding-bottom: 24rem;
			.sec_title {
				padding-top: 2rem;
				border-top: 1px solid rgba(39, 52, 63, 0.15);
			}
			.list_wrap {
				margin-top: 9.6rem;
				.news_list {
					margin-left: auto;
					li {
						&:first-of-type {
							border-top: 1px solid rgba(39, 52, 63, 0.15);
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 10.8rem;
				padding-bottom: 12rem;
				.sec_title {
					padding-top: 1.6rem;
					.wrap {
						margin-top: 2rem;
						width: 100%;
					}
				}
				.list_wrap {
					margin-top: 4.8rem;
					.news_list {
						margin-left: auto;
						li {
							&:first-of-type {
								border-top: 1px solid rgba(39, 52, 63, 0.15);
							}
						}
					}
					.to_all {
						margin-top: 4.8rem;
						text-align: right;
					}
				}
			}
		}

		.journal {
			margin-top: 24rem;
			padding-bottom: 16.9rem;
			.sec_title {
			}
			.list_wrap {
				margin-top: 9.6rem;
				.pickup {
					.heading {
					}
					.wrap {
						width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 3 + (2rem * 2) + 4rem);
						a {
							display: block;
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
						&:not(:last-of-type) {
							margin-right: 2rem;
						}
					}
				}
				.more_wrap {
					margin: 9.6rem 4rem 0 auto;
					text-align: right;
					a {
						position: relative;
						margin-left: auto;
						&:after {
							content: '';
							position: absolute;
							top: 0;
							right: 0.3rem;
							bottom: 0;
							margin: auto;
							width: 33px;
							height: 3px;
							background-color: #27343F;
						}
						i {
							position: absolute;
							top: 0;
							right: 0.3rem;
							bottom: 0;
							margin: auto;
							display: block;
							width: 3.3rem;
							height: 3.3rem;
							&:before,
							&:after {
								content: '';
								position: absolute;
								left: 0;
								right: 0;
								margin: auto;
								width: 3px;
								height: 19px;
								background-color: #27343F;
								transition: all 0.4s ease-in-out;
							}
							&:before {
								top: 0;
								transform: translate3d(12px, 1.65px, 0px) rotate(-45deg);
							}
							&:after {
								bottom: 0;
								transform: translate3d(12px, -1.65px, 0px) rotate(45deg);
							}
						}
						span {
							display: block;
							font-size: 5.8rem;
							line-height: 1.2;
							&:last-of-type {
								width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 1 - 4.8rem);
								padding-right: 4.8rem;
								text-align: right;
							}
						}
					}
				}
			}
		}

		.professionals {
			padding: 18rem 0 22rem;
			background-color: #EAE9DC;
			.sec_title {

			}
			@media only screen and (max-width: 980px) {
				padding: 9.6rem 0;
				.sec_title {
					.wrap {
						width: 100%;
						h2 {
							margin-top: 2rem;
						}
					}
				}
				.link_wrap {
					margin-top: 4.8rem;
					margin-right: 1.6rem;
					text-align: right;
				}
			}
		}

		.showroom {
			padding-bottom: 6rem;
			background-color: #EAE9DC;
			@media only screen and (max-width: 980px) {
				padding-bottom: 9.6rem;
			}
		}

		.dealers {
			padding-top: 18rem;
			.sec_title {
				.grid_vw_3 {
					.introduction {
						width: calc((100vw - 8rem) / 5);
					}
				}
			}
			ul {
				margin-top: 3.5rem;
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				li {
					position: relative;
					width: 20vw;
					height: calc(20vw * 0.667);
					border-bottom: 1px solid rgba(39, 52, 63, 0.15);
					img {
						margin: auto;
						width: auto;
						height: 7.7rem;
					}
					&.ratio {
						padding-top: 66.7%;
					}
					&:not(:nth-of-type(5n)) {
						&:after {
							content: '';
							position: absolute;
							top: 0;
							right: -0.5px;
							bottom: 0;
							margin: auto;
							display: block;
							width: 1px;
							height: 100%;
							background-color: rgba(39, 52, 63, 0.15);
						}
					}
				}
			}
		}







	}

</style>
