export async function onRequestGet(context) {
	const { request, env, params } = context

	const wpUrl = new URL(`https://wordpress.nomadinc.jp/wp-json/wp/v2/${ params.path }`);
	// wpUrl.searchParams.set("status", "publish,draft");
	// wpUrl.searchParams.append('status[]', 'publish');
	// wpUrl.searchParams.append('status[]', 'draft');
	// wpUrl.searchParams.set("context", "edit");
	

	const requestUrl = new URL(request.url)
	requestUrl.searchParams.forEach((value, key) => {
		wpUrl.searchParams.append(key, value);
	});

	const auth = btoa(`${ env.WP_USERNAME }:${ env.WP_APPLICATION_PASSWORD }`);

	const response = await fetch(wpUrl, {
		headers: {
			Authorization: `Basic ${ auth }`,
		},
	});

	return new Response(response.body, {
		status: response.status,
		headers: {
			"Content-Type":
			response.headers.get("Content-Type") || "application/json",
		},
	});
}
