import { useState, useEffect } from 'react'
import en_locale from '@/constants/locales/en.json'
/**
 *  This hook is used to load the current locale data from the constants/locales folder.
 */
export function useCurrentLocale() {
	const [localeData, setLocaleData] = useState<typeof en_locale | null>(null)
	useEffect(() => {
		async function loadLocaleData() {
			const currentLocaleKey = 'en' // TODO: Replace this with the current locale key
			try {
				const locale = await import(`../../constants/locales/${currentLocaleKey}.json`)
				setLocaleData(locale)
			} catch (error) {
				console.error(`Failed to load locale for ${currentLocaleKey}.`, error)
			}
		}

		loadLocaleData()
	}, [])

	/**
	 * If the locale data is not loaded yet, return the default locale data.
	 * which is the English locale.
	 */
	return localeData ?? en_locale
}
