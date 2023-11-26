function getSafeEndpoint(endpoint: string) {
	return endpoint.startsWith('/') ? endpoint : `/${endpoint}`
}

function getSafeHost(host: string) {
	return host.endsWith('/') ? host.slice(0, -1) : host
}

export async function fetchHelper(endpoint: string, options: RequestInit = {}) {
	const host = import.meta.env['VITE_BACKEND_HOST']
	if (!host)
		throw new Error('Backend host (`VITE_BACKEND_HOST`) is not defined in the current environment')
	const uri = `${getSafeHost(import.meta.env['VITE_BACKEND_HOST'])}${getSafeEndpoint(endpoint)}`
	const headers = new Headers(options.headers)
	// If the body is an object, stringify it and set the Content-Type header
	if (options.body && typeof options.body === 'object') {
		headers.set('Content-Type', 'application/json')
	}
	const fetchOptions = { ...options, headers }
	const response = await fetch(uri, fetchOptions)
	const result = await response.json()
	if (!response.ok) throw result
	return result
}
