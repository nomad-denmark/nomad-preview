import axios from 'axios'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	ssr: false,

	server: {
    port: 6166
  },

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'NOMAD Preview',
		htmlAttrs: {
			lang: 'ja'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'noindex, nofollow' },
			{ hid: 'description', name: 'description', content: 'デンマークのインテリアを中心としたブランドの日本総代理店 NOMAD（ノマド）が取り扱う商品は、家具・雑貨・テーブルウェアをはじめ、上質ながら、身近で取り入れやすいもの。時代を問わず、環境にやさしく、サステナブルなもの。昔からものづくりに影響を与えあってきた互いの国で、共感できる心地よさを持つブランドを厳選しています。' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:locale', content: 'ja_JP' },
			{ property: 'og:type', content: 'website' },
			{ hid: 'og:sitename', property: 'og:sitename', content: 'NOMAD' },
			{ hid: 'og:title', property: 'og:title', content: 'NOMAD' },
			{ hid: 'og:description', property: 'og:description', content: 'デンマークのインテリアを中心としたブランドの日本総代理店 NOMAD（ノマド）が取り扱う商品は、家具・雑貨・テーブルウェアをはじめ、上質ながら、身近で取り入れやすいもの。時代を問わず、環境にやさしく、サステナブルなもの。昔からものづくりに影響を与えあってきた互いの国で、共感できる心地よさを持つブランドを厳選しています。' },
			{ hid: 'og:image', property: 'og:image', content: 'https://preview.nomadinc.jp/ogp.jpg' },
			{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/' },
			{ name: 'twitter:card', content: 'summary_large_image' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.jpg' },
			{ rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'apple-touch-icon-precomposed', type: 'image/x-icon', href: '/favicon.jpg' },
			{ rel: 'preconnect', type: '', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', type: '', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', type: '', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500&display=swap' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/style/initialize.scss',
		'~/assets/style/style.scss',
		'~/assets/style/common.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/axios',
		'~/plugins/gsap',
		'~/plugins/swiper',
		'~/plugins/validate',
		{
			src: '~/plugins/scroll',
			mode: 'client'
		}
		
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		['@nuxtjs/date-fns', { locales: ['ja'] }],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'vue-scrollto/nuxt',
		'nuxt-clipboard2',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		transpile: [
			'@studio-freight/lenis',
			'gsap',
			'vee-validate/dist/rules'
		]
	},

	
}
