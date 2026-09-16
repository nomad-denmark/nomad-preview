<template>

	<main class="article">

		<section class="mv l4 r4">				
			<div class="title_wrap flex">
				<h1 class="grid_vw_4">
					<div class="heading_wrap grid_vw_1 flex">
						<img alt="" :src="caseStudy.thumbnail">
						<span class="heading">(Case Study)</span>
					</div>
					{{ caseStudy.title }}
				</h1>
				<div class="back_wrap grid_vw_1">
					<NuxtLink class="icon back" to="/case">Back to List<i></i></NuxtLink>
				</div>
			</div>
			<div class="description_wrap flex">
				<span class="heading">Description</span>
				<div class="grid_vw_3 flex">
					<p class="description grid_vw_2">{{ caseStudy.description }}</p>
					<NuxtLink class="underline" to="/case">{{ caseStudy.category }}</NuxtLink>
				</div>
			</div>
		</section>

		<div class="visual">
			<div class="ratio">
				<img alt="" :src="caseStudy.mainVisual">
			</div>
		</div>

		<section class="contents flex l4 r4">
			<div class="sticky grid_vw_2 flex">
				<div class="share_wrap grid_vw_1">
					<span class="heading">Client</span>
					<span class="name">{{ caseStudy.client }}</span>
				</div>
				<div class="title_wrap grid_vw_1">
					<span class="heading">Brands</span>
					<ul class="">
						<li v-for="brand in caseStudy.brand">
							<NuxtLink class="underline" :to="{ name: 'brands-id', params: { id: brand.slug } }">{{ brand.name }}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
			<div class="content grid_vw_3" v-html="caseStudy.content"></div>
		</section>

		<section class="related l4 r4">
			<div class="wrap flex">
				<div class="title_wrap">
					<h3 class="">Related Cases</h3>
					<div class="desktop">
						<NuxtLink class="icon" to="/case">View All Cases<i></i></NuxtLink>
					</div>
				</div>
				<ul class="case_list grid_vw_3 flex">
					<li class="" :class="layout" v-for="otherCaseStudy in otherCaseStudyList">
						<CaseItem class="" :data="otherCaseStudy"></CaseItem>
					</li>
				</ul>
				<div class="to_all smart">
					<NuxtLink class="icon" to="/case">View All Cases<i></i></NuxtLink>
				</div>
			</div>
		</section>

		<Contact class=""></Contact>

	</main>

</template>

<script>
export default {
	name: 'CaseStudyDetailPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('case', {
					params: {
						'slug': params.id
					}
				}),
			])
			.then((res) => {
				const caseStudy = res[0].data[0]
				return Promise.all([
					app.$wordpress.getPosts('case', {
						params: {
							'slug[ne]': params.id,
							'category': caseStudy.category,
							'limit': 3
						}
					}),
					])
				.then((res) => {
					const otherCaseStudyList = res[0].data
					return { caseStudy, otherCaseStudyList }
				})
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: this.caseStudy.title + ' | NOMAD',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.caseStudy.title + ' | NOMAD' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/case/' + this.caseStudy.slug },
				{ hid: 'og:image', property: 'og:image', content: this.caseStudy.thumbnail ? this.caseStudy.thumbnail.src : 'https://preview.nomadinc.jp/no_image.jpg' },
				{ hid: 'og:description', property: 'og:description', content: this.caseStudy.description },
			],
		}
	},
	data() {
		return {
		}
	},
	mounted() {

	},
	methods: {
		shareURL: function(shareTarget) {
			var url = 'https://twitter.com/intent/tweet?url='
			if (shareTarget == 'LINE') {
				url = 'https://line.me/R/share?text='
			} else if (shareTarget == 'Facebook') {
				url = 'https://www.facebook.com/share.php?u='
			}
			return url + 'https://preview.nomadinc.jp/case/' + this.brand.slug
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 10.8rem;
		.mv {
			.title_wrap {
				padding-bottom: 6rem;
				h1 {
					position: relative;
					line-height: 1.2;
					.heading_wrap {
						display: inline-flex;
						img {
							width: 8rem;
							height: 8rem;
						}
						.heading {
							display: block;
							margin-top: 1.2rem;
							font-size: 1.6rem;
							line-height: 2;
						}
					}
				}
				.back_wrap {
					order: -1;
					a {
						i {

						}
					}
				}
			}
			.description_wrap {
				padding-top: 2.4rem;
				border-top: 1px solid rgba(39, 52, 63, 0.15);
			}
		}
		.visual {
			margin-top: 9.6rem;
			width: 100%;
			.ratio {
				// padding-top: 100vh;
			}
		}
		.contents {
			position: relative;
			margin-top: 12rem;
			padding-bottom: 15rem;
			.sticky {
				.share_wrap {

				}
				.title_wrap {
					.title {
						margin-right: 6rem;
					}
				}
			}
			.content {
				
			}
		}
		.related {
			margin-top: 22rem;
			padding-bottom: 18rem;
			.wrap {
				border-top: 1px solid #27343F;
				.title_wrap {
					margin-top: 2rem;
					h3 {
						font-size: 3.5rem;
						line-height: 1.2;
					}
					a {
						margin-top: 2.6rem;
						line-height: 2;
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			.mv {
				.title_wrap {
					padding-bottom: 3.5rem;
					h1 {
						position: relative;
						margin-top: 3.5rem;
						line-height: 1.2;
						.heading_wrap {
							width: 6rem;
							height: 6rem;
							img {
								position: absolute;
								top: 0;
								left: 0;
								width: 6rem;
								height: 6rem;
							}
							.heading {
								position: absolute;
								top: 0;
								left: 7rem;
								margin-top: 0;
								font-size: 1.4rem;
								line-height: 1.2;
							}
						}
					}
					.back_wrap {
						order: -1;
						a {
							i {

							}
						}
					}
				}
				.description_wrap {
					padding-top: 1.6rem;
					.description {
						margin: 2rem 0;
					}
				}
			}
			.visual {
				margin-top: 4.8rem;
				width: 100vw;
			}
			.contents {
				margin-top: 6rem;
				padding-bottom: 3.5rem;
				.sticky {
					.share_wrap {
						width: 100%;
					}
					.title_wrap {
						margin-top: 2.4rem;
						width: 100%;
						.title {
							margin-right: 0;
						}
					}
				}
				.content {
					margin-top: 6rem;
				}
			}
			.related {
				margin-top: 9.6rem;
				padding-bottom: 10.8rem;
				.wrap {
					.title_wrap {
						margin-top: 2rem;
						h3 {
							font-size: 2rem;
						}
						a {
							margin-top: 2.6rem;
							line-height: 2;
						}
					}
					.case_list {
						margin-top: 3.5rem;
						border-top: 1px solid rgba(21, 38, 50, 0.15);
					}
					.to_all {
						margin-top: 3.5rem;
						width: 100%;
						text-align: right;
					}
				}
			}
		}


	}

</style>
