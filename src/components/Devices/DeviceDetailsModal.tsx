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

export function DeviceDetailsModal() {
	return (
		<DialogContent className={cn('max-w-xl')}>
			<DialogHeader>
				<DialogTitle>iPhone 14</DialogTitle>
			</DialogHeader>
			<Table className={cn('sm:table-fixed')}>
				<TableCaption>Device details for iPhone 14</TableCaption>
				<TableHeader>
					<TableRow className={cn('')}>
						<TableHead className={cn()}>Field</TableHead>
						<TableHead className={cn()}>Value</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">Status</TableCell>
						<TableCell className="font-medium">Free</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Model</TableCell>
						<TableCell className="font-medium">iPhone 14</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Serial</TableCell>
						<TableCell className="font-medium">00008110-0001254C213B801E</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Screen</TableCell>
						<TableCell className="font-medium">1170x2532</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</DialogContent>
	)
}
