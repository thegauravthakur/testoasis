import { useEffect, useState } from 'react'

/**
 * A hook that returns a boolean value based on the media query.
 * Source: https://github.com/antonioru/beautiful-react-hooks/blob/master/src/useMediaQuery.ts
 */
export function useMediaQuery(mediaQuery: string) {
	const [isVerified, setIsVerified] = useState(window.matchMedia(mediaQuery).matches)

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQuery)
		const documentChangeHandler = () => {
			setIsVerified(mediaQueryList.matches)
		}

		try {
			mediaQueryList.addEventListener('change', documentChangeHandler)
		} catch (e) {
			// Safari isn't supporting mediaQueryList.addEventListener
			mediaQueryList.addListener(documentChangeHandler)
		}

		documentChangeHandler()
		return () => {
			try {
				mediaQueryList.removeEventListener('change', documentChangeHandler)
			} catch (e) {
				// Safari isn't supporting mediaQueryList.removeEventListener
				mediaQueryList.removeListener(documentChangeHandler)
			}
		}
	}, [mediaQuery])

	return isVerified
}
