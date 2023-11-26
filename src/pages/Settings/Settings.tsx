import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { PAGE_PATH } from '@/constants/path.ts'
import { useMediaQuery } from '@/hooks/shared/useMediaQuery.tsx'
import { GeneralSettings } from '@/pages/GeneralSettings'
import { ArrowLeftIcon } from 'lucide-react'
import { DeviceSettingMenu } from '@/components/Settings/DeviceSettingMenu.tsx'

export function Settings() {
	const isSettingsOnlyRoute = useMatch(PAGE_PATH.SETTINGS)
	// If the current route is a /dashboard/settings and no value for outlet is provided, then render the GeneralSettings component
	// as the default value for outlet. Otherwise, render the Outlet component.
	const isSubSettingsRoute = useMatch(PAGE_PATH.SETTINGS + '/:outlet')
	const isLg = useMediaQuery(`(min-width: 960px)`)
	const navigate = useNavigate()

	return (
		<div className={cn('')}>
			<div className={cn('pb-1')}>
				<h1 className={cn('m-5 my-10 text-2xl')}>Settings</h1>
				{/* Used position absolute to make the line stretch to the full width of the parent */}
				{/* as the parent has width set to the children */}
				<div className={cn('absolute inset-x-0 h-1 w-full border-b')}></div>
			</div>
			<div className={cn('m-10 flex gap-10', !isLg && 'm-0 flex-col')}>
				<nav className={cn('w-60', !isLg && 'w-full')}>
					{isSubSettingsRoute && !isLg && (
						<ul>
							<li>
								<Button
									aria-label="go back to main settings page"
									className={cn('w-full justify-start gap-x-2 border-0 border-b px-5 font-bold')}
									size={isLg ? 'sm' : 'lg'}
									variant={isLg ? 'ghost' : 'outline'}
									onClick={() => {
										navigate(PAGE_PATH.SETTINGS)
									}}
								>
									<ArrowLeftIcon size={22} />
									Settings
								</Button>
							</li>
						</ul>
					)}
					{(!isSubSettingsRoute || isLg) && <DeviceSettingMenu />}
				</nav>
				<div className={cn(!isLg && 'mx-5 mb-5 md:mx-10', 'flex-1')}>
					{isLg && isSettingsOnlyRoute ? <GeneralSettings /> : <Outlet />}
				</div>
			</div>
		</div>
	)
}
