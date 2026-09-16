<template>

	<main class="flex l4 r4">

		<h1 class="">
			<span class="wrap flex">
				<span class="heading grid_vw_1">Completed</span>
				<span class="title grid_vw_4">Thank you</span>
			</span>
			<span class="">for your contact.</span>
		</h1>
		<div class="text_wrap flex grid_vw_4">
			<p class="introduction">この度は株式会社NOMADへお問い合わせいただき、誠にありがとうございます。お問い合わせいただきました内容を確認の上、担当者より折り返しのご連絡させていただきます。</p>
			<p class="introduction">また、ご記入いただいたメールアドレスへ、自動返信の確認メールをお送りしております。しばらく経ってもメールが届かない場合は、お手数ですが下記までお問い合わせください。</p>
		</div>
		<div class="nav_wrap flex align-end grid_vw_4">
			<div class="data grid_vw_2 flex">
				<div class="wrap grid_vw_1">
					<span class="heading">株式会社NOMAD</span>
					<span class="tel">TEL： 03-6407-1073</span>
					<a class="underline" target="_blank" href="tel:03-6407-1073">お電話でのお問い合わせ</a>
				</div>
				<div class="wrap grid_vw_1">
					<span class="heading">営業時間</span>
					<p class="hour">
						平日 9:00〜18:00<br>
						第3金曜 9:00〜14:00
					</p>
				</div>
			</div>
			<div class="link_wrap grid_vw_2">
				<NuxtLink class="icon" to="/">Go to Home<i></i></NuxtLink>
			</div>
		</div>

	</main>

</template>

<script>
export default {
	layout: 'thanks',
	name: 'ThanksPage',
	head() {
		return {
			title: 'Thanks | NOMAD',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Thanks | NOMAD' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/contact/thanks/' },
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
		brandList: function() {
			return this.brands
		},
		newsList: function() {
			return this.news
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>

	main {


		position: relative;
		padding-top: 15rem;
		padding-bottom: 2.4rem;
		height: calc(100vh - 15rem - 2.4rem);
		h1 {
			span {
				&:not(.heading) {
				}
			}
			.wrap {
				.heading {
					display: block;
					margin-top: 0.8rem;
					font-size: 1.6rem;
					line-height: 1.2;
				}
			}
		}
		.text_wrap {
			margin-top: 7rem;
			margin-left: auto;
			.introduction {
				width: calc(50% - 1rem - 4rem);
			}
		}
		.nav_wrap {
			margin-top: auto;
			margin-left: auto;
			.wrap {
				* {
					font-size: 1.4rem;
					line-height: 1.75;
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
			}
			.link_wrap {
				align-items: bottom;
				text-align: right;
				a {
					display: inline-block;
					padding-right: 5.5rem;
					font-size: 5.8rem;
					line-height: 1;
					i {
						width: 3.9rem;
						height: 3.9rem;
						&:before,
						&:after {
							background-image: url('~/assets/img/icon/arrow_simple.svg');
						}
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
			// padding-bottom: 2.4rem;
			height: auto;
			h1 {
				span {
					&:not(.heading) {
					}
				}
				.wrap {
					.heading {
						margin-top: 0;
						font-size: 1.4rem;
					}
					.title {
						margin-top: 2rem;
						width: 100%;
					}
				}
			}
			.text_wrap {
				margin-top: 3rem;
				.introduction {
					width: 100%;
					&:not(:first-of-type) {
						margin-top: 2rem;
					}
				}
			}
			.nav_wrap {
				margin-top: 2rem;
				.data {
					width: 100%;
				}
				.wrap {
					width: calc(50% - 0.8rem);
					* {
						font-size: 1.2rem;
					}
					span:not(.icon) {
					}
					.heading {
						margin-bottom: 0.6rem;
					}
					.tel {
						margin-top: 0.4rem;
					}
				}
				.link_wrap {
					margin-top: 6rem;
					margin-left: auto;
					align-items: bottom;
					text-align: right;
					a {
						padding-right: 3rem;
						font-size: 3.3rem;
						i {
							width: 2.4rem;
							height: 2.4rem;
							&:before,
							&:after {
							}
						}
					}
				}
			}
		}

	}

</style>
