import { cn } from '@/lib/utils.ts'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu.tsx'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { BadgeHelpIcon, LogOutIcon, MoonIcon, MoreVerticalIcon, SunIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCurrentTheme } from '@/hooks/shared/useCurrentTheme.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'
import { THEME } from '@/constants/theme.ts'

export function MobileMenu() {
	const locale = useCurrentLocale()
	const { theme, updateTheme } = useCurrentTheme()
	function onThemeChange() {
		if (theme === THEME.LIGHT) updateTheme(THEME.DARK)
		else updateTheme(THEME.LIGHT)
	}
	const themeIcon =
		theme === THEME.LIGHT ? (
			<MoonIcon className={cn('h-5 w-5')} />
		) : (
			<SunIcon className={cn('h-5 w-5')} />
		)

	return (
		<div className={cn('inline-block sm:hidden')}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button aria-label="more" size="icon" type="button" variant="outline">
						<MoreVerticalIcon className={cn('h-5 w-5')} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Sections</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link to="#">{locale.common.devices}</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="#">{locale.common.groups}</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="#">{locale.common.settings}</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<ul className={cn('m-2 flex space-x-5')}>
						<li>
							<DropdownMenuItem asChild>
								<Button
									aria-label={`switch to ${theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT} theme`}
									size="icon"
									type="button"
									variant="outline"
									onClick={onThemeChange}
								>
									{themeIcon}
								</Button>
							</DropdownMenuItem>
						</li>
						<li>
							<DropdownMenuItem asChild>
								<Button aria-label="help center" size="icon" type="button" variant="outline">
									<BadgeHelpIcon className={cn('h-5 w-5')} />
								</Button>
							</DropdownMenuItem>
						</li>
						<li>
							<DropdownMenuItem asChild>
								<Button aria-label="log out" size="icon" type="button" variant="outline">
									<LogOutIcon className={cn('h-5 w-5')} />
								</Button>
							</DropdownMenuItem>
						</li>
					</ul>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
