<template>
	
	<NuxtLink class="flex" :to="{ name: 'press-id', params: { id: data.slug } }">
		<span class="data flex grid_vw_1">
			<span class="category">{{ data._embedded['wp:term'][0].map(term => term.name).join(', ') }}</span>
			<span class="date">{{ $dateFns.format(data.date, 'yyyy.MM.dd') }}</span>
		</span>
		<span class="flex text grid_vw_2">
			<span class="text_wrap flex">
				<span class="title_wrap">
					<span class="title">{{ data.title.rendered }}</span>
					<!-- <span class="category">{{ data._embedded['wp:term'][0].map(term => term.name).join(', ') }}</span> -->
				</span>
				<span class="introduction">{{ data.acf.introduction }}</span>
			</span>
		</span>
		<span class="flex image grid_vw_1">
			<span class="thumbnail_wrap">
				<span class="ratio">
					<img v-if="data._embedded['wp:featuredmedia']" alt="" :src="data._embedded['wp:featuredmedia'][0].source_url">
				</span>
			</span>
			<span class="read underline">Read</span>
		</span>
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
		.data {
			span {
				display: block;
				width: 100%;
			}
			.date {
				margin-top: auto;
				font-size: 1.4rem;
				color: rgba(39, 52, 63, 0.6);
			}
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
				display: block;
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
			.data {
				position: absolute;
				top: 1.6rem;
				left: 0;
				align-items: flex-start;
				width: calc(((100vw - 1.6rem * 9) / 8) * 5 + (1.6rem * 4));
				span {
					display: inline-block;
					width: auto;
				}
				.date {
					margin-top: 0;
					font-size: 1.2rem;
				}
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
