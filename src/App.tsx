import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/shadcn/ui/toaster.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/constants/routes'
import { useEffect } from 'react'
import { ErrorBoundary } from '@/components/shared/ErrorBoundary.tsx'

const queryClient = new QueryClient()

if (import.meta.hot) {
	import.meta.hot.dispose(() => router.dispose())
}

export function App() {
	// Remove the initial static spinner when the app is loaded
	useEffect(() => {
		const spinner = document.querySelector('#loader')
		if (spinner) spinner.remove()
	}, [])

	return (
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster />
			</QueryClientProvider>
		</ErrorBoundary>
	)
}
