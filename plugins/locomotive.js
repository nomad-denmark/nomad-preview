import Vue from "vue"

import LocomotiveScroll from "locomotive-scroll"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CustomEase)
}

Object.defineProperty(Vue.prototype, "LocomotiveScroll", {
  value: LocomotiveScroll
})

export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    const scrollElement = document.querySelector('[data-scroll-container]')
    if (980 < window.innerWidth) {

      var params = {
        el: scrollElement,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }
      const locomotive = new LocomotiveScroll(params)
      locomotive.on("scroll", ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(scrollElement, {
        scrollTop(value) {
          return arguments.length ? locomotive.scrollTo(value, 0, 0) : locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: scrollElement.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener("refresh", () => locomotive.update());
      ScrollTrigger.refresh();

      ScrollTrigger.defaults({
        scroller: scrollElement,
        invalidateOnRefresh: true,
        anticipatePin: 1
      })


    }
  });
};