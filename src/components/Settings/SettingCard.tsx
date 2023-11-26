import { ReactNode } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/shadcn/ui/card.tsx'
import { cn } from '@/lib/utils.ts'

interface SettingCardProps {
	title: string
	description: string
	content: ReactNode
	helperText?: string | ReactNode
	footerAction: ReactNode
}

/**
 * A card component that is used to display settings.
 * It is being used in the settings page (/dashboard/settings).
 */
export function SettingCard({
	content,
	helperText,
	title,
	description,
	footerAction,
}: SettingCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className={cn('text-xl font-medium')}>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{content}</CardContent>
			<CardFooter className={cn('flex justify-between gap-x-5 border-t py-3')}>
				{!!helperText && <p className={cn('text-sm text-primary/60')}>{helperText}</p>}
				{footerAction}
			</CardFooter>
		</Card>
	)
}
