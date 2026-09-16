<template>

	<div class="">
	<!-- <div class="scroll-wrapper"> -->
		
		<Header></Header>
		<!-- <div class="scroll-container" data-scroll-container> -->

			<main class="flex l4 r4">

				<h1 class="">
					<span class="wrap flex">
						<span class="heading grid_vw_1">Error 404</span>
						<span class="title grid_vw_4">Ooops!</span>
					</span>
					<span class="">The page you are looking for doesn't exist or has been moved.</span>
				</h1>
				<div class="wrap flex align-end">
					<div class="img_wrap">
						<div class="ratio">
							<img alt="" src="~/assets/img/404.jpg">
						</div>
					</div>
					<div class="link_wrap grid_vw_2">
						<NuxtLink class="icon" to="">Go to Home<i></i></NuxtLink>
					</div>
				</div>

			</main>

		<!-- </div> -->

	</div>

</template>


<script>

import Header from '~/components/Header'

export default {
	components: {
		Header,
	},

	mounted() {
		document.querySelector('header').classList.remove('bg')
		setTimeout(() => {
			document.querySelector('header').classList.remove('bg')
		}, 250)
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
		.wrap {
			margin-top: auto;
			width: 100%;
			.img_wrap {
				width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
				.ratio {
					padding-top: 77%;
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
			display: block;
			padding-top: 7rem;
			height: calc(100vh - 7rem - 2.4rem);
			h1 {
				span {
					&:not(.heading) {
					}
				}
				.wrap {
					.heading {
						margin-top: 0.8rem;
						font-size: 1.4rem;
					}
					.title {
						margin-top: 2rem;
						width: 100%;
					}
				}
			}
			.wrap {
				margin-top: 2rem;
				width: 100%;
				.img_wrap {
					width: calc(((100vw - 1.6rem * 9) / 8) * 4 + (1.6rem * 3));
				}
				.link_wrap {
					position: absolute;
					right: 1.6rem;
					bottom: 2rem;
					margin-top: auto;
					align-items: bottom;
					text-align: right;
					a {
						padding-right: 3rem;
						font-size: 3.3rem;
						i {
							width: 2rem;
							height: 2rem;
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
