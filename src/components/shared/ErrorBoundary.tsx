import { ReactNode } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { cn } from '@/lib/utils.ts'

interface ErrorBoundaryProps {
	children: ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
	return (
		<ReactErrorBoundary
			fallbackRender={({ error }) => (
				<div className={cn('')} role="alert">
					<p>Something went wrong:</p>
					<pre className={cn('text-red-700')}>{error.message}</pre>
				</div>
			)}
		>
			{children}
		</ReactErrorBoundary>
	)
}
