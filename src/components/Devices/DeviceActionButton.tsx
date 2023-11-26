import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { Dialog } from '@/components/shadcn/ui/dialog.tsx'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { DeviceDetailsModal } from '@/components/Devices/DeviceDetailsModal.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

interface DeviceCardActionButtonsProps {
	isBusy: boolean
	isCurrentUsersDevice: boolean
	showOnFooter?: boolean
}
export function DeviceCardActionButtons({
	isBusy,
	isCurrentUsersDevice,
	showOnFooter,
}: DeviceCardActionButtonsProps) {
	const locale = useCurrentLocale()
	return (
		<div className={cn('space-x-5', showOnFooter ? 'flex sm:hidden' : 'hidden sm:flex')}>
			<Dialog>
				<DialogTrigger asChild>
					<Button className={cn('w-full capitalize')} variant="outline">
						{locale.common.details}
					</Button>
				</DialogTrigger>
				<DeviceDetailsModal />
			</Dialog>
			{isCurrentUsersDevice && (
				<Button className={cn('w-full capitalize')} variant="destructive">
					{locale.common.stop}
				</Button>
			)}
			{!isBusy && !isCurrentUsersDevice && (
				<Button className={cn(showOnFooter && 'w-full capitalize')}>{locale.common.use}</Button>
			)}
		</div>
	)
}
