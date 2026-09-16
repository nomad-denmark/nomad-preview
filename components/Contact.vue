<template>

	<section class="contact flex l4 r4">

		<div class="title_wrap grid_vw_2">
			<h2>Contact Us</h2>
			<h3>NOMAD Inc.<span>Tokyo, Japan</span></h3>
		</div>
		<div class="contact_wrap grid_vw_3">
			<div class="wrap">
				<span class="heading">Contact for Professionals</span>
				<p class="description">プロフェッショナルユースの「テーブルウェア」「空間・インテリア」「プロモーション用商品」のお見積り依頼や、ご相談・お問い合わせはお気軽にご連絡ください。</p>
				<NuxtLink class="icon underline" to="/contact">NOMAD for Professionalsへのお問い合わせ<i></i></NuxtLink>
			</div>
			<div class="wrap">
				<span class="heading">Catalog Download</span>
				<p class="description">お問い合わせ前に検討されたい方に向けて、NOMADの総合カタログとブランドごとの商品カタログをPDFでご用意。ご自由にダウンロードください。</p>
				<NuxtLink class="icon underline" to="/download">各種カタログのダウンロード<i></i></NuxtLink>
			</div>
		</div>

	</section>
			
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss" scoped>

	.contact {

		padding-top: 18rem;
		padding-bottom: 20rem;
		background-color: #EAE9DC;
		.title_wrap {
			h2 {

			}
			h3 {
				margin-top: 4.8rem;
				font-size: 2.6rem;
				line-height: 1.2;
				span {
					display: block;
					margin-top: 0.4rem;
					font-size: 1.4rem;
					line-height: 1.2;
					color: rgba(39, 52, 63, 0.6);
				}
			}
		}
		.contact_wrap {
			.wrap {
				padding-top: 2rem;
				border-top: 1px solid rgba(39, 52, 63, 0.15);
				.heading {

				}
				.description {
					margin: 3.5rem 0;
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 5 + (2rem * 4));
				}
				a {

				}
				&:not(:first-of-type) {
					margin-top: 9.6rem;
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 9.6rem;
			padding-bottom: 10.8rem;
			.title_wrap {
				h2 {

				}
				h3 {
					font-size: 2rem;
					span {
						font-size: 1.2rem;
					}
				}
			}
			.contact_wrap {
				margin-top: 2.4rem;
				.wrap {
					.heading {

					}
					.description {
						margin: 3rem 0;
						width: 100%;
					}
					a {

					}
					&:not(:first-of-type) {
						margin-top: 4.8rem;
					}
				}
			}
		}

	}

</style>
