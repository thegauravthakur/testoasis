import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/shadcn/ui/accordion.tsx'
import { cn } from '@/lib/utils.ts'
import { Checkbox } from '@/components/shadcn/ui/checkbox.tsx'
import { FilterValues } from '@/components/Devices/SearchFilterSection.tsx'

interface FilterAccordionItemProps {
	filter: string
	values: FilterValues
	onCheckedChange: (index: number, value: boolean) => void
}
export function FilterAccordionItem({ filter, values, onCheckedChange }: FilterAccordionItemProps) {
	const selectedValues = values.filter(value => value.checked)
	const count = selectedValues.length > 0 ? `(${selectedValues.length})` : ''

	return (
		<AccordionItem value="item-1">
			<AccordionTrigger>
				{filter} {count}
			</AccordionTrigger>
			<AccordionContent className={cn('')}>
				{values.map((item, index) => (
					<div key={item.value} className={cn('flex space-x-3 py-2')}>
						<Checkbox
							key={item.value}
							checked={item.checked}
							id={item.value}
							onCheckedChange={isChecked => {
								onCheckedChange(index, isChecked as boolean)
							}}
						/>
						<label
							className={cn(
								'text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
								'w-full text-left hover:cursor-pointer',
							)}
							htmlFor={item.value}
						>
							{item.value}
						</label>
					</div>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
