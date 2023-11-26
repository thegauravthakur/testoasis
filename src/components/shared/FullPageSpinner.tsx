import { cn } from '@/lib/utils.ts'

export function FullPageSpinner() {
	return (
		<div
			aria-busy="true"
			aria-live="polite"
			aria-valuetext="Loading..."
			className={cn('fixed left-0 top-0 flex h-screen w-screen items-center justify-center')}
			role="progressbar"
		>
			<div
				className={cn(
					'h-20 w-20 animate-spin rounded-full border-y-2 border-gray-900 dark:border-gray-200',
				)}
			/>
		</div>
	)
}
