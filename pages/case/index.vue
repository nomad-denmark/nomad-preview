<template>

	<main class="">

		<section class="mv flex l4 r4">
			<h1 class="grid_vw_4">Case Study</h1>
			<div class="wrap flex">
				<span class="heading grid_vw_1">Cases with<br>NOMAD Products</span>
				<p class="introduction grid_vw_3">NOMADがこれまでに手がけた、実例をご紹介します。さまざまなご要望にお応えできるブランドラインナップで、テーブルウェア、空間・インテリア、プロモーション商品とプロジェクトは多岐にわたります。企画立案から担当した実例は、経緯やコンセプトなどについても詳しくご紹介しています。</p>
				<div class="button_wrap grid_vw_1">
					<button class="icon outside" @click="scrollToTarget('tableware')">Tabaleware<i></i></button>
					<button class="icon outside" @click="scrollToTarget('contract')">Contract<i></i></button>
					<button class="icon outside" @click="scrollToTarget('promotionGift')">Promotion/Gift<i></i></button>
				</div>
			</div>
			
		</section>

		<section class="list l4 r4">
			<div id="tableware" class="wrap flex">
				<div class="title_wrap sticky grid_vw_2">
					<h2>Tabaleware</h2>
					<p class="description">業務用食器の提案実例です。グラス、プレート、ボウル、カトラリーなど、デンマークの洗練されたデザインを豊富に取り揃えております。</p>
				</div>
				<ul class="case_list grid_vw_3">
					<li class="" v-for="caseStudy in tablewareList">
						<CaseItem class="" :data="caseStudy" :isIndex="true"></CaseItem>
					</li>
				</ul>
			</div>
			<div id="contract" class="wrap flex">
				<div class="title_wrap sticky grid_vw_2">
					<h2>Contract</h2>
					<p class="description">NOMADの取り扱い製品を使用した内装・空間の実例です。オフィスや商業施設、公 共施設、ホテル、モデルルームなどの商品提案から、納品まで、お客様と共に素敵な 空間を創造します。</p>
				</div>
				<ul class="case_list grid_vw_3">
					<li class="" v-for="caseStudy in contractList">
						<CaseItem class="" :data="caseStudy" :isIndex="true"></CaseItem>
					</li>
				</ul>
			</div>
			<div id="promotionGift" class="wrap flex">
				<div class="title_wrap sticky grid_vw_2">
					<h2>Promotion/Gift</h2>
					<p class="description">プロモーション／ギフトの提案実例です。商品の販売促進、企業の各種記念品など、大切なシーンにご活用いただけるモダンなデザインの商品を取り揃えております。ロゴやイラストを印字するオリジナル製品の制作も可能です。</p>
				</div>
				<ul class="case_list grid_vw_3">
					<li class="" v-for="caseStudy in promotionGiftList">
						<CaseItem class="" :data="caseStudy" :isIndex="true"></CaseItem>
					</li>
				</ul>
			</div>
		</section>

		<Contact class=""></Contact>

	</main>

</template>

<script>
export default {
	name: 'CaseStudyIndexPage',
	async asyncData({ app, params }) {
		try {
			return Promise.all([
				app.$wordpress.getPosts('case', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'case_category': 'tableware',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('case', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'case_category': 'contract',
						'_embed': true
					}
				}),
				app.$wordpress.getPosts('case', {
					params: {
						// 'posts_per_page': -1,
						'per_page': 100,
						'case_category': 'promotion-gift',
						'_embed': true
					}
				}),
			])
			.then((res) => {
				const tablewareList = res[0].data
				const contractList = res[1].data
				const promotionGiftList = res[2].data
				console.log(res[0])
				return { tablewareList, contractList, promotionGiftList }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'Case Study | NOMAD Preview',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Case Study | NOMAD Preview' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/case/' },
			],
		}
	},
	data() {
		return {
			brands: [],
			news: []
		}
	},
	mounted() {

		if (this.$route.query.q) {
			this.scrollToTarget(this.$route.query.q)
		}

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
		scrollToTarget: function(target) {
			this.$scrollTo('#' + target, {
				offset: window.innerWidth < 980 ? -69 : -100,
			})
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		padding-top: 15rem;
		.mv {
			h1 {
				margin-left: auto;
			}
			.wrap {
				margin-top: 6rem;
				width: 100%;
				.heading {
					display: inline-block;
					line-height: 1.2;
				}
				.introduction {
					width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 3 + (2rem * 2) - 2rem);
					font-size: 1.8rem;
					line-height: 2;
				}
				.button_wrap {
					button {
						position: relative;
						display: inline-block;
						padding: 1.2rem 1.8rem;
						width: calc(100% - 1rem - (1.8rem * 2));
						font-size: 1.4rem;
						line-height: 1;
						border-bottom: 1px solid rgba(39, 52, 63, 0.15);
						i {
							left: 0;
							right: initial;
							transform: rotate(90deg);
						}
					}
				}
			}
		}
		.list {
			margin-top: 18rem;
			.wrap {
				margin-bottom: 18rem;
				border-top: 1px solid #27343F;
				.title_wrap {
					margin-top: 1.6rem;
					h2 {
						font-size: 2.6rem;
						line-height: 1.2;
					}
					.description {
						margin-top: 2rem;
						width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
						line-height: 2;
					}
				}
				.case_list {
					li {
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding-top: 12rem;
			.mv {
				h1 {
					width: 100%;
				}
				.wrap {
					margin-top: 3.5rem;
					width: 100%;
					.heading {
						display: none;
					}
					.introduction {
						width: 100%;
						font-size: 1.4rem;
					}
					.button_wrap {
						margin-top: 2rem;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						button {
							width: calc(50% - 0.8rem - (1.8rem * 2));
							font-size: 1.2rem;
							i {
							}
						}
					}
				}
			}
			.list {
				margin-top: 10.8rem;
				.wrap {
					margin-bottom: 9.6rem;
					.title_wrap {
						h2 {
							font-size: 2rem;
						}
						.description {
							width: 100%;
						}
					}
					.case_list {
						margin-top: 3.5rem;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						li {
						}
					}
				}
			}
		}

	}

</style>
