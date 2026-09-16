import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(CustomEase)
}

export default function ( {}, inject) {

  inject('gsap', gsap)
  inject('scrollTrigger', ScrollTrigger)

}

