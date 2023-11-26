import { useEffect, useState } from 'react'
import { LocalStorageService } from '@/utils/localstorageHelper.ts'
import { THEME } from '@/constants/theme.ts'

export function useCurrentTheme() {
	const isDarkTheme = document.documentElement.classList.contains(THEME.DARK)
	const [theme, setTheme] = useState<'light' | 'dark'>(isDarkTheme ? THEME.DARK : THEME.LIGHT)

	/**
	 * This will make sure to update the theme when the user changes his system theme preference
	 */
	useEffect(() => {
		function onThemeChange(event: MediaQueryListEvent) {
			const rootElement = document.documentElement
			const newColorScheme = event.matches ? THEME.DARK : THEME.LIGHT
			rootElement.classList.remove(newColorScheme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
			rootElement.classList.add(newColorScheme)
			LocalStorageService.set('theme', newColorScheme)
		}
		const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
		mediaQueryList.addEventListener('change', onThemeChange)
		return () => {
			mediaQueryList.removeEventListener('change', onThemeChange)
		}
	}, [])

	function updateTheme(theme: 'light' | 'dark') {
		const rootElement = document.documentElement
		setTheme(theme)
		rootElement.classList.remove(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
		rootElement.classList.add(theme)
		LocalStorageService.set('theme', theme)
	}

	return { theme, updateTheme }
}
