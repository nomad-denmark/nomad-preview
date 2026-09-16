<template>

	<main class="l4 r4">

		<section class="mv">
			<h1 class="grid_vw_4">Contact</h1>
			<div class="wrap flex">
				<span class="heading grid_vw_1">Welcome</span>
				<div class="text_wrap grid_vw_3">
					<p class="introduction">
						弊社ショールームにて、PRESS関係者様への撮影用サンプルの貸出し、また、お取引をご希望される法人様や商品サンプルをご覧になりたい法人様へのご商談・貸出しも行っております。ご要望の方はお気軽にお問い合わせください。<br>
						<br>
						土日祝日・年末年始・休暇期間は翌営業日以降の対応となります。また、お問い合わせの内容によっては担当者より回答を差し上げるまでお時間をいただくこともございます。あらかじめご了承ください。<br>
						<br>
						※こちらのお問い合わせフォームからのセールス・勧誘等はお断りいたします。
					</p>
				</div>
				<div class="catalog_wrap grid_vw_1">
					<p class="description">各種デジタルカタログを無料でダウンロードいただけます。</p>
					<NuxtLink class="underline" to="/download">Catalog Download</NuxtLink>
				</div>
			</div>
		</section>

		<section class="form flex">
			<div class="data grid_vw_1">
				<div class="wrap">
					<span class="heading">お問い合わせ</span>
					<a class="link" target="_blank" href="https://goo.gl/maps/43rhSs9dCGY8mMMF9">
						<span>150-0022</span>
						<span>東京都渋谷区恵比寿南2-8-2</span>
						<span class="icon outside">キョウデンビル 6F<i></i></span>
					</a>
					<span class="tel">TEL： 03-6407-1073</span>
					<a class="underline" target="_blank" href="tel:03-6407-1073">お電話でのお問い合わせ</a>
				</div>
				<div class="wrap">
					<span class="heading">営業時間</span>
					<p class="hour">
						平日 9:00〜18:00<br>
						＊電話受付は17時まで<br>
						第3金曜 9:00〜14:00
					</p>
				</div>
			</div>
			<div class="main grid_vw_4">
				<ValidationObserver tag="div" ref="observer" v-slot="{ invalid, handleSubmit }">
					<form ref="form" action="/contact/thanks" method="post" name="contact" @submit.prevent="handleSubmit(submit)">
						<!-- <input type="hidden" id="recaptchaToken" name="googleReCaptchaToken" /> -->
						<!-- <input type="hidden" name="form-name" value="contact"> -->
						<div class="form_item flex">
							<div class="grid_vw_1">
								<span class="heading required">お問い合わせ種別</span>
							</div>
							<ValidationProvider class="select_wrap grid_vw_3" tag="div" v-slot="{ errors }" name="お問い合わせ種別" rules="required">
								<div class="subject_wrap">
									<select id="subject" class="toggle" v-model="subject" @change="setSubject()">
										<option value="" selected disabled>選択してください</option>
										<option value="取り引きについて">取り引きについて</option>
										<option value="メディア掲載について">メディア掲載について</option>
										<option value="サンプルの貸出し">サンプルの貸出し</option>
										<option value="商品について">商品について</option>
										<option value="ショールーム来店">ショールーム来店</option>
										<option value="プロフェッショナル向けサービス">プロフェッショナル向けサービス（テーブルウェア／コントラクト／プロモーション・ギフト）</option>
										<option value="採用について">採用について</option>
									</select>
								</div>
								<!-- <p class="error" v-show="errors.length">お問い合わせ種別が選択されていません。</p> -->
							</ValidationProvider>
						</div>
						<div class="form_item flex">
							<div class="grid_vw_1">
								<span class="heading required">お名前</span>
							</div>
							<ValidationProvider class="input_wrap grid_vw_3" tag="div" v-slot="{ errors }" name="名前" rules="required">
								<input type="text" name="name" v-model="name" placeholder="お名前">
								<!-- <p class="error" v-show="errors.length">お名前が入力されていません。</p> -->
							</ValidationProvider>
						</div>
						<div class="form_item flex">
							<div class="grid_vw_1">
								<span class="heading required">フリガナ</span>
							</div>
							<ValidationProvider class="input_wrap grid_vw_3" tag="div" v-slot="{ errors }" name="名前（かな）" rules="required">
								<input type="text" name="kana" v-model="kana" placeholder="フリガナ">
								<!-- <p class="error" v-show="errors.length">フリガナが入力されていません。</p> -->
							</ValidationProvider>
						</div>
						<div class="form_item flex">
							<div class="grid_vw_1">
								<span class="heading">会社名</span>
							</div>
							<ValidationProvider class="input_wrap grid_vw_3" tag="div" v-slot="{ errors }" name="会社名" rules="">
								<input type="text" name="company" v-model="company" placeholder="会社名または店舗名をご記入ください">
								<!-- <p class="error" v-show="errors.length">会社名が入力されていません。</p> -->
							</ValidationProvider>
						</div>
						<div class="form_item flex">
							<div class="grid_vw_1">
								<span class="heading required">メールアドレス</span>
							</div>
							<ValidationProvider class="input_wrap grid_vw_3" tag="div" v-slot="{ errors }" name="メールアドレス" rules="required|email">
								<input type="email" name="email" v-model="email" placeholder="sample@nomadinc.jp">
								<!-- <p class="error" v-show="errors.length">メールアドレスが入力されていません。</p> -->
							</ValidationProvider>
						</div>
						<div class="form_item last flex">
							<div class="grid_vw_1">
								<span class="heading required">お問い合わせ内容</span>
							</div>
							<ValidationProvider class="input_wrap grid_vw_3" tag="div" rules="required">
								<textarea rows="" name="content" v-model="content" placeholder="できるだけ具体的にご質問やお問い合わせの内容をご記入ください"></textarea>
							</ValidationProvider>
						</div>
						<div class="submit_wrap flex align-center">
							<div class="google_wrap">
								<p class="attention">This site is protected by reCAPTCHA and the Google <a class="underline" target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a class="underline" target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
							</div>
							<div class="wrap flex align-center">
								<ValidationProvider class="acceptance_wrap" tag="div" v-slot="{ errors }" name="チェックボックス" :rules="{ required: { allowFalse: false } }">
									<div class="flex flex-start align-center">
										<label class="checkbox_wrap">
											<input type="checkbox" name="acceptance" v-model="acceptance">
											<i></i>
										</label>
										<span class="caution"><NuxtLink class="link underline" target="_blank" to="/privacy">プライバシーポリシー</NuxtLink>に同意</span>
									</div>
									<!-- <div class="error_wrap" v-show="errors.length">
										<p class="error">チェックボックスにチェックを入れてください。</p>
									</div> -->
								</ValidationProvider>
								<button type="submit" class="submit_button grid_vw_1" :disabled="invalid">送信する</button>
							</div>
						</div>
					</form>
				</ValidationObserver>
			</div>
		</section>


	</main>

</template>

<script>
export default {
	name: 'ContactPage',
	head() {
		return {
			title: 'Contact | NOMAD',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'Contact | NOMAD' },
				{ hid: 'og:url', property: 'og:url', content: 'https://preview.nomadinc.jp/contact/' },
			],
			script: [
				{
					// src: 'https://www.google.com/recaptcha/api.js?render=6Lc0IHEmAAAAAAPaqmJZ5GOjS927P-dpXz3yBzcR'
				}
			]
		}
	},
	data() {
		return {
			subject: '',
			name: '',
			kana: '',
			company: '',
			email: '',
			content: '',
			acceptance: '',
			recaptchaToken: '',
		}
	},
	mounted() {

		// const self = this
		// grecaptcha.ready(function () {
		// 	grecaptcha.execute("6Lc0IHEmAAAAAAPaqmJZ5GOjS927P-dpXz3yBzcR", { action: "homepage" })
		// 	.then(function (token) {
		// 		self.recaptchaToken = token
		// 	});
		// });

	},
	computed: {
	},
	methods: {
		setSubject: function() {

			const select = document.getElementById('subject')
			this.subject = select.options[select.selectedIndex].value

		},
		async submit() {
			if ( this.$refs.observer.validate() ) {
				 // && this.recaptchaToken != '' ) {

				var mailTo = 'info@nomadinc.jp'
				if (this.subject == '商品について') {
					mailTo = 'sales@nomadinc.jp'
				} else if (this.subject == '採用について') {
					mailTo = 'recruit@nomadinc.jp'
				}

				const formData = new FormData()
				formData.append("mailto", mailTo)
				formData.append("subject", this.subject)
				formData.append("full-name", this.name)
				formData.append("kana", this.kana)
				formData.append("company", this.company)
				formData.append("mail", this.email)
				formData.append("message", this.content)

				try {
					const response = await fetch(
						"https://wordpress.nomadinc.jp/wp-json/contact-form-7/v1/contact-forms/0f0e3b0/feedback",
						{
							method: "POST",
							body: formData,
						}
					);

					const data = await response.json();
					if (data.status === "mail_sent") {
						this.$router.push('/contact/thanks/')
					} else {
						console.error(data);
					}
				} catch (error) {
					console.error(error);
				}
				
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
			h1 {
				margin-left: auto;
				margin-bottom: 6rem;
			}
			.wrap {
				.heading {
					display: block;
					line-height: 1.2;
				}
				.text_wrap {
					.introduction {
						margin-right: 4rem;
						font-size: 1.8rem;
						line-height: 2;
					}
				}
				.catalog_wrap {
					.description {
						font-size: 1.4rem;
						line-height: 2;
					}
					a {
						margin-top: 1.6rem;
						font-size: 1.4rem;
						line-height: 2;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 12rem;
				h1 {
					margin-bottom: 3rem;
				}
				.wrap {
					.heading {
						display: none;
					}
					.text_wrap {
						.introduction {
							margin-right: 0;
							font-size: 1.4rem;
						}
					}
					.catalog_wrap {
						margin-top: 3rem;
						.description {
							font-size: 1.2rem;
						}
						a {
							margin-top: 0.8rem;
							font-size: 1.2rem;
						}
					}
				}
			}
		}

		.form {
			position: relative;
			padding-top: 15rem;
			padding-bottom: 15rem;
			.data {
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
				.underline {
					margin-bottom: 3.5rem;
					padding: 0.4rem 0;
				}
			}
			.main {
				form {
					.form_item {
						padding: 3rem 0;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						* {
							font-size: 1.8rem;
							line-height: 1.75;
						}
						.heading {
							position: relative;
							line-height: 1;
							&.required {
								&:after {
									content: '';
									position: absolute;
									top: 0;
									right: -1rem;
									display: block;
									margin: auto;
									width: 0.6rem;
									height: 0.6rem;
									background-color: #E0525D;
									border-radius: 50%;
								}
							}
						}
						.select_wrap {
							.subject_wrap {
								position: relative;
								display: inline-block;
								padding: 1.2rem 2rem;
								width: 33rem;
								background-color: #EAE9DC;
								border-radius: 10rem;
								select {
									display: inline-block;
									width: 100%;
									white-space: nowrap;
									text-overflow: ellipsis;
									overflow: hidden;
									option {
										color: #27343F;
									}
								}
								&:after {
									content: '';
									position: absolute;
									top: 0;
									right: 1.6rem;
									bottom: 0;
									display: block;
									margin: auto;
									width: 2.4rem;
									height: 2.4rem;
									pointer-events: none;
									background-image: url('~/assets/img/icon/toggle.svg');
									background-position: center;
									background-size: contain;
									background-repeat: no-repeat;
								}
							}
						}
						.input_wrap {
							input, textarea {
								display: block;
								width: 100%;
								background-color: transparent;
							}
							textarea {
								min-height: 26rem;
							}
						}
						&.last {
							padding-bottom: 0;
						}
					}
					.submit_wrap {
						padding-top: 2.4rem;
						border-top: 1px solid rgba(39, 52, 63, 0.15);
						.google_wrap {
							width: calc((((100vw - 8rem) / 5) - (2rem * 4 / 5)) * 1 + 2rem);
							.attention {
								font-size: 1.2rem;
								color: rgba(39, 52, 63, 0.7);
								a {
									font-size: 1.2rem;
									color: rgba(39, 52, 63, 0.7);
									line-height: 1.2;
									&:after {
										background-color: rgba(39, 52, 63, 0.7);
									}
								}
							}
						}
						.wrap {
							margin-left: auto;
							width: 50%;
							.acceptance_wrap {
								margin-right: 2.4rem;
								.checkbox_wrap {
									margin-right: 0.8rem;
									input {
										display: none;
									}
									i {
										position: relative;
										display: block;
										width: 1.8rem;
										height: 1.8rem;
										border: 1px solid rgba(39, 52, 63, 0.4);
										border-radius: 1px;
										background-color: transparent;
										&:before,
										&:after {
											content: '';
											position: absolute;
											display: block;
											height: 2px;
										}
										&:before {
											left: 0.1rem;
											bottom: 0.6rem;
											width: 0.6rem;
											transform: rotate(50deg);
										}
										&:after {
											right: 0rem;
											bottom: 0.8rem;
											width: 1.5rem;
											transform: rotate(-50deg);
										}
									}
									input:checked + i {
										background-color: #27343F;
										&:before,
										&:after {
											background-color: #ffffff;
										}
									}
								}
								.caution {
									line-height: 1.3;
									a {
										line-height: 1;
									}
								}
							}
							.submit_button {
								padding: 1.6rem 0;
								color: #F5F4EA;
								text-align: center;
								background-color: #27343F;
								border-radius: 0.3rem;
								&:disabled {
									cursor: not-allowed;
									background-color: rgba(39, 52, 63, 0.3);
								}
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 7rem;
				padding-bottom: 7rem;
				.data {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 100%;
					* {
						font-size: 1.2rem;
					}
					.wrap {
						width: calc(50% - 0.8rem);
					}
					span:not(.icon) {
					}
					.heading {
						margin-bottom: 0.6rem;
						line-height: 2;
					}
					.tel {
						margin-top: 0.4rem;
					}
					.underline {
						margin-bottom: 0;
					}
				}
				.main {
					margin-top: 9.6rem;
					form {
						.form_item {
							padding: 1.6rem 0;
							width: 100%;
							* {
								font-size: 1.6rem;
							}
							.heading {
								&.required {
									&:after {
									}
								}
							}
							.select_wrap {
								margin-top: 1.2rem;
								.subject_wrap {
									width: calc(100% - 4rem);
									select {
										width: 100%;
										option {
										}
									}
									&:after {
									}
								}
							}
							.input_wrap {
								margin-top: 1.2rem;
								width: 100%;
								input, textarea {
								}
								textarea {
									min-height: 16rem;
								}
							}
							&.last {
							}
						}
						.submit_wrap {
							.google_wrap {
								margin-top: 2.4rem;
								width: 100%;
								order: 1;
								.attention {
									a {
										
									}
								}
							}
							.wrap {
								margin-left: 0;
								width: 100%;
								.acceptance_wrap {
									margin-right: 0;
									.checkbox_wrap {
										margin-right: 0.6rem;
										input {
										}
										i {
											&:before,
											&:after {
											}
											&:before {
											}
											&:after {
											}
										}
										input:checked + i {
											&:before,
											&:after {
											}
										}
									}
									.caution {
										a {
										}
									}
								}
								.submit_button {
									margin-top: 2.4rem;
									width: 100%;
									font-size: 1.6rem;
									&:disabled {
									}
								}
							}
						}
					}
				}
			}
		}



	}

</style>
