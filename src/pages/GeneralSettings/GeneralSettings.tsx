import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/shadcn/ui/card.tsx'
import { cn } from '@/lib/utils.ts'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/shadcn/ui/select.tsx'
import { Input } from '@/components/shadcn/ui/input.tsx'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { SettingCard } from '@/components/Settings/SettingCard.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

export function GeneralSettings() {
	const currentLocale = useCurrentLocale()
	return (
		<div className={cn('w-full space-y-10')}>
			<SettingCard
				content={
					<Select>
						<SelectTrigger className="w-60">
							<SelectValue
								defaultValue="light"
								placeholder={currentLocale.settings.choose_language}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="english">{currentLocale.common.languages.english}</SelectItem>
							<SelectItem value="french">{currentLocale.common.languages.french}</SelectItem>
							<SelectItem value="spanish">{currentLocale.common.languages.spanish}</SelectItem>
						</SelectContent>
					</Select>
				}
				description={currentLocale.settings.language.description}
				footerAction={
					<Button className={cn('capitalize')} size="sm">
						{currentLocale.common.save}
					</Button>
				}
				helperText={currentLocale.settings.language.helper_text}
				title={currentLocale.settings.language.title}
			/>
			<SettingCard
				content={
					<Input
						className={cn('w-60')}
						placeholder={`${currentLocale.common.example}: M/d/yy h:mm:ss`}
						type="text"
					/>
				}
				description={currentLocale.settings.date_settings_description}
				footerAction={
					<Button className={cn('capitalize')} size="sm">
						{currentLocale.common.save}
					</Button>
				}
				helperText={
					<span>
						{currentLocale.settings.date_settings_message}{' '}
						<Button asChild className={cn('pl-0')} variant="link">
							<a
								href="https://day.js.org/docs/en/display/format"
								rel="noopener noreferrer"
								target="_blank"
							>
								{currentLocale.settings.date_settings_learn_more}
							</a>
						</Button>
					</span>
				}
				title={currentLocale.settings.date_format}
			/>
			<SettingCard
				content={
					<Input
						className={cn('w-60')}
						defaultValue=","
						placeholder={`${currentLocale.common.example}: ,`}
						type="text"
					/>
				}
				description={currentLocale.settings.email_description}
				footerAction={<Button size="sm">Save</Button>}
				helperText={currentLocale.settings.email_helper_text}
				title={currentLocale.settings.email_title}
			/>
			<Card className={cn('border-destructive')}>
				<CardHeader>
					<CardTitle className={cn('text-xl font-medium')}>
						{currentLocale.settings.reset_settings_heading}
					</CardTitle>
					<CardDescription>{currentLocale.settings.reset_settings_description}</CardDescription>
				</CardHeader>
				<CardFooter
					className={cn('flex justify-end border-t border-destructive bg-destructive/30 py-3')}
				>
					<Button size="sm" type="button" variant="destructive">
						{currentLocale.settings.reset_settings_button}
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
