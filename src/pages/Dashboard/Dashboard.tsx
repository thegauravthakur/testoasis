import { Outlet } from 'react-router-dom'
import { Header } from '@/components/shared/Header/Header.tsx'
import { cn } from '@/lib/utils.ts'

export function Dashboard() {
	return (
		<>
			<Header />
			<div className={cn('mx-auto max-w-screen-2xl')}>
				<Outlet />
			</div>
		</>
	)
}
