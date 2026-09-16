<template>

	<main class="l4 r4">

		<section class="mv">
			<h1 class="grid_vw_4">Contact</h1>
			<div class="wrap flex">
				<span class="heading grid_vw_1">Welcome</span>
				<div class="text_wrap grid_vw_3">
					<p class="introduction">弊社ショールームにて、PRESS関係者様への撮影用サンプルの貸出し、また、お取引をご希望される法人様や商品サンプルをご覧になりたい法人様へのご商談・貸出しも行っております。ご要望の方はお気軽にお問い合わせください。</p>
					<p class="introduction">土日祝日・年末年始・休暇期間は翌営業日以降の対応となりますのでご了承ください。また、お問い合わせの内容によっては担当者より回答を差し上げるまでお時間をいただくこともございます。</p>
				</div>
				<div class="catalog_wrap grid_vw_1">
					<p class="description">各種カタログ冊子の送付は行っておりませんのでデジタルカタログをご覧ください。</p>
					<NuxtLink class="underline" to="">Catalog Download</NuxtLink>
				</div>
			</div>
		</section>

		<section class="form">
			<div class="flex">
				<div class="contact grid_vw_1">
					<span class="heading">お問い合わせ</span>
					<a class="link" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9">
						<span>150-0022</span>
						<span>東京都渋谷区恵比寿南2-8-2</span>
						<span class="icon outside">キョウデンビル 6F<i></i></span>
					</a>
					<span class="tel">TEL： 03-6407-1073</span>
					<div class="wrap">
						<a class="underline" target="_blank" href="">お電話でのお問い合わせ</a>
					</div>
					<span class="heading">営業時間</span>
					<p class="hour">
						平日 9:00〜18:00<br>
						第3金曜 9:00〜14:00
					</p>
				</div>
				<div class="main flex grid_vw_4">
					<ValidationObserver tag="div" ref="observer" v-slot="{ handleSubmit }">
						<form ref="form" action="/contact/completed" method="post" name="contact" @submit.prevent="handleSubmit(submit)">
							<!-- <input type="hidden" name="form-name" value="contact"> -->
							<div class="form_item flex">
								<h4 class="required">お問合せ種別</h4>
								<ValidationProvider class="toggle_button input_wrap" tag="div" v-slot="{ errors }" name="件名" rules="required">
									<select id="subject" class="toggle" v-model="subject" @change="setSubject()">
										<option value="取り引きについて">取り引きについて</option>
										<option value="サンプルの貸出し">サンプルの貸出し</option>
										<option value="商品に関して">商品に関して</option>
										<option value="ショールーム来店">ショールーム来店</option>
										<option value="プロフェッショナル向けサービス">プロフェッショナル向けサービス（テーブルウェア／コントラクト／プロモーション・ギフト）</option>
										<option value="その他">その他お問い合わせ全般</option>
									</select>
									<p class="error" v-show="errors.length">件名が入力されていません。</p>
								</ValidationProvider>
							</div>
							<div class="form_item flex">
								<h4 class="required">お名前</h4>
								<ValidationProvider class="input_wrap" tag="div" v-slot="{ errors }" name="名前" rules="required">
									<input type="text" name="name" v-model="name" placeholder="お名前">
									<p class="error" v-show="errors.length">お名前が入力されていません。</p>
								</ValidationProvider>
							</div>
							<div class="form_item flex">
								<h4 class="required">フリガナ</h4>
								<ValidationProvider class="input_wrap" tag="div" v-slot="{ errors }" name="名前（かな）" rules="required">
									<input type="text" name="kana" v-model="kana" placeholder="フリガナ">
									<p class="error" v-show="errors.length">フリガナが入力されていません。</p>
								</ValidationProvider>
							</div>
							<div class="form_item flex">
								<h4 class="required">会社名</h4>
								<ValidationProvider class="input_wrap" tag="div" v-slot="{ errors }" name="会社名" rules="required">
									<input type="text" name="tel" v-model="tel" placeholder="会社名または店舗名をご記入ください">
									<p class="error" v-show="errors.length">会社名が入力されていません。</p>
								</ValidationProvider>
							</div>
							<div class="form_item flex">
								<h4 class="required">メールアドレス</h4>
								<ValidationProvider class="input_wrap" tag="div" v-slot="{ errors }" name="メールアドレス" rules="required|email">
									<input type="email" name="mail" v-model="mail" placeholder="sample@nomadinc.jp">
									<p class="error" v-show="errors.length">メールアドレスが入力されていません。</p>
								</ValidationProvider>
							</div>
							<div class="form_item flex">
								<h4 class="required">お問い合わせ内容</h4>
								<ValidationProvider class="input_wrap" tag="div">
									<textarea rows="10" name="content" v-model="content" placeholder="できるだけ具体的にご質問やお問い合わせの内容をご記入ください"></textarea>
								</ValidationProvider>
							</div>
							<div class="flex">
								<ValidationProvider class="acceptance_wrap" tag="div" v-slot="{ errors }" name="チェックボックス" :rules="{ required: { allowFalse: false } }">
									<div class="acceptance_item">
										<div class="flex flex-start align-center">
											<label class="checkbox_wrap">
												<input type="checkbox" name="acceptance" v-model="acceptance">
												<i></i>
											</label>
											<p class="caution"><NuxtLink class="link underline" to="/privacy">プライバシーポリシー</NuxtLink>に同意</p>
										</div>
									</div>
									<div class="error_wrap" v-show="errors.length">
										<p class="error">チェックボックスにチェックを入れてください。</p>
									</div>
								</ValidationProvider>
								<div class="submit_wrap">
									<button type="submit" class="submit_button">送信する</button>
								</div>
							</div>
						</form>
					</ValidationObserver>
				</div>
			</div>
		</section>


	</main>

</template>

<script>
export default {
	name: 'ShowroomPage',
	data() {
		return {
			subject: '',
			name: '',
			kana: '',
			company: '',
			mail: '',
			content: ''
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
		setSubject: function(isInit) {

			const select = document.getElementById('subject')
			this.subject = select.options[select.selectedIndex].value

		},
		async submit() {
			if ( this.$refs.observer.validate() ) {
				let data = {
					'subject': this.subject,
					'name': this.name,
					'kana': this.kana,
					'company': this.company,
					'mail': this.mail,
					'content': this.content,
				}
				let formData = JSON.stringify( data )
				const config = {
					headers: {
						'Content-Type': 'application/json',
					}
				}
				Promise.all([
					this.$axios.post('https://nomad.form.newt.so/v1/Tz9-qXbSu', data, config),
				])
				.then((res) => {
					this.$router.push('/contact/completed/')
				})
				.catch((error) => {
					console.dir(error)
				})
				
			}
		},
	}
}
</script>

<style lang="scss" scoped>

	main {

		.heading {
			display: inline-block;
			line-height: 1.5;
		}

		.mv {
			position: relative;
			padding-top: 15rem;
			padding-bottom: 18rem;
			h1 {
				margin-left: auto;
				margin-bottom: 6rem;
			}
			.contact {
				* {
					font-size: 1.4rem;
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
				.wrap {
					.underline {
						padding: 0.4rem 0;
					}
					&.form {
						margin-bottom: 3.5rem;
					}
				}
			}
			.main {
				.visual {
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 5 + (2rem * 4));
					.ratio {
						padding-top: 133%;
					}
				}
				.text_wrap {
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
					.introduction {
						line-height: 2;
						&.en {
							margin-top: 2.4rem;
						}
					}
					.button_wrap {
						margin-top: 2.4rem;
						button {
							position: relative;
							display: inline-block;
							padding: 1.2rem 1.8rem;
							width: calc(50% - 1rem - (1.8rem * 2));
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
			h1 {

			}
			@media only screen and (max-width: 980px) {
			}
		}

		.form {
			position: relative;
			padding-top: 15rem;
			padding-bottom: 18rem;
			h1 {
				margin-left: auto;
				margin-bottom: 6rem;
			}
			.contact {
				* {
					font-size: 1.4rem;
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
				.wrap {
					margin-bottom: 3.5rem;
					.underline {
						padding: 0.4rem 0;
					}
				}
			}
			.main {
				.visual {
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 5 + (2rem * 4));
					.ratio {
						padding-top: 133%;
					}
				}
				.text_wrap {
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)) * 3 + (2rem * 2));
					.introduction {
						line-height: 2;
						&.en {
							margin-top: 2.4rem;
						}
					}
					.button_wrap {
						margin-top: 2.4rem;
						button {
							position: relative;
							display: inline-block;
							padding: 1.2rem 1.8rem;
							width: calc(50% - 1rem - (1.8rem * 2));
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
			h1 {

			}
			@media only screen and (max-width: 980px) {
			}
		}



	}

</style>
