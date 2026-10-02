<template>
	
	<NuxtLink class="flex" :to="{ name: 'case-id', params: { id: data.slug } }">
		<div class="text grid_vw_2">
			<div class="wrap flex">
				<div class="title_wrap">
					<span class="title">{{ data.title.rendered }}</span>
					<span v-if="!isIndex" class="category">{{ data._embedded['wp:term'][0]?.[0]?.name }}</span>
				</div>
				<p class="description">{{ data.acf.description }}</p>
				<div v-if="data.acf.brands_source.formatted_value" class="brand_wrap flex">
					<span class="heading">Brands:</span>
					<span class="brand_list">{{ data.acf.brands_source.formatted_value.slice(0, 1).map(data => data.post_title).join(' / ')  + (data.acf.brands_source.formatted_value[2] ? ' / and more...' : '') }}</span>
				</div>
			</div>
		</div>
		<div class="image flex grid_vw_1">
			<div class="thumbnail_wrap">
				<div class="ratio">
					<img v-if="data._embedded['wp:featuredmedia']" alt="" :src="data._embedded['wp:featuredmedia'][0].source_url">
				</div>
			</div>
			<span class="read underline">More</span>
		</div>
	</NuxtLink>

</template>

<script>
export default {
	props: {
		data: Object,
		isIndex: Boolean
	},
}
</script>

<style lang="scss" scoped>

	a {
		position: relative;
		padding: 2rem 0;
		border-bottom: 1px solid rgba(39, 52, 63, 0.15);
		.wrap {
			padding-right: 8rem;
			.title_wrap {
				.title {
					display: block;
					font-size: 2rem;
					line-height: 1.5;
				}
				.category {
					display: inline-block;
					margin-top: 1.6rem;
					font-size: 1.4rem;
					line-height: 1.2;
				}
			}
			.description {
				margin-top: 1.6rem;
				font-size: 1.4rem;
				color: rgba(39, 52, 63, 0.6);
			}
			.brand_wrap {
				margin-top: 7rem;
				width: 100%;
				span {
					font-size: 1.4rem;
					line-height: 1.2;
				}
				.heading {
					margin-right: 2rem;
					width: calc((((100vw - 8rem) / 10) - (2rem * 9 / 10)));
				}
				.brand_list {
					width: calc(100% - (((100vw - 8rem) / 10) - (2rem * 9 / 10)) - 2rem);
				}
			}
		}
		.thumbnail_wrap {
			padding-bottom: 5rem;
			width: 65%;
			.ratio {
				padding-top: 100%;
				background-image: url('/no_image.jpg');
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				img {
					transition: transform 0.4s ease;
				}
			}
		}
		.read {

		}
		&:hover {
			&:before {
				content: '';
				position: absolute;
				top: 3.1rem;
				left: -3rem;
				display: block;
				margin: auto;
				width: 0.6rem;
				height: 0.6rem;
				background-color: #27343F;
				border-radius: 50%;
			}
			.thumbnail_wrap {
				img {
					transform: scale(1.06);
				}
			}
		}
		@media only screen and (max-width: 980px) {
			padding: 1.6rem 0;
			.wrap {
				padding-right: 0;
				width: 100%;
				.title_wrap {
					position: absolute;
					top: 1.6rem;
					left: 0;
					width: calc(((100vw - 1.6rem * 9) / 8) * 5 + (1.6rem * 4));
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
					}
				}
				.description {
					margin-top: calc(((100vw - 1.6rem * 9) / 8) * 3 + (1.6rem * 3));
					width: 100%;
					font-size: 1.2rem;
				}
				.brand_wrap {
					margin-top: 1.6rem;
					width: 100%;
					span {
						font-size: 1.2rem;
						line-height: 1.2;
					}
					.heading {
						margin-right: auto;
						width: calc(((100vw - 1.6rem * 9) / 8) * 2 + 1.6rem);
					}
					.brand_list {
						width: calc(((100vw - 1.6rem * 9) / 8) * 6 + (1.6rem * 5));
					}
				}
			}
			.image {
				width: 100%;
			}
			.thumbnail_wrap {
				position: absolute;
				top: 1.6rem;
				right: 0;
				padding-bottom: 0;
				width: calc(((100vw - 1.6rem * 9) / 8) * 3 + (1.6rem * 2));
				.ratio {
					img {
					}
				}
			}
			.read {
				margin-top: 1.6rem;
				margin-left: auto;
			}
			&:hover {
				&:before {
					content: none;
				}
				.thumbnail_wrap {
					img {
						transform: scale(1);
					}
				}
			}
		}
	}

</style>
