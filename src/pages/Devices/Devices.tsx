import { cn } from '@/lib/utils.ts'
import { InfoCard } from '@/components/Devices/InfoCard.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'
import { DeviceCard } from '@/components/Devices/DeviceCard.tsx'
import { SearchFilterSection } from '@/components/Devices/SearchFilterSection.tsx'
import { translate } from '@/utils/localizationHelper.ts'
import { TextHeader } from '@/components/shared/TextHeader.tsx'

export function Devices() {
	const locale = useCurrentLocale()
	return (
		<div className={cn('mx-5 mt-10')}>
			<div className={cn('grid grid-cols-2 gap-5 md:grid-cols-4')}>
				<InfoCard
					description={translate(locale.devices.count_overview, {
						android_count: '10',
						iOS_count: '7',
					})}
					subTitle="17"
					title={locale.devices.total_devices}
				/>
				<InfoCard
					description={translate(locale.devices.count_overview, {
						android_count: '10',
						iOS_count: '7',
					})}
					subTitle="10"
					title={locale.devices.available_devices}
				/>
				<InfoCard description="No devices" subTitle="0" title={locale.devices.busy_devices} />
				<InfoCard description={locale.devices.no_devices} subTitle="0" title="Gaurav2.Thakur" />
			</div>
			<main className={cn('mt-10')}>
				<SearchFilterSection />
				<TextHeader as="h2" className={cn('my-5 font-semibold')}>
					{locale.devices.devices_using_description}
				</TextHeader>
				<div className={cn('grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3')}>
					<DeviceCard busyBy="Gaurav2.Thakur" name="Samsung Galaxy S10" os="Android 10" />
					<DeviceCard busyBy="Gaurav2.Thakur" name="iPhone 12 Pro Max" os="iOS 14.5" />
					<DeviceCard busyBy="Gaurav2.Thakur" name="Oppo Reno 5 Pro" os="Android 11" />
					<DeviceCard busyBy="Gaurav2.Thakur" name="Oppo Reno 5 Pro" os="Android 11" />
					<DeviceCard busyBy="Gaurav2.Thakur" name="Oppo Reno 5 Pro" os="Android 11" />
					<DeviceCard busyBy="Gaurav2.Thakur" name="OnePlus 8 Pro" os="Android 11" />
				</div>
				<TextHeader as="h2" className={cn('my-5 font-semibold')}>
					{translate(locale.devices.available_device_description, {
						device_type: locale.common.android,
					})}
				</TextHeader>
				<div className={cn('grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3')}>
					<DeviceCard name="Samsung Galaxy S10" os="Android 10" />
					<DeviceCard name="Samsung Galaxy S10" os="Android 10" />
					<DeviceCard name="OnePlus 8 Pro" os="Android 11" />
					<DeviceCard name="Samsung Galaxy S10" os="Android 10" />
					<DeviceCard name="Oppo Reno 5 Pro" os="Android 11" />
					<DeviceCard name="Samsung Galaxy S9" os="Android 10" />
				</div>
				<TextHeader as="h2" className={cn('my-5 font-semibold')}>
					{translate(locale.devices.available_device_description, {
						device_type: locale.common.ios,
					})}
				</TextHeader>
				<div className={cn('grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3')}>
					<DeviceCard name="iPhone 12 Pro Max" os="iOS 14.5" />
					<DeviceCard name="iPhone Mini" os="iOS 12.9" />
					<DeviceCard name="iPhone 12" os="iOS 11.2" />
					<DeviceCard name="iPhone 12" os="iOS 11.2" />
					<DeviceCard name="iPhone 11" os="iOS 10.2" />
					<DeviceCard name="iPhone 12" os="iOS 11.2" />
				</div>
			</main>
		</div>
	)
}
