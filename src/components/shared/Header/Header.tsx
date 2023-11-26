import { generatePath, Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils.ts'
import { BadgeHelpIcon, LogOutIcon, SunIcon, MoonIcon } from 'lucide-react'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { useCurrentTheme } from '@/hooks/shared/useCurrentTheme.tsx'
import { MobileMenu } from '@/components/shared/Header/components/MobileMenu.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'
import { PAGE_PATH } from '@/constants/path.ts'
import { THEME } from '@/constants/theme.ts'

export function Header() {
	const locale = useCurrentLocale()
	const { theme, updateTheme } = useCurrentTheme()
	const { pathname } = useLocation()
	const tabs = [locale.common.devices, locale.common.groups, locale.common.settings]

	function onThemeChange() {
		if (theme === THEME.LIGHT) updateTheme(THEME.DARK)
		else updateTheme(THEME.LIGHT)
	}

	const activeTabMap = {
		[PAGE_PATH.DEVICES]: locale.common.devices,
		[PAGE_PATH.GROUPS]: locale.common.groups,
		[PAGE_PATH.SETTINGS]: locale.common.settings,
	}

	const activeTab = activeTabMap[pathname] ?? 'Devices' // todo: update default condition later

	return (
		<header className={cn('border-b')}>
			<div
				className={cn(
					'flex items-center justify-between bg-background px-5 py-3',
					'mx-auto max-w-screen-2xl',
				)}
			>
				<Link to={PAGE_PATH.DEVICES}>
					<h1 className={cn('font-bold text-foreground/90')}>{locale.common.brand_name}</h1>
				</Link>
				<nav className={cn('hidden sm:inline-block')}>
					<ul
						className={cn(
							'flex space-x-5 text-sm font-medium text-foreground/60 hover:text-foreground/80',
						)}
					>
						{tabs.map(tab => (
							<li key={tab} className={cn(activeTab === tab && 'text-foreground/90')}>
								<Link
									aria-current={activeTab === tab ? 'page' : undefined}
									to={generatePath(`${PAGE_PATH.DASHBOARD}/:active_tab`, {
										active_tab: tab?.toLowerCase(),
									})}
								>
									{tab}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<ul className={cn('hidden space-x-5 sm:flex')}>
					<li>
						<Button
							aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
							size="icon"
							type="button"
							variant="outline"
							onClick={onThemeChange}
						>
							{theme === THEME.LIGHT ? (
								<MoonIcon className={cn('h-5 w-5')} />
							) : (
								<SunIcon className={cn('h-5 w-5')} />
							)}
						</Button>
					</li>
					<li>
						<Button aria-label="help center" size="icon" type="button" variant="outline">
							<BadgeHelpIcon className={cn('h-5 w-5')} />
						</Button>
					</li>
					<li>
						<Button aria-label="log out" size="icon" type="button" variant="outline">
							<LogOutIcon className={cn('h-5 w-5')} />
						</Button>
					</li>
				</ul>
				<MobileMenu />
			</div>
		</header>
	)
}
