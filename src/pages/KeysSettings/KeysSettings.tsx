import { cn } from '@/lib/utils.ts'
import { Input } from '@/components/shadcn/ui/input.tsx'
import { Label } from '@/components/shadcn/ui/label.tsx'
import { SettingCard } from '@/components/Settings/SettingCard.tsx'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { Dialog, DialogTrigger } from '@/components/shadcn/ui/dialog.tsx'
import { GeneratedKeysModal } from '@/components/Settings/GeneratedKeysModal.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

export function KeysSettings() {
	const locale = useCurrentLocale()
	return (
		<div>
			<h2 className={cn('text-xl font-medium')}>{locale.key.title}</h2>
			<p className={cn('mt-2 text-sm text-muted-foreground')}>{locale.key.description}</p>
			<main className={cn('mt-10 space-y-10')}>
				<SettingCard
					content={
						<>
							<div className={cn('mt-3 space-y-1')}>
								<Label htmlFor="token-name">{locale.key.access_token.label}</Label>
								<Input
									className={cn('max-w-sm')}
									id="token-name"
									placeholder={locale.key.access_token.placeholder}
									type="text"
								/>
							</div>
						</>
					}
					description={locale.key.access_token.description}
					footerAction={
						<div className={cn('flex w-full gap-x-5 md:justify-end')}>
							<Dialog>
								<DialogTrigger asChild>
									<Button className={cn('w-full md:w-auto')} type="button" variant="secondary">
										{locale.key.view_keys_button}
									</Button>
								</DialogTrigger>
								<GeneratedKeysModal title={locale.key.access_token.title} />
							</Dialog>
							<Button className={cn('w-full capitalize md:w-auto')}>{locale.common.create}</Button>
						</div>
					}
					title={locale.key.access_token.title}
				/>
				<SettingCard
					content={
						<div className={cn('mt-3 grid items-start gap-5 md:grid-cols-2')}>
							<div className={cn('w-full space-y-1 md:max-w-sm')}>
								<Label htmlFor="key-name">{locale.key.adb_keys.key.label}</Label>
								<Input
									id="key-name"
									placeholder={locale.key.adb_keys.key.placeholder}
									type="text"
								/>
							</div>
							<div className={cn('w-full space-y-1 md:max-w-sm')}>
								<Label htmlFor="device-name">{locale.key.adb_keys.devices.label}</Label>
								<Input id="device-name" placeholder={locale.key.adb_keys.devices.placeholder} />
							</div>
						</div>
					}
					description={locale.key.adb_keys.description}
					footerAction={
						<div className={cn('flex w-full gap-x-5 md:justify-end')}>
							<Dialog>
								<DialogTrigger asChild>
									<Button className={cn('w-full md:w-auto')} type="button" variant="secondary">
										{locale.key.view_keys_button}
									</Button>
								</DialogTrigger>
								<GeneratedKeysModal title={locale.key.adb_keys.title} />
							</Dialog>
							<Button className={cn('w-full capitalize md:w-auto')}>{locale.common.create}</Button>
						</div>
					}
					title={locale.key.adb_keys.title}
				/>
			</main>
		</div>
	)
}
