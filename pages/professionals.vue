<template>

	<main class="">

		<section class="mv">
			<div class="title_wrap l4 r4">
				<h1 class="">
					<span class="grid_vw_4">NOMAD for</span>
					<span class="">Professionals</span>
				</h1>
				<span class="title grid_vw_4">プロフェッショナルのお客様向けサービス</span>
			</div>
			<div class="slide_wrap">
				<div id="navCursor" class="nav_cursor cursor">
					<svg width="100%" height="100%" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g style="">
							<path d="M0.999996 49L45 25L0.999998 0.999998" stroke="#F5F4EA"/>
						</g>
					</svg>
				</div>
				<div id="linkCursor" class="link_cursor cursor">
					<svg width="100%" height="100%" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.3334L23 11.3334L23 12.6667L7 12.6667L7 11.3334Z" fill="#F5F4EA"/>
						<path d="M16 6L23 12L16 18" stroke="#F5F4EA"/>
					</svg>
				</div>
				<swiper ref="mainVisual" class="" :options="mvOption">
					<swiper-slide v-for="caseStudy, index in caseList" :key="index">
						<NuxtLink class="wrap" :to="{ name: 'case-id', params: { id: caseStudy.slug } }">
							<div class="ratio">
								<img v-if="caseStudy._embedded['wp:featuredmedia']" alt="" :src="caseStudy._embedded['wp:featuredmedia'][0].source_url">
							</div>
							<div class="text_wrap flex">
								<div class="title grid_vw_1">
									<span class="name">{{ caseStudy.title.rendered }}</span>
									<span class="category">{{ caseStudy._embedded['wp:term'][0]?.[0]?.name }}</span>
								</div>
								<div class="index flex grid_vw_1">
									<span class="">Case</span>
									<span class="">0{{ index + 1 }}</span>
								</div>
							</div>
						</NuxtLink>
					</swiper-slide>
				</swiper>
			</div>
			<p class="introduction grid_vw_3 l4 r4">NOMAD for Professionalsでは、法人様や設計・デザインのプロフェッショナルの皆様に向けて「テーブルウェア」「空間・インテリア」「プロモーション用商品」のプロデュースを行なっております。NOMADだから実現できる、デンマークの多彩なブランドと品揃えで、皆様と共に思い描くイメージを具現化していきます。</p>
		</section>

		<!-- <section class="news flex l4 r4">
			<span class="heading grid_vw_1">News</span>
			<ul class="news_list grid_vw_4">
				<li class="" v-for="news in newsList">
					<NewsItem class="" :data="news"></NewsItem>
				</li>
			</ul>
			<NuxtLink class="to_all icon" to="/news">View All News<i></i></NuxtLink>
		</section> -->

		<section class="professionals">
			<div class="sec_title flex l4 r4">
				<span class="heading grid_vw_1">Capability</span>
				<h2 class="grid_vw_4">
					<span class="grid_vw_4">Service for</span>
					<span class="grid_vw_3">Professionals</span>
				</h2>
			</div>
			<Professionals></Professionals>
		</section>

		<section class="case l4 r4">
			<div class="sec_title flex">
				<span class="heading grid_vw_2">Cases with<br>NOMAD Products</span>
				<h2 class="grid_vw_3">Case Study</h2>
			</div>
			<div class="wrap flex">
				<div class="title_wrap sticky">
					<span class="heading">Explore Case Studies</span>
					<p class="description">NOMADがこれまでに手がけた、実例をご紹介します。多様なラインナップを取り揃えており、プロジェクトは多岐にわたります。</p>
					<div class="desktop">
						<NuxtLink class="icon" to="/case">View All<i></i></NuxtLink>
					</div>
				</div>
				<ul class="case_list grid_vw_3">
					<li class="" v-for="caseStudy in caseList">
						<CaseItem class="" :data="caseStudy"></CaseItem>
					</li>
				</ul>
				<div class="to_all smart">
					<NuxtLink class="icon" to="/case">View All<i></i></NuxtLink>
				</div>
			</div>
		</section>

		<Showroom class=""></Showroom>

		<Contact class=""></Contact>

	</main>

</template>

<script>
export default {
	name: 'ProfessionalsPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('news', {
					params: {
						'news_category_exclude': 'press',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('case', {
					params: {
						'posts_per_page': 4,
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const newsList = res[0].data
				const caseList = res[1].data
				return { newsList, caseList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'NOMAD For Professionals | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'NOMAD For Professionals | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/professionals/' },
			],
		}
	},
	data() {
		return {
			mvOption: {
				loop: true,
				autoplay: {
					delay: 3900,
					disableOnInteraction: false,
				},
				speed: 300,
				slidesPerView: 1.6,
				centeredSlides: true,
				spaceBetween: 30,
				breakpoints: {
					769: {
						spaceBetween: 150,
					}
				}
			},
		}
	},
	mounted() {

		if (window.innerWidth > 980) {
			this.setCursorEvent()
		}
		
	},
	methods: {
		setCursorEvent: function() {

			const gsap = this.$gsap

			const navCursorArea = document.querySelector('.mv .slide_wrap')
			const linkCursorArea = document.querySelectorAll('.mv .slide_wrap .swiper-slide')
			const navCursor = document.getElementById('navCursor')
			const linkCursor = document.getElementById('linkCursor')
			var cursorAreaTop = document.querySelector('.mv .slide_wrap').getBoundingClientRect().top
			var cursorX = window.innerWidth / 2
			var cursorY = 0
			var isFirstMove = true
			document.addEventListener("scroll", (e) => {

				cursorAreaTop = document.querySelector('.mv .slide_wrap').getBoundingClientRect().top

				if (!isFirstMove) {

					gsap.to(navCursor, {
						x: cursorX - 35,
						y: cursorY - 42 - cursorAreaTop,
						duration: 0.6,
					})

					gsap.to(linkCursor, {
						x: cursorX - 50,
						y: cursorY - 50 - cursorAreaTop,
						duration: 0.6,
					})

				}

			})
			navCursorArea.addEventListener('mouseenter', function(e) {

				navCursor.classList.add('visible')

			})
			linkCursorArea.forEach((area) => {
				area.addEventListener('mouseenter', function(e) {
					if (area.classList.contains('swiper-slide-active')) {

						navCursor.classList.remove('visible')
						linkCursor.classList.add('visible')

					}
				})

			})
			navCursorArea.addEventListener('mouseover', function(e) {

				navCursor.classList.add('visible')
				gsap.to(navCursor, {
					x: cursorX - 35,
					y: cursorY - 42 - cursorAreaTop,
					duration: 0.6,
				})

			})
			linkCursorArea.forEach((area) => {
				area.addEventListener('mouseover', function(e) {
					if (area.classList.contains('swiper-slide-active')) {

						navCursor.classList.remove('visible')
						linkCursor.classList.add('visible')

					}
				})

			})
			navCursorArea.addEventListener('mousemove', function(e) {

				isFirstMove = false

				if ( e.x < window.innerWidth / 2 ) {
					navCursor.classList.add('re')
				} else {
					navCursor.classList.remove('re')
				}

				cursorX = e.x
				cursorY = e.y

				gsap.to(navCursor, {
					x: e.x - 35,
					y: e.y - 42 - cursorAreaTop,
					duration: 0.6,
				})

			})
			linkCursorArea.forEach((area) => {
				area.addEventListener('mousemove', function(e) {

					isFirstMove = false

					cursorX = e.x
					cursorY = e.y

					gsap.to(linkCursor, {
						x: e.x - 50,
						y: e.y - 50 - cursorAreaTop,
						duration: 0.6,
					})
				})

			})
			navCursorArea.addEventListener('mouseleave', function(e) {

				navCursor.classList.remove('visible')

			})
			linkCursorArea.forEach((area) => {
				area.addEventListener('mouseleave', function(e) {

					navCursor.classList.add('visible')

					if (area.classList.contains('swiper-slide-active')) {

						linkCursor.classList.remove('visible')

					}
				})

			})

			const mainVisual = this.$refs.mainVisual.$swiper
			const self = this
			navCursor.addEventListener('click', function(e) {

				if ( cursorX < window.innerWidth / 2 ) {
					mainVisual.slidePrev(300, self.setCursorEvent())
				} else {
					mainVisual.slideNext(300, self.setCursorEvent())
				}

			})
			mainVisual.on('slideChange', function(e) {
				// self.setCursorEvent()
			})
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		.mv {
			padding-top: 15rem;
			padding-bottom: 22rem;
			.title_wrap {
				margin: auto;
				h1 {
					span {
						display: block;
						&:first-of-type {
							margin-left: auto;
						}
					}
				}
				.title {
					display: block;
					margin-left: auto;
					font-size: 1.8rem;
					line-height: 1.5;
				}
			}
			.slide_wrap {
				position: relative;
				margin-top: 9.6rem;
				.cursor {
					position: absolute;
					top: 0;
					left: 0;
					display: block;
					margin: auto;
					opacity: 0;
					visibility: hidden;
					pointer-events: none;
					svg {
						display: block;
						margin: auto;
					}
					&.visible {
						opacity: 1;
						visibility: visible;
					}
				}
				.nav_cursor {
					width: 48px;
					height: 48px;
					z-index: 30;
					mix-blend-mode: difference;
					svg {
						width: 44px;
						// height: 44px;
						// mix-blend-mode: difference;
					}
					&.visible {
						pointer-events: auto;
					}
					&.re {
						svg {
							transform: scale(-1, 1);
						}
					}
					
				}
				.link_cursor {
					width: 72px;
					height: 72px;
					border-radius: 50%;
					background-color: rgba(0, 0, 0, 0.4);
					backdrop-filter: blur(8px);
					z-index: 50;
					svg {
						width: 30px;
						// height: 24px;
					}
				}
				.wrap {
					display: block;
					.ratio {
						padding-top: 66%;
					}
					.text_wrap {
						margin-top: 1.2rem;
						.title {
							width: calc(50% - 1rem);
							span {
								display: block;
								font-size: 1.4rem;
							}
							.name {

							}
							.category {
								line-height: 1.5;
								color: rgba(39, 52, 63, 0.6);
							}
						}
						.index {
							width: calc(50% - 1rem);
							span {
								display: inline-block;
								font-size: 4.2rem;
								line-height: 1.2;
							}
						}
					}
				}
			}
			.introduction {
				margin-top: 22rem;
				margin-left: auto;
				font-size: 1.8rem;
				line-height: 2;
			}
			@media only screen and (max-width: 980px) {
				padding-top: 12rem;
				padding-bottom: 10.8rem;
				.title_wrap {
					margin: auto;
					h1 {
						span {
							&:first-of-type {
							}
						}
					}
					.title {
						margin-top: 0.6rem;
						font-size: 1.6rem;
					}
				}
				.slide_wrap {
					position: relative;
					margin-top: 4.8rem;
					.cursor,
					.nav_cursor,
					.link_cursor {
						display: none;
					}
					.wrap {
						.ratio {
						}
						.text_wrap {
							margin-top: 0.6rem;
							.title {
								margin-top: 0.4rem;
								width: 100%;
								span {
									display: block;
									font-size: 1.4rem;
								}
								.name {

								}
								.category {
									line-height: 1.5;
									color: rgba(39, 52, 63, 0.6);
								}
							}
							.index {
								width: 100%;
								order: -1;
								span {
									display: inline-block;
									font-size: 2.6rem;
									line-height: 1.2;
								}
							}
						}
					}
				}
				.introduction {
					margin-top: 10.8rem;
					font-size: 1.6rem;
				}
			}
		}

		.news {
			border-top: 1px solid rgba(39, 52, 63, 0.15);
			.heading {
				display: inline-block;
				margin-top: 2rem;
				line-height: 1.5;
			}
			.news_list {
				margin-left: auto;
				li {
					
				}
			}
			.to_all {
				margin-top: 3.5rem;
				margin-left: auto;
			}
			@media only screen and (max-width: 980px) {
				border-top: none;
				.heading {
					margin-top: 0;
				}
				.news_list {
					margin-top: 2rem;
					width: 100%;
					border-top: 1px solid rgba(39, 52, 63, 0.15);
					li {

					}
				}
				.to_all {
					margin-top: 3rem;
				}
			}
		}

		.professionals {
			// margin-top: 22rem;
			padding-bottom: 18rem;
			padding-top: 2rem;
			border-top: 1px solid rgba(39, 52, 63, 0.15);
			.sec_title {
				margin-bottom: 9.6rem;
				.heading {
					margin-top: 0.8rem;
				}
				h2 {
					span {
						display: block;
						&:last-of-type {
							margin-left: auto;
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin-top: 10.8rem;
				padding-bottom: 9.6rem;
				.sec_title {
					margin-bottom: 4.8rem;
					.heading {
						margin-top: auto;
					}
					h2 {
						margin-top: 2rem;
						width: 100%;
						span {
							&:last-of-type {
							}
						}
					}
				}
			}
		}

		.case {
			padding-top: 18rem;
			padding-bottom: 20rem;
			background-color: #EAE9DC;
			.sec_title {
				.heading {
					display: inline-block;
					margin-top: 0.8rem;
					line-height: 1.2;
				}
				h2 {
				}
			}
			.wrap {
				margin-top: 9.6rem;
				border-top: 1px solid #27343F;
				.title_wrap {
					margin-top: 2rem;
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
					.heading {
						display: inline-block;
						font-size: 1.4rem;
						line-height: 1.5;
					}
					.description {
						margin-top: 2.4rem;
						font-size: 1.4rem;
						line-height: 2;
					}
					a {
						display: inline-block;
						margin-top: 2.4rem;
						line-height: 2;
					}
				}
				.case_list {
					li {
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 9.6rem;
				padding-bottom: 10.8rem;
				.sec_title {
					.heading {
						margin-top: auto;
					}
					h2 {
						margin-top: 2rem;
						width: 100%;
					}
				}
				.wrap {
					margin-top: 4.8rem;
					.title_wrap {
						margin-top: 1.6rem;
						width: 100%;
						.heading {
						}
						.description {
						}
						a {
							margin-top: 2.4rem;
							line-height: 2;
						}
					}
					.case_list {
						li {
						}
					}
					.to_all {
						margin-top: 3.5rem;
						width: 100%;
						text-align: right;
						a {
							display: inline-block;
							line-height: 2;
						}
					}
				}
			}
		}

		.showroom {
			padding-top: 18rem;
			padding-bottom: 18rem;
			@media only screen and (max-width: 980px) {
				padding-top: 9.6rem;
				padding-bottom: 9.6rem;
			}
		}



	}

</style>
