<template>

	<NuxtLink class="flex grid_vw_1" :to="{ name: 'journal-id', params: { id: data.slug } }">
		<div class="thumbnail">
			<img alt="" :src="data.thumbnail">
		</div>
		<div class="text_wrap">
			<span class="title">{{ data.title }}</span>
			<p class="description">{{ data.description }}</p>
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
		.thumbnail {
			width: 100%;
			.ratio {

			}
		}
		.text_wrap {
			margin-top: 2rem;
			padding-right: 2rem;
			.title {
				display: block;
				line-height: 1.5;
			}
			.description {
				display: -webkit-box;
				margin-top: 1.2rem;
				font-size: 1.4rem;
				line-height: 1.75;
				color: rgba(39, 52, 63, 0.6);
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				word-break: break-all;
				overflow: hidden;
			}
		}
		@media only screen and (max-width: 980px) {
			.text_wrap {
				margin-top: 1.6rem;
				.title {
					display: block;
					line-height: 1.5;
				}
				.description {
					font-size: 1.2rem;
				}
			}
		}
	}

</style>
