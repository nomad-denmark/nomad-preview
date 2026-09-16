<template>

	<div class="scroll-wrapper">

		<Header></Header>
		<div>
			<Nuxt></Nuxt>
			<Footer></Footer>
		</div>
		
	</div>
	
	

</template>


<script>

import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
	components: {
		Header,
		Footer
	},
}



</script>
