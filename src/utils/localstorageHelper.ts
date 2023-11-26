export const LocalStorageService = {
	get(key: string) {
		return localStorage.getItem(key)
	},
	set(key: string, value: string) {
		localStorage.setItem(key, value)
	},
	clear() {
		localStorage.clear()
	},
}
