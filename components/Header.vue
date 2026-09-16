<template>

	<header class="flex align-center" :class="[this.bg, {'brand': this.path.indexOf('brands') != -1}]" data-lenis-prevent>

		<div class="logo_wrap grid_vw_1">
			<!-- <NuxtLink class="logo" to="/" @click.native="menuClick(menuItems[0])"> -->
			<NuxtLink class="logo" to="/" @click.native="menuClick()">
				<svg width="100%" height="100%" viewBox="0 0 635 125" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="M133.15 61.9101C133.15 28.4001 162.05 5.06006 188.89 5.06006C215.73 5.06006 244.63 28.3901 244.63 61.9101C244.63 95.4301 217.1 117.66 188.89 117.66C160.68 117.66 133.15 94.6401 133.15 61.9101ZM230.81 61.2801C230.81 31.4201 212.78 8.09006 188.88 8.09006C164.98 8.09006 146.95 31.4201 146.95 61.2801C146.95 91.1401 164.99 114.63 188.88 114.63C212.77 114.63 230.81 91.1401 230.81 61.2801Z" fill="#27343F"/>
						<path d="M457.59 5.16002L482 73.03C496.21 110.71 496.87 112.2 507.12 114.68V115.31H470.67V114.68C483.34 112.34 483.45 110.45 470.76 75.87H429.98C417.84 108.53 417.59 111.99 431.32 114.68V115.31H399.66V114.68C409.55 111.76 411.86 108.77 425.48 73.18L451.39 5.15002H457.59V5.16002ZM469.36 71.87L450.57 18.67L431.4 71.87H469.36Z" fill="#27343F"/>
						<path d="M381.87 82.12L378.58 34.2C378.42 30.91 378.27 28.09 378.27 25.59C378.27 13.85 381.78 11.03 390.24 7.89001V7.26001H367.16L326.42 100.47L287.9 7.26001H263.4V7.89001C271.7 10.71 275.52 13.53 275.52 24.65C275.52 27.63 275.36 30.91 275.05 34.83L271.76 81.97C269.88 109.85 268.47 111.41 257.2 114.7V115.33H287.6V114.7C274.92 112.51 274.76 109.84 276.64 81.97L280.71 20.74H281.34L321.32 116.65H324.39L366.49 20.9L370.56 84.32C372.13 108.91 372.44 111.88 359.76 114.7V115.33H395.19V114.7C384.07 111.41 383.76 108.9 381.88 82.13" fill="#27343F"/>
						<path d="M88.37 7.26V7.89C98.55 11.18 100.99 14.94 100.99 39.84V98.68L24.97 7.26H0V7.89C10.65 10.4 15.5 17.44 15.5 23.08V82.74C15.5 108.11 13.31 111.4 3.13 114.69V115.32H33V114.69C22.82 111.4 20.38 107.64 20.38 82.74V20.19L100.82 116.88H105.85V39.83C105.85 14.46 108.04 11.17 118.22 7.88V7.25H88.35L88.37 7.26Z" fill="#27343F"/>
						<path d="M563.46 1.38004L516.14 9.72004V10.35C526.94 11.26 529.45 12.7 529.45 28.67V94.13C529.45 106.3 527.99 110.55 522.52 113.97L530.13 115.31L561.89 109.71C598.61 103.24 623.61 78.16 623.61 43.7C623.61 9.24004 596.5 -4.44996 563.45 1.38004M561.37 106.11L540.7 109.75V9.09004L563.25 5.11004C590.03 0.39004 609.83 14.82 609.83 46.92C609.83 76.99 592.54 100.62 561.37 106.11Z" fill="#27343F"/>
						<path d="M563.46 13.14L530.13 7.26001L522.52 8.60001C527.99 12.02 529.45 16.26 529.45 28.44V93.9C529.45 109.87 526.94 111.31 516.14 112.22V112.85L561.89 120.92C598.61 127.39 623.61 111.13 623.61 76.68C623.61 42.23 596.5 18.97 563.45 13.14M561.37 117.13L540.7 113.49V12.82L563.25 16.8C590.03 21.52 609.83 42.93 609.83 75.04C609.83 105.11 592.54 122.64 561.37 117.14" fill="#27343F"/>
					</g>
				</svg>
			</NuxtLink>
		</div>

		<nav class="list">
			<ul class="menu_list flex flex-start">
				<li :class="{'first_order': this.path == 'index'}">
					<NuxtLink class="" to="/" @click.native="menuClick()">Home</NuxtLink>
				</li>
				<li class="brand_button" :class="{'first_order': this.path.indexOf('brands') != -1}">
					<NuxtLink class="" to="/brands" @click.native="menuClick()">Brands</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path.indexOf('news') != -1}">
					<NuxtLink class="" to="/news" @click.native="menuClick()">News</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path.indexOf('press') != -1}">
					<NuxtLink class="" to="/press" @click.native="menuClick()">Press</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path.indexOf('journal') != -1}">
					<NuxtLink class="" to="/journal" @click.native="menuClick()">Journal</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path == 'about'}">
					<NuxtLink class="" to="/about" @click.native="menuClick()">About</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path == 'showroom'}">
					<NuxtLink class="" to="/showroom" @click.native="menuClick()">Showroom</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path == 'professionals'}">
					<NuxtLink class="" to="/professionals" @click.native="menuClick()">For Professionals</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path.indexOf('case') != -1}">
					<NuxtLink class="" to="/case" @click.native="menuClick()">Case Study</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path == 'contact'}">
					<NuxtLink class="" to="/contact" @click.native="menuClick()">Contact</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path == 'thanks'}">
					<NuxtLink class="" to="/" @click.native="menuClick()">Thank you</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path == 'dealers'}">
					<NuxtLink class="" to="/dealers" @click.native="menuClick()">Dealers</NuxtLink>
				</li>
				<li class="" :class="{'first_order': this.path == 'download'}">
					<NuxtLink class="" to="/download" @click.native="menuClick()">Catalog</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path == 'privacy'}">
					<NuxtLink class="" to="/privacy" @click.native="menuClick()">Privacy Policy</NuxtLink>
				</li>
				<li class="no" :class="{'first_order': this.path == 'error'}">
					<NuxtLink class="" to="/" @click.native="menuClick()">Ooops!</NuxtLink>
				</li>
			</ul>
			<div class="brand_menu">
				<div class="wrap">
					<div class="title_wrap flex align-center">
						<span class="title">Brands</span>
						<NuxtLink class="icon" to="/brands">View All<i></i></NuxtLink>
					</div>
					<ul class="brand_list flex flex-start">
						<li class="" v-for="brand, index in brandList">
							<NuxtLink class="" :to="{ name: 'brands-id', params: { id: brand.slug } }" @click.native="menuClick()">{{ brand.title.rendered }}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<nav class="menu">
			<div class="button_wrap grid_1">
				<button @click="menuOpen">Menu</button>
			</div>
			<div class="menu_wrap l4 r4" :class="menuStatus" data-lenis-prevent>
				<div class="menu_contents_wrap flex">
					<div class="header flex align-center">
						<div class="logo_wrap grid_vw_1">
							<NuxtLink class="logo" to="/" @click.native="menuClose()">
								<svg width="100%" height="100%" viewBox="0 0 624 123" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0)">
										<path d="M133.15 61.9101C133.15 28.4001 162.05 5.06006 188.89 5.06006C215.73 5.06006 244.63 28.3901 244.63 61.9101C244.63 95.4301 217.1 117.66 188.89 117.66C160.68 117.66 133.15 94.6401 133.15 61.9101ZM230.81 61.2801C230.81 31.4201 212.78 8.09006 188.88 8.09006C164.98 8.09006 146.95 31.4201 146.95 61.2801C146.95 91.1401 164.99 114.63 188.88 114.63C212.77 114.63 230.81 91.1401 230.81 61.2801Z" fill="#27343F"/>
										<path d="M457.59 5.16002L482 73.03C496.21 110.71 496.87 112.2 507.12 114.68V115.31H470.67V114.68C483.34 112.34 483.45 110.45 470.76 75.87H429.98C417.84 108.53 417.59 111.99 431.32 114.68V115.31H399.66V114.68C409.55 111.76 411.86 108.77 425.48 73.18L451.39 5.15002H457.59V5.16002ZM469.36 71.87L450.57 18.67L431.4 71.87H469.36Z" fill="#27343F"/>
										<path d="M381.87 82.12L378.58 34.2C378.42 30.91 378.27 28.09 378.27 25.59C378.27 13.85 381.78 11.03 390.24 7.89001V7.26001H367.16L326.42 100.47L287.9 7.26001H263.4V7.89001C271.7 10.71 275.52 13.53 275.52 24.65C275.52 27.63 275.36 30.91 275.05 34.83L271.76 81.97C269.88 109.85 268.47 111.41 257.2 114.7V115.33H287.6V114.7C274.92 112.51 274.76 109.84 276.64 81.97L280.71 20.74H281.34L321.32 116.65H324.39L366.49 20.9L370.56 84.32C372.13 108.91 372.44 111.88 359.76 114.7V115.33H395.19V114.7C384.07 111.41 383.76 108.9 381.88 82.13" fill="#27343F"/>
										<path d="M88.37 7.26V7.89C98.55 11.18 100.99 14.94 100.99 39.84V98.68L24.97 7.26H0V7.89C10.65 10.4 15.5 17.44 15.5 23.08V82.74C15.5 108.11 13.31 111.4 3.13 114.69V115.32H33V114.69C22.82 111.4 20.38 107.64 20.38 82.74V20.19L100.82 116.88H105.85V39.83C105.85 14.46 108.04 11.17 118.22 7.88V7.25H88.35L88.37 7.26Z" fill="#27343F"/>
										<path d="M563.46 1.38004L516.14 9.72004V10.35C526.94 11.26 529.45 12.7 529.45 28.67V94.13C529.45 106.3 527.99 110.55 522.52 113.97L530.13 115.31L561.89 109.71C598.61 103.24 623.61 78.16 623.61 43.7C623.61 9.24004 596.5 -4.44996 563.45 1.38004M561.37 106.11L540.7 109.75V9.09004L563.25 5.11004C590.03 0.39004 609.83 14.82 609.83 46.92C609.83 76.99 592.54 100.62 561.37 106.11Z" fill="#27343F"/>
										<path d="M563.46 13.14L530.13 7.26001L522.52 8.60001C527.99 12.02 529.45 16.26 529.45 28.44V93.9C529.45 109.87 526.94 111.31 516.14 112.22V112.85L561.89 120.92C598.61 127.39 623.61 111.13 623.61 76.68C623.61 42.23 596.5 18.97 563.45 13.14M561.37 117.13L540.7 113.49V12.82L563.25 16.8C590.03 21.52 609.83 42.93 609.83 75.04C609.83 105.11 592.54 122.64 561.37 117.14" fill="#27343F"/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="623.62" height="122.31" fill=""/>
										</clipPath>
									</defs>
								</svg>
							</NuxtLink>
						</div>
						<div class="sns_wrap flex flex-start align-center grid_vw_2">
							<a class="" target="_blank" href="https://www.instagram.com/nomadinc_japan/" @click="menuClose()">Instagram</a>
							<span class="sen">/</span>
							<a class="" target="_blank" href="https://www.facebook.com/nomadinc.jp" @click="menuClose()">Facebook</a>
						</div>
						<div class="time_wrap flex flex-start align-center grid_5">
							<div class="flex">
								<span class="country">Japan</span>
								<span class="hour">{{ japanHour }}</span>
								<span class="dot" :class="dotClass">:</span>
								<span class="minutes">{{ japanMinutes }}</span>
								<span class="period">{{ japanDayPeriod }}</span>
							</div>
							<span class="sen">|</span>
							<div class="flex">
								<span class="country">Denmark</span>
								<span class="hour">{{ denmarkHour }}</span>
								<span class="dot" :class="dotClass">:</span>
								<span class="minutes">{{ denmarkMinutes }}</span>
								<span class="period">{{ denmarkDayPeriod }}</span>
							</div>
						</div>
						<div class="button_wrap grid_1">
							<button @click="menuClose()">Close</button>
						</div>
					</div>
					<div class="contents">
						<div class="contents_wrap flex">
							<div class="address_wrap grid_vw_1">
								<span class="heading">Showroom/Office</span>
								<div class="wrap">
									<a class="eng address" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9" @click="menuClose()">
										<span>Kyoden Bldg. 6F, 2-8-2 </span>
										<span>Ebisu-Minami, Shibuya-ku,</span>
										<span class="icon outside">Tokyo 150-0022 Japan<i></i></span>
									</a>
								</div>
								<div class="wrap">
									<a class="address" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9" @click="menuClose()">
										<span>150-0022 <br class="smart">東京都渋谷区恵比寿南</span>
										<span class="icon outside">2-8-2 キョウデンビル 6F<i></i></span>
									</a>
								</div>
								<NuxtLink class="showroom underline" to="/showroom" @click.native="menuClose()">Showroom</NuxtLink>
							</div>
							<div class="list_wrap grid_vw_2">
								<span class="heading">Index</span>
								<ul class="flex">
									<li class="grid_vw_1">
										<NuxtLink class="" to="/" @click.native="menuClose()">Home</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/brands" @click.native="menuClose()">Brands</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/news" @click.native="menuClose()">News</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/press" @click.native="menuClose()">Press</NuxtLink>
									</li>
									<!-- <li class="grid_vw_1">
										<NuxtLink class="" to="/journal" @click.native="menuClose()">Journal</NuxtLink>
									</li> -->
									<li class="grid_vw_1">
										<NuxtLink class="" to="/about" @click.native="menuClose()">About</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/contact" @click.native="menuClose()">Contact</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/dealers" @click.native="menuClose()">Dealers</NuxtLink>
									</li>
									<li class="grid_vw_1">
										<NuxtLink class="" to="/download" @click.native="menuClose()">Catalog</NuxtLink>
									</li>
								</ul>
							</div>
						</div>
						<div class="visual desktop grid_5">
							<div class="ratio">
								<img alt="" src="~/assets/img/menu.jpg">
							</div>
						</div>
					</div>
					<div class="footer">
						<ul class="flex">
							<li class="grid_vw_1">
								<NuxtLink class="" to="/professionals" @click.native="menuClose()">For Professionals</NuxtLink>
							</li>
							<!-- <li class="grid_vw_1">
								<NuxtLink class="" to="/download" @click.native="menuClose()">Catalog Download</NuxtLink>
							</li> -->
							<li class="grid_vw_2">
								<NuxtLink class="" to="/privacy" @click.native="menuClose()">Privacy Policy</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>


	</header>
			
</template>

<script>
import zonedTimeToUtc from 'date-fns-tz/zonedTimeToUtc'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

export default {
	name: 'Header',
	data() {
		return {
			menuStatus: '',
			pathName: '',
			bg: 'bg',
			scrollTrigger: [],
			dotClass: 'flash',
			japanHour: '00',
			japanMinutes: '00',
			japanDayPeriod: 'am',
			denmarkHour: '00',
			denmarkMinutes: '00',
			denmarkDayPeriod: 'am',
			brandList: []
		}
	},
	head() {
		return {
			bodyAttrs: {
				class: this.menuStatus == 'open' ? 'body_fix' : ''
			},
		}
	},
	async fetch() {
		try {
			this.brandList = await this.$wordpress.getPosts('brands', {
				params: {
					'posts_per_page': -1,
					'_embed': true
				}
			})
			.then((res) => {
				return res.data
			})
		} catch(error) {
			console.log(error)
		}
	},
	watch: {
		$route(to, from) {
			this.pathName = to.name ?? 'error'
			this.$nextTick(() => {

				if ((this.$route.name != 'index' && this.$route.name != 'journal') || this.pathName == 'error') {
					this.bg = ''
					document.querySelector('header').classList.remove('bg')
					// if (this.$scrollTrigger.getById('headerBg')) {
					// 	this.$scrollTrigger.getById('headerBg').disable()
					// }
					this.scrollTrigger.disable()
				} else {
					this.bg = 'bg'
					document.querySelector('header').classList.add('bg')
					// if (this.$scrollTrigger.getById('headerBg')) {
					// 	this.$scrollTrigger.getById('headerBg').enable()
					// }
					this.scrollTrigger.enable()
				}

			})
			
			document.querySelector('.brand_menu').classList.remove('show')
		}
	},
	mounted() {

		window.addEventListener('resize', () => {
			setTimeout(() => {
				this.$scrollTrigger.getAll().forEach((trigger) => {
					trigger.kill()
				})
				this.$scrollTrigger.refresh()
			}, 100)
		})

		this.pathName = this.$route.name ?? 'error'

		this.scrollTrigger = this.$scrollTrigger.create({
			id: 'headerBg',
			trigger: document.querySelector('.mv') ? '.mv' : 'main',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			onEnterBack: () => {
				if (this.pathName != 'error') {
					document.querySelector('header').classList.add('bg')
				}
			},
			onLeave: () => {
				document.querySelector('header').classList.remove('bg')
			},
			onLeaveBack: () => {
				if (this.pathName != 'error') {
					document.querySelector('header').classList.add('bg')
				}
			},
		})

		setTimeout(() => {

			if ((this.$route.name != 'index' && this.$route.name != 'journal') || this.pathName == 'error') {
				this.bg = ''
				document.querySelector('header').classList.remove('bg')
				this.$scrollTrigger.getById('headerBg').disable()
				this.scrollTrigger.disable()
			} else {
				this.bg = 'bg'
				document.querySelector('header').classList.add('bg')
				this.$scrollTrigger.getById('headerBg').enable()
				this.scrollTrigger.enable()
			}
			
		}, 100)

		setTimeout(() => {
			setInterval(() => this.setDateTime(), 1000)
			// setTimeout(() => {
				setInterval(() => this.dotFlash(), 500)
			// }, 500)
		}, 1000 - new Date().getUTCMilliseconds())

		if (window.innerWidth > 980) {
			this.setBrandMenu()
		}

	},
	computed: {
		path: function() {
			return this.pathName
		},
	},
	methods: {
		menuOpen: function() {
			this.menuStatus = 'open'
			document.querySelector('header').classList.add('open')
		},
		menuClose: function() {
			this.menuStatus = ''
			document.querySelector('header').classList.remove('open')
		},
		menuClick: function() {
		},
		setDateTime: function() {
			var date = new Date()
			// const date = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
			// 					  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds())
			const japanDate = utcToZonedTime(date, 'Asia/Tokyo')
			const denmarkDate = utcToZonedTime(date, 'Europe/Berlin')
			this.japanHour = this.$dateFns.format(japanDate, 'hh')
			this.denmarkHour = this.$dateFns.format(denmarkDate, 'hh')
			this.japanMinutes = this.$dateFns.format(japanDate, 'mm')
			this.denmarkMinutes = this.$dateFns.format(denmarkDate, 'mm')
			this.japanDayPeriod = this.$dateFns.format(japanDate, 'aaa')
			this.denmarkDayPeriod = this.$dateFns.format(denmarkDate, 'aaa')

		},
		dotFlash: function() {
			this.dotClass = this.dotClass != '' ? '' : 'flash'
		},
		setBrandMenu: function() {
			// var initial = true
			var onHover = false
			const hoverTarget = document.querySelector('.brand_button')
			const brandMenu = document.querySelector('.brand_menu')
			const brandMenuList = document.querySelector('.brand_menu .wrap')
			hoverTarget.addEventListener('mouseover', function(e) {

				onHover = true
				brandMenu.classList.add('show')

			})
			brandMenuList.addEventListener('mouseover', function(e) {

				onHover = true
				brandMenu.classList.add('show')

			})
			hoverTarget.addEventListener('mouseleave', function(e) {

				onHover = false
				setTimeout(() => {
					if (!onHover) {
						brandMenu.classList.remove('show')
					}
				}, 1500)

			})
			brandMenuList.addEventListener('mouseleave', function(e) {

				brandMenu.classList.remove('show')

			})
			document.querySelectorAll('.menu_list li a').forEach((target) => {

				if (target != hoverTarget) {
					target.addEventListener('mouseover', function(e) {

						brandMenu.classList.remove('show')

					})
				}

			})
			
			// const mouseOver = function(e) {

			// 	onHover = true
			// 	brandMenu.classList.add('show')

			// }
			// const targetMouseLeave = function(e) {

			// 	onHover = false
			// 	setTimeout(() => {
			// 		if (!onHover) {
			// 			brandMenu.classList.remove('show')
			// 		}
			// 	}, 1500)

			// }
			// const listMouseLeave = function(e) {

			// 	brandMenu.classList.add('show')

			// }

			// if (!initial) {

			// 	hoverTarget.removeEventListener('mouseover', mouseOver)
			// 	brandMenuList.removeEventListener('mouseover', mouseOver)
			// 	hoverTarget.removeEventListener('mouseleave', targetMouseLeave)
			// 	brandMenuList.removeEventListener('mouseleave', listMouseLeave)

			// }

			// hoverTarget.addEventListener('mouseover', mouseOver)
			// brandMenuList.addEventListener('mouseover', mouseOver)
			// hoverTarget.addEventListener('mouseleave', targetMouseLeave)
			// brandMenuList.addEventListener('mouseleave', listMouseLeave)

			// initial = false
		},
	},
}
</script>

<style lang="scss" scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 2.4rem 4rem;
		width: calc(100% - 8rem);
		min-width: 100rem;
		background-color: #F5F4EA;
		z-index: 30;
		a, button {
			display: inline-block;
			font-size: 1.4rem;
			line-height: 1;
		}
		.grid_1 {
			width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)));
		}
		// .grid_3 {
		// 	width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) * 3 + (2rem * 2));
		// }
		.grid_5 {
			width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) * 5 + (2rem * 4));
		}
		// .grid_6 {
		// 	width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) * 6 + (2rem * 5));
		// }
		@media only screen and (max-width: 980px) {
			padding: 1.6rem;
			width: calc(100vw - 1.6rem * 2);
			min-width: calc(100vw - 1.6rem * 2);
			a, button {
			}
			.grid_1,
			.grid_3,
			.grid_5,
			.grid_6 {
				width: auto;
			}
		}

		.logo_wrap {
			// margin-right: 2rem;
			height: 2.4rem;
			.logo {
				display: inline-block;
				height: fit-content;
				height: 2.4rem;
				svg {
					display: block;
					width: 12rem;
					width: auto;
					width: -webkit-fill-vailable;
					height: 2.4rem;
					// height: 100%;
				}
			}
			@media only screen and (max-width: 980px) {
				margin-right: 1.6rem;
				// width: calc(((100vw - 1.6rem * 9) / 8) * 3 + (1.6rem * 2));
				height: 2rem;
				.logo {
					height: 2rem;
					svg {
						// width: 10rem;
						height: 2rem;
					}
				}
			}
		}

		.list {
			// margin-right: auto;
			// width: calc(100vw - 8rem - ((((100vw - 8rem) / 5) - (2rem * 4 / 5)) + (2rem * 3) + (((100vw - 8rem) / 15) - (2rem * 14 / 15))));
			width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) * 11 + (2rem * 10));
			.menu_list {
				position: relative;
				width: 100%;
				z-index: 12;
				li {
					// margin-right: 3.5rem;
					line-height: 1;
					order: 0;
					span {
						display: inline-block;
						font-size: 1.4rem;
						line-height: 1;
					}
					&:not(.no) {
						margin-right: 3.5rem;
					}
					&.no {
						display: none;
						width: 0;
						opacity: 0;
						visibility: hidden;
						pointer-events: none;
					}
					&.first_order {
						margin-right: 2rem;
						width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 1);
						order: -1;
						a, span {
							position: relative;
							padding-left: 1.2rem;
							// pointer-events: none;
							&:before {
								content: '';
								position: absolute;
								top: 0;
								left: 0;
								bottom: 0;
								display: block;
								margin: auto;
								width: 4px;
								height: 4px;
								background-color: #27343F;
								border-radius: 50%;
							}
						}
					}
					&.no.first_order {
						display: inline-block;
						opacity: 1;
						visibility: visible;
						pointer-events: auto;
					}

				}
			}
			.brand_menu {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				opacity: 0;
				visibility: hidden;
				pointer-events: none;
				z-index: 50;
				z-index: 11;
				// .bg {
				// 	position: absolute;
				// 	top: 0;
				// 	left: 0;
				// 	right: 0;
				// 	bottom: 0;
				// 	display: block;
					background-color: rgba(0, 0, 0, 0.15);
				// }
				.wrap {
					position: absolute;
					top: 7.2rem;
					left: 4rem;
					right: 4rem;
					padding: 4rem;
					padding-bottom: 6rem;
					background-color: #F5F4EA;
					border-radius: 0.6rem;
					z-index: 1;
					* {
						color: #27343F !important;
					}
					a {
						font-size: 1.6rem;
					}
					.title_wrap {
						padding-bottom: 1.2rem;
						border-bottom: 1px solid rgba(39, 52, 63, 0.15);
						.title {
							display: block;
							font-size: 3.5rem;
							line-height: 1.2;
						}
						a {
							line-height: 2;
						}
					}
					.brand_list {
						margin-top: 4.4rem;
						width: 100%;
						li {
							width: calc((100% - 6rem) / 4);
							a {
								display: inline-block;
								padding: 0.6rem 1.2rem;
								line-height: 1.2;
								border-radius: 10rem;
								&:hover {
									background-color: #EAE9DC;
								}
							}
							&:not(:nth-of-type(4n)) {
								margin-right: 2rem;
							}
							&:nth-of-type(n + 5) {
								margin-top: 1.6rem;
							}
						}
					}
				}
				&.show {
					opacity: 1;
					visibility: visible;
					pointer-events: auto;
				}
			}
			@media only screen and (max-width: 980px) {
				margin-right: auto;
				width: fit-content;
				.menu_list {
					li {
						margin-right: 3.5rem;
						line-height: 1;
						a {

						}
						&:not(.first_order) {
							display: none;
							margin-right: 0;
							width: 0;
							opacity: 0;
							visibility: hidden;
							pointer-events: none;
						}
						&.first_order {
							margin-right: 0;
							width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 1);
							width: fit-content;
							order: -1;
							a {
								position: relative;
								padding-left: 1.2rem;
								&:before {
								}
							}
						}
					}
				}
				.brand_menu {
					display: none;
				}
			}
		}
		.menu {
			.button_wrap {
				text-align: right;
				button {

				}
			}
			.menu_wrap {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				padding-bottom: 6rem;
				min-height: 48rem;
				background-color: #F5F4EA;
				opacity: 0;
				visibility: hidden;
				pointer-events: none;
				z-index: 0;
				.menu_contents_wrap {
					// padding-bottom: 6rem;
					height: 100%;
					// min-height: 48rem;
					.header {
						// position: relative;
						padding: 2.4rem 0;
						width: 100%;
						height: fit-content;
						background-color: #F5F4EA;
						z-index: 1;
						.sns_wrap {
							.sen {
								display: inline-block;
								margin: auto 0.8rem;
								font-size: 1.4rem;
								line-height: 1;
							}
						}
						.time_wrap {
							span {
								display: inline-block;
								margin-right: 0.4rem;
								font-size: 1.4rem;
								line-height: 1;
							}
							.country {
								margin-right: 0.8rem;
							}
							.hour {
							}
							.dot {
								&.flash {
									opacity: 0;
								}
							}
							.minutes {
							}
							.period {
								margin-right: 0;
							}
							.sen {
								display: inline-block;
								margin: auto 1.6rem;
								color: rgba(39, 52, 63, 0.15);
							}
						}
						.button_wrap {
							text-align: right;
						}
					}
					.contents {
						// position: relative;
						margin-top: auto;
						padding-top: 2.4rem;
						width: 100%;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						.contents_wrap {
							margin-right: auto;
							width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 3 + (2rem * 2));
							.heading {
								font-size: 1.4rem;
							}
							.address_wrap {
								a {
									span {
										font-size: 1.4rem;
										line-height: 1.75;
										&:not(:last-of-type) {
											display: block;
										}
									}
									&.address {
										margin-top: 0.8rem;
									}
									&.eng {
										margin-top: 3.5rem;
									}
									&.showroom {
										margin-top: 2.4rem;
										font-size: 1.4rem;
										line-height: 1.75;
									}
								}
							}
							.list_wrap {
								ul {
									margin-top: 3.5rem;
									li {
										margin-bottom: 2rem;
										line-height: 1.2;
										a {
											font-size: 3.5rem;
											line-height: 1.2;
										}
									}
								}
							}
						}
						.visual {
							position: absolute;
							// top: 18rem;
							right: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) + 2rem + 4rem);
							bottom: 4rem;
							// top: -6rem;
							// bottom: -6.4rem;
							.ratio {
								padding-top: calc(100vh - 22rem);
								padding-top: 80vh;
								padding-top: calc(80vh - 48rem);
								min-height: 48rem;
							}
							// img {
							// 	height: 100%;
							// 	object-fit: cover;
							// }
						}
					}
					.footer {
						margin-top: auto;
						padding-top: 2.4rem;
						width: 100%;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						ul {
							margin-right: auto;
							width: calc((((100vw - 8rem) / 15) - (2rem * 14 / 15)) * 9 + (2rem * 8));
							li {
								line-height: 1.2;
								a {
									font-size: 1.6rem;
									line-height: 1.2;
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
				}
			}
			@media only screen and (max-width: 980px) {
				width: fit-content;
				.button_wrap {
					button {

					}
				}
				.menu_wrap {
					align-content: flex-start;
					padding-bottom: 0;
					min-height: auto;
					height: 100dvh;
					overflow: scroll;
					.menu_contents_wrap {
						position: relative;
						height: fit-content;
						overflow: scroll;
						.header {
							padding: 1.6rem 0;
							.sns_wrap {
								position: absolute;
								right: 1.6rem;
								bottom: 4.4rem;
								.sen {
									display: inline-block;
									margin: auto 0.8rem;
									font-size: 1.4rem;
									line-height: 1;
								}
							}
							.time_wrap {
								position: absolute;
								right: 1.6rem;
								bottom: 1.6rem;
								span {
									display: inline-block;
									margin-right: 0.4rem;
									font-size: 1.4rem;
									line-height: 1;
								}
								.country {
									margin-right: 0.8rem;
								}
								.hour {
								}
								.dot {
									&.flash {
										opacity: 0;
									}
								}
								.minutes {
								}
								.period {
									margin-right: 0;
								}
								.sen {
									display: inline-block;
									margin: auto 1.6rem;
									color: rgba(39, 52, 63, 0.15);
								}
							}
							.button_wrap {
								text-align: right;
							}
						}
						.contents {
							margin-top: 0.8rem;
							padding-top: 0;
							border-top: none;
							.contents_wrap {
								width: 100%;
								.heading {
									width: 100%;
									font-size: 1.2rem;
								}
								.address_wrap {
									display: flex;
									flex-wrap: wrap;
									justify-content: space-between;
									width: 100%;
									.wrap {
										width: calc(50% - 0.8rem);
									}
									a {
										span {
											font-size: 1.2rem;
											&:not(:last-of-type) {
											}
										}
										&.address {
											margin-top: 1.2rem;
										}
										&.eng {
											margin-top: 1.2rem;
										}
										&.showroom {
											margin-top: 0.8rem;
											font-size: 1.2rem;
										}
									}
								}
								.list_wrap {
									margin-top: 2.4rem;
									padding: 0.8rem 0 1.6rem;
									border-top: 1px solid rgba(39, 52, 63, 0.15);
									ul {
										margin-top: 1.6rem;
										li {
											margin-bottom: 0.8rem;
											width: calc(50% - 0.8rem);
											a {
												font-size: 2.4rem;
											}
										}
									}
								}
							}
							.visual {
							}
						}
						.footer {
							margin-top: 0;
							padding-top: 1.6rem;
							padding-bottom: 12rem;
							ul {
								width: 100%;
								li {
									margin-bottom: 0.8rem;
									width: calc(50% - 0.8rem);
									a {
										font-size: 1.4rem;
									}
								}
							}
						}
					}
					&.open {
					}
				}
			}
			@media only screen and (max-width: 540px) {
				.menu_wrap {
					.menu_contents_wrap {
						position: static;
						.footer {
							padding-bottom: 0;
						}
					}
				}
			}
		}
		&.bg {
			background-color: transparent;
			* {
				color: #F5F4EA;
			}
			.logo_wrap {
				.logo {
					svg {
						path {
							fill: #F5F4EA;
						}
					}
				}
			}
			.list {
				.menu_list {
					li {
						&.first_order {
							a {
								&:before {
									background-color: #F5F4EA;
								}
							}
						}
					}
				}
			}
		}
		&.open {
			background-color: #F5F4EA;
			* {
				color: #27343F;
			}
			.logo_wrap {
				.logo {
					svg {
						path {
							fill: #27343F;
						}
					}
				}
			}
			.list {
				.menu_list {
					li {
						&.first_order {
							a {
								&:before {
									background-color: #27343F;
								}
							}
						}
					}
				}
			}
		}
		&.brand {
			// position: relative;
		}


	}
</style>
