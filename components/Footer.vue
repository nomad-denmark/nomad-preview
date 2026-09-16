<template>
	
	<footer class="flex">

		<h3 class="grid_vw_3">Let’s Talk</h3>

		<div class="address wrap flex">

			<h4 class="">Showroom/Office</h4>

			<div class="grid_vw_3 flex">
				<div class="flex">
					<a class="link grid_vw_1" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9">
						<span>Kyoden Bldg. 6F, 2-8-2</span>
						<span>Ebisu-Minami, Shibuya-ku,</span>
						<span class="icon outside">Tokyo 150-0022 Japan<i></i></span>
					</a>
					<a class="link grid_vw_1" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9">
						<span>150-0022 東京都渋谷区恵比寿南</span>
						<span class="icon outside">2-8-2 キョウデンビル 6F<i></i></span>
					</a>
				</div>
				<NuxtLink class="to_page icon" to="/contact">Contact Us<i></i></NuxtLink>
			</div>
			
		</div>

		<div class="sns wrap flex">

			<h4 class="">Follow Us</h4>

			<div class="grid_vw_3">
				<div class="">
					<a class="underline" target="_blank" href="https://www.instagram.com/nomadinc_japan/">Instagram</a>
				</div>
				<div class="">
					<a class="underline" target="_blank" href="https://www.facebook.com/nomadinc.jp">Facebook</a>
				</div>
			</div>
			
		</div>

		<div class="professionals wrap flex">

			<h4 class="">Professional Use</h4>

			<div class="grid_vw_3 flex">
				<div class="grid_vw_1">
					<h5>Service for professionals</h5>
					<div class="tableware">
						<NuxtLink class="underline" :to="{ name: 'case', query: { q: 'tableware' } }">Tableware</NuxtLink>
					</div>
					<div class="contract">
						<NuxtLink class="underline" :to="{ name: 'case', query: { q: 'contract' } }">Contract</NuxtLink>
					</div>
					<div class="promotion_gift">
						<NuxtLink class="underline" :to="{ name: 'case', query: { q: 'promotionGift' } }">Promotion/Gift</NuxtLink>
					</div>
				</div>
				<NuxtLink class="to_page icon" to="/professionals">For Professionals<i></i></NuxtLink>
			</div>
			
		</div>

		<div class="credit wrap flex align-end">

			<span class="heading">© NOMAD Inc., All rights reserved.</span>

			<div class="grid_vw_3 flex align-end">
				<div class="privacy grid_vw_1">
					<NuxtLink class="underline" to="/privacy">Privacy Policy</NuxtLink>
				</div>
				<!-- <div class="design grid_vw_1">
					<span class="text">Brand Design by</span>
					<div class="name_wrap">
						<a class="underline" target="_blank" href="https://www.narikatadesign.com/">Narikata Design Soudanshitsu</a>
					</div>
				</div> -->
				<!-- <div class="design grid_vw_1"> -->
					<!-- <span class="text">Web Design by</span>
					<div class="name_wrap">
						<a class="underline" target="_blank" href="https://three-inc.jp/">THREE</a>
					</div> -->
					<!-- <span class="develop">Web Development by</span>
					<div class="develop">
						<span class="">imukat. (Takumi Matsuyama)</span>
					</div> -->
				<!-- </div> -->
			</div>
			
		</div>

	</footer>

</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss" scoped>

	footer {
		padding: 9.6rem 4rem 4.8rem;
		h3 {
			margin-left: auto;
			.ratio {

			}
		}
		.wrap {
			margin-top: 4.8rem;
			width: 100%;
			&.address {
				.link {
					span {
						display: block;
						&.icon {
							display: inline-block;
							width: auto;
						}
					}
				}
			}
			&.sns {

			}
			&.professionals {

			}
			&.credit {
				* {
					font-size: 1.4rem;
					line-height: 1.5;
				}
				.design {
					.text {
						display: block;
					}
					&:last-of-type {
						text-align: right;
					}
				}
				.develop {
					display: none;
				}
			}
			&:first-of-type,
			&:last-of-type {
				margin-top: 9.6rem;
			}
		}
		@media only screen and (max-width: 980px) {
			padding: 4.8rem 1.6rem 2.4rem;
			h3 {
				margin-left: 0;
				.ratio {

				}
			}
			.wrap {
				margin-top: 2.4rem;
				.grid_vw_3 {
					margin-top: 0.4rem;
					margin-left: auto;
					width: calc(((100vw - 1.6rem * 9) / 8) * 7 + (1.6rem * 6));
					.to_page {
						margin-top: 1.2rem;
						margin-left: auto;
					}
				}
				&.address {
					.link {
						span {
							&.icon {
							}
						}
						&:last-of-type {
							margin-top: 1.2rem;
						}
					}
				}
				&.sns {

				}
				&.professionals {
					.tableware {
						margin-top: 1.2rem;
					}
				}
				&.credit {
					position: relative;
					.grid_vw_3 {
						width: 100%;
					}
					* {
						font-size: 1.2rem;
					}
					.heading {
						margin-top: 2.4rem;
						// margin-bottom: 2.4rem;
						// order: 1;
					}
					.privacy {
						width: 100%;
						// position: absolute;
						// right: 0;
						// bottom: 0;
						// margin-top: 2.4rem;
						// margin-left: calc(((100vw - 1.6rem * 9) / 8) * 1 + (1.6rem * 1));
						// position: absolute;
						// left: calc(((100vw - 1.6rem * 9) / 8) * 1 + (1.6rem * 1));
						// bottom: 0;
					}
					.design {
						margin-top: 2.4rem;
						// width: 100%;
						width: auto;
						.text {
						}
						.name_wrap {
							// margin-left: auto;
							// width: calc(((100vw - 1.6rem * 9) / 8) * 7 + (1.6rem * 6));
						}
						&:last-of-type {
							// margin-top: 1.2rem;
							// text-align: left;
						}
					}
				}
				&:first-of-type,
				&:last-of-type {
					margin-top: 4.8rem;
				}
			}
		}
	}

</style>