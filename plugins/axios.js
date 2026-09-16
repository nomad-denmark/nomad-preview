export default function ({ $axios }, inject) {
	// const auth = Buffer.from(`${ process.env.WP_USERNAME }:${ process.env.WP_APPLICATION_PASSWORD }`).toString('base64');
	const baseURL = (process.env.NODE_ENV === 'production') ? '/wordpress/' : 'https://wordpress.nomadinc.jp/wp-json/wp/v2/' ;
	const wordpress = $axios.create({
		baseURL: baseURL,
		// headers: {
    //   'Authorization': `Basic ${ auth }`
    // },
		// auth: {
		// 	'username': process.env.WP_USERNAME,
		// 	'password': process.env.WP_APPLICATION_PASSWORD,
		// },
	})

	if (process.env.NODE_ENV !== 'production') {
		wordpress.defaults.auth = {
			'username': process.env.WP_USERNAME,
			'password': process.env.WP_APPLICATION_PASSWORD,
		}
	}

	wordpress.getPosts = (target, param = {}) => {
		return wordpress.get(target, {
			params: {
				'status': ['publish', 'draft'],
				'context': 'edit',
				...param.params,
			},
		})
	}
	
	inject('wordpress', wordpress)
}
