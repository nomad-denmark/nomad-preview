<template>
	
	<div class="">
	<!-- <div class="scroll-wrapper"> -->
		
		<Header></Header>
		<!-- <div class="scroll-container" data-scroll-container> -->
			<Nuxt></Nuxt>
		<!-- </div> -->
		
	</div>

</template>


<script>

import Header from '~/components/Header'

export default {
	components: {
		Header,
	},
}

</script>
