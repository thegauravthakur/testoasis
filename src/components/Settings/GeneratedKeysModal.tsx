import { DialogContent, DialogHeader, DialogTitle } from '@/components/shadcn/ui/dialog.tsx'
import { cn } from '@/lib/utils.ts'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/shadcn/ui/table.tsx'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

interface GeneratedKeysModal {
	title: string
}

/**
 * A modal that is used to display generated keys (/dashboard/settings/keys).
 */
export function GeneratedKeysModal({ title }: GeneratedKeysModal) {
	const locale = useCurrentLocale()
	return (
		<DialogContent className={cn('max-w-xl')}>
			<DialogHeader>
				<DialogTitle>{title}</DialogTitle>
			</DialogHeader>
			<Table className={cn('sm:table-fixed')}>
				<TableCaption>{locale.key.generated_tokens}</TableCaption>
				<TableHeader>
					<TableRow className={cn('')}>
						<TableHead className={cn()}>{locale.common.name}</TableHead>
						<TableHead className={cn()}>{locale.key.generated_key}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">Personal-Key</TableCell>
						<TableCell className="font-medium">addf-234s-2sdf-22dd</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Work-key</TableCell>
						<TableCell className="font-medium">addf-234s-2sdf-22dd</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Test-Key</TableCell>
						<TableCell className="font-medium">addf-234s-2sdf-22dd</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</DialogContent>
	)
}
