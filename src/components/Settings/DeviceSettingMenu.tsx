import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { Link } from 'react-router-dom'
import { PAGE_PATH } from '@/constants/path.ts'
import { useMediaQuery } from '@/hooks/shared/useMediaQuery.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

/**
 * A menu component that is used to display available setting options.
 * It is being used in the settings page (/dashboard/settings).
 */
export function DeviceSettingMenu() {
	const isLg = useMediaQuery(`(min-width: 960px)`)
	const currentLocale = useCurrentLocale()
	return (
		<ul className={cn('')}>
			<li>
				<Button
					asChild
					className={cn('w-full justify-start font-medium', !isLg && 'border-0')}
					size={isLg ? 'sm' : 'lg'}
					variant={isLg ? 'ghost' : 'outline'}
				>
					<Link className={cn('w-full justify-start capitalize')} to={PAGE_PATH.GENERAL_SETTINGS}>
						{currentLocale.common.general}
					</Link>
				</Button>
			</li>
			<li>
				<Button
					asChild
					className={cn('w-full justify-start font-normal', !isLg && 'border-0 border-t')}
					size={isLg ? 'sm' : 'lg'}
					variant={isLg ? 'ghost' : 'outline'}
				>
					<Link className={cn('w-full justify-start capitalize')} to={PAGE_PATH.KEYS_SETTINGS}>
						{currentLocale.common.keys}
					</Link>
				</Button>
			</li>
			<li>
				<Button
					asChild
					className={cn('w-full justify-start font-normal', !isLg && 'border-0 border-t')}
					size={isLg ? 'sm' : 'lg'}
					variant={isLg ? 'ghost' : 'outline'}
				>
					<Link className={cn('w-full justify-start capitalize')} to={PAGE_PATH.GROUPS_SETTINGS}>
						{currentLocale.common.groups}
					</Link>
				</Button>
			</li>
		</ul>
	)
}
