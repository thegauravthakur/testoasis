import { cn } from '@/lib/utils.ts'
import { DeviceCardActionButtons } from '@/components/Devices/DeviceActionButton.tsx'
import { TextHeader } from '@/components/shared/TextHeader.tsx'
import { Text } from '@/components/shared/Text.tsx'

interface DeviceCardProps {
	name: string
	os: string
	busyBy?: string
}

export function DeviceCard({ name, os, busyBy }: DeviceCardProps) {
	const isBusy = !!busyBy
	const isCurrentUsersDevice = busyBy === 'Gaurav2.Thakur'
	return (
		<div className={cn('space-y-5 rounded-xl border p-5 shadow-sm')}>
			<div className={cn('flex items-center justify-between gap-x-5', '')}>
				<div className={cn('flex items-center gap-x-5')}>
					<img
						alt={name}
						className={cn('h-16 w-12 object-contain')} // 4/3 aspect ratio
						loading="lazy"
						src="https://i.ibb.co/CJ5gBVF/apple-iphone-13.png"
					/>
					<div className="flex-1 self-start">
						<TextHeader as="h4">{name}</TextHeader>
						<Text as="p">{os}</Text>
					</div>
				</div>
				<DeviceCardActionButtons isBusy={isBusy} isCurrentUsersDevice={isCurrentUsersDevice} />
			</div>
			<DeviceCardActionButtons
				showOnFooter
				isBusy={isBusy}
				isCurrentUsersDevice={isCurrentUsersDevice}
			/>
		</div>
	)
}
