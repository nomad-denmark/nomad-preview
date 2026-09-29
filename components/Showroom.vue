<template>

	<section class="showroom l4 r4">
		<div class="showroom_title">
			<div class="title wrap flex">
				<span class="heading">{{ showroom.season }}</span>
				<h2 class="grid_vw_3">Showroom</h2>
			</div>
			<div class="wrap flex">
				<div class="artist_wrap grid_vw_1">
					<div class="artist flex flex-start align-center" v-for="artist in showroom.artists">
						<span class="">{{ artist.label }}</span>
						<a class="icon outside" target="_blank" :href="artist.link">{{ artist.name }}<i></i></a>
					</div>
				</div>
				<div class="grid_vw_3 flex">
					<p class="introduction grid_vw_2">お取引企業さま、プレス関係者の皆さま、法人さまにご利用いただける事前予約制のショールームです。スタイリストが創り上げる美しい空間演出は、訪れるたびに新しいインスピレーションを提供します。</p>
					<div class="desktop">
						<NuxtLink class="icon" to="/showroom">Showroom<i></i></NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div class="gallery">
			<div class="wrap flex-start align-center">
				<div class="img_wrap" :class="'img_' + index" v-for="image, index in showroom.key_visuals">
					<img alt="" :src="image">
				</div>
			</div>
			<div v-if="isSmart" class="wrap flex-start align-center">
				<div class="img_wrap" :class="'img_' + index" v-for="image, index in showroom.key_visuals">
					<img alt="" :src="image">
				</div>
			</div>
		</div>
		<div class="link_wrap smart">
			<NuxtLink class="icon" to="/showroom">Showroom<i></i></NuxtLink>
		</div>
	</section>
	
</template>

<script>
export default {
	name: 'Showroom',
	data() {
		return {
			showroom: [],
			isSmart: false
		}
	},
	async fetch() {
		try {
			this.showroom = await this.$wordpress.getPosts('settings', {
				params: {

				}
			})
			.then((res) => {
				return res.data.showroom
			})
		} catch(error) {
			console.log(error)
		}
	},
	mounted() {
		this.isSmart = window.innerWidth < 980
		const self = this
		window.addEventListener('resize', () => {
			self.isSmart = window.innerWidth < 980
		})
	},
}
</script>

<style lang="scss" scoped>

	.showroom {
		.showroom_title {
			padding-top: 2rem;
			border-top: 1px solid rgba(39, 52, 63, 0.15);
			.title {
				margin-bottom: 9.6rem;
			}
			.artist_wrap {
				.artist {
					span {
						display: inline-block;
						margin-right: 0.8rem;
						// width: 4.2rem;
						font-size: 1.2rem;
						line-height: 1.5;
						color: rgba(39, 52, 63, 0.6);
					}
					a {
						display: inline-block;
						font-size: 1.2rem;
						line-height: 1.5;
					}
					&:not(:first-of-type) {
						margin-top: 0.6rem;
					}
				}
			}
			.grid_vw_3 {
				.introduction {
					line-height: 2;
				}
			}
		}
		.gallery {
			position: relative;
			margin: 12rem auto 10.8rem;
			height: 69rem;
			.img_wrap {
				position: absolute;
				width: 30rem;
				// overflow: hidden;
				img {
					width: 100%;
					height: 100%;
					opacity: 0;
					object-fit: cover;
					animation-duration: 8.3s;
					animation-timing-function: ease;
					animation-iteration-count: infinite;
					@keyframes showroom_gallery_1 {
						0% {
							transform: translateY(10%);
							opacity: 0;
						}
						5% {
							transform: translateY(10%);
							opacity: 0;
						}
						7% {
							transform: translateY(0%);
							opacity: 1;
						}
						48% {
							transform: translateY(0%);
							opacity: 1;
						}
						50% {
							transform: translateY(-10%);
							opacity: 0;
						}
						100% {
							transform: translateY(-10%);
							opacity: 0;
						}
					}
					@keyframes showroom_gallery_2 {
						0% {
							transform: translateY(10%);
							opacity: 0;
						}
						55% {
							transform: translateY(10%);
							opacity: 0;
						}
						57% {
							transform: translateY(0%);
							opacity: 1;
						}
						98% {
							transform: translateY(0%);
							opacity: 1;
						}
						100% {
							transform: translateY(-10%);
							opacity: 0;
						}
					}
				}
				&.img_0 {
					top: 12rem;
					left: 0;
					height: 40rem;
					img {
						animation-name: showroom_gallery_1;
						animation-delay: 0s;
					}
				}
				&.img_1 {
					top: 0;
					left: 44rem;
					height: 30rem;
					img {
						animation-name: showroom_gallery_1;
						animation-delay: 0.08s;
					}
				}
				&.img_2 {
					top: 4rem;
					right: 0;
					height: 40rem;
					img {
						animation-name: showroom_gallery_1;
						animation-delay: 0.16s;
					}
				}
				&.img_3 {
					right: 44rem;
					bottom: 1.2rem;
					height: 30rem;
					img {
						animation-name: showroom_gallery_1;
						animation-delay: 0.24s;
					}
				}
				&.img_4 {
					top: 7rem;
					left: 0;
					height: 40rem;
					img {
						animation-name: showroom_gallery_2;
						animation-delay: 0s;
					}
				}
				&.img_5 {
					top: 0;
					right: 44rem;
					height: 20rem;
					img {
						animation-name: showroom_gallery_2;
						animation-delay: 0.08s;
					}
				}
				&.img_6 {
					top: 15rem;
					right: 0;
					height: 30rem;
					img {
						animation-name: showroom_gallery_2;
						animation-delay: 0.16s;
					}
				}
				&.img_7 {
					left: 44rem;
					bottom: 0;
					height: 40rem;
					img {
						animation-name: showroom_gallery_2;
						animation-delay: 0.24s;
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			.showroom_title {
				padding-top: 1.6rem;
				.title {
					margin-bottom: 4.8rem;
					h2 {
						margin-top: 2rem;
						width: 100%;
					}
				}
				.artist_wrap {
					margin-top: 2rem;
					order: 1;
					.artist {
						span {
						}
						a {
						}
						&:not(:first-of-type) {
						}
					}
				}
				.grid_vw_3 {
					.introduction {
					}
				}
			}
			.gallery {
				position: relative;
				display: flex;
				justify-content: flex-start;
				flex-wrap: nowrap;
				margin: 4.8rem -1.6rem;
				height: fit-content;
				overflow: hidden;
				.wrap {
					display: flex;
					flex-wrap: nowrap;
					animation: endless 100s linear -50s infinite forwards;
					&:nth-of-type(even) {
						animation: endless2 100s linear 0s infinite forwards;
					}			
				}
				.img_wrap {
					position: relative;
					margin-right: 1.6rem;
					width: 15rem;
					img {
						width: 100%;
						height: 100%;
						opacity: 1;
						object-fit: cover;
						animation: none;
					}
					&.img_0,
					&.img_1,
					&.img_2,
					&.img_3,
					&.img_4,
					&.img_5,
					&.img_6,
					&.img_7 {
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						height: auto;
						img {
						}
					}
				}
			}
			.link_wrap {
				text-align: right;
			}
		}
	}

</style>
