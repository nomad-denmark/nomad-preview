import Vue from "vue"

import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(CustomEase)
}
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
	offset: window.innerWidth < 980 ? -69 : -86
})

// import PerfectScrollbar from 'vue2-perfect-scrollbar'
// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

// Vue.use(PerfectScrollbar)


// var lenis = new Lenis()
// lenis.on('scroll', (e) => {
// })
// function raf(time) {
// 	lenis.raf(time)
// 	requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

// export default async ({ app }, inject) => {
// 	app.router.afterEach((to, from) => {
// 		// ScrollTrigger.refresh()
// 		// if (to.path !== from.path) {
// 			// lenis.scrollTo('.scroll-container', {
// 			// 	offset: 0,
// 			// 	duration: 0,
// 			// 	easing: () => {},
// 			// 	immediate: true
// 			// })
// 		// }
// 		lenis.destroy()
// 		setTimeout(() => {
// 			lenis = new Lenis()
// 			requestAnimationFrame(raf)
// 		}, 150)
// 		// lenis = new Lenis()
// 		// requestAnimationFrame(raf)
// 	})

// 	inject('lenis', lenis)

// }


