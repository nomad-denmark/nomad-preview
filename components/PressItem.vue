<template>
	
	<NuxtLink class="flex" :to="{ name: 'press-id', params: { id: data.slug } }">
		<span class="date grid_vw_1">{{ $dateFns.format(data.date, 'yyyy.MM.dd') }}</span>
		<div class="flex text grid_vw_2">
			<div class="text_wrap flex">
				<div class="title_wrap">
					<span class="title">{{ data.title.rendered }}</span>
					<span class="category">{{ data._embedded['wp:term'][0].map(term => term.name).join(', ') }}</span>
				</div>
				<p class="introduction">{{ data.introduction }}</p>
			</div>
		</div>
		<div class="flex image grid_vw_1">
			<div class="thumbnail_wrap">
				<div class="ratio">
					<img v-if="data._embedded['wp:featuredmedia']" alt="" :src="data._embedded['wp:featuredmedia'][0].source_url">
				</div>
			</div>
			<span class="read underline">Read</span>
		</div>
	</NuxtLink>

</template>

<script>
export default {
	props: {
		data: Object
	},
}
</script>

<style lang="scss" scoped>

	a {
		padding: 2rem 0;
		border-bottom: 1px solid rgba(39, 52, 63, 0.15);
		.date {
		}
		.text_wrap {
			padding-right: 8rem;
			.title_wrap {
				.title {
					display: -webkit-box;
					font-size: 2rem;
					line-height: 1.5;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-all;
					overflow: hidden;
				}
				.category {
					display: inline-block;
					margin-top: 1.6rem;
					font-size: 1.4rem;
					line-height: 1.2;
				}
			}
			.introduction {
				display: -webkit-box;
				margin-top: auto;
				font-size: 1.4rem;
				color: rgba(39, 52, 63, 0.6);
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				word-break: break-all;
				overflow: hidden;
			}
		}
		.thumbnail_wrap {
			width: 65%;
			.ratio {
				padding-top: 125%;
				background-image: url('/no_image.jpg');
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
			}
		}
		.read {

		}
		@media only screen and (max-width: 980px) {
			position: relative;
			padding: 1.6rem 0;
			.date {
				position: absolute;
				top: 1.6rem;
				left: 0;
				right: 0;
			}
			.text {
				width: calc(((100vw - 1.6rem * 9) / 8) * 5 + (1.6rem * 4));
			}
			.image {
				width: calc(((100vw - 1.6rem * 9) / 8) * 3 + (1.6rem * 2));
			}
			.text_wrap {
				margin-top: 4.8rem;
				padding-right: 0.8rem;
				.title_wrap {
					.title {
						font-size: 1.8rem;
						-webkit-line-clamp: 3;
					}
					.category {
						font-size: 1.4rem;
					}
				}
				.introduction {
					margin-top: 6rem;
					font-size: 1.2rem;
				}
			}
			.thumbnail_wrap {
				width: 100%;
				.ratio {
				}
			}
			.read {
				margin-top: auto;
				margin-left: auto;
			}
		}
	}

</style>
