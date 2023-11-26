import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover.tsx'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { ChevronDownIcon } from 'lucide-react'
import { Checkbox } from '@/components/shadcn/ui/checkbox.tsx'
import { getFilterValues } from '@/components/Devices/SearchFilterSection.tsx'

interface FilterItemProps {
	label: string
	values: ReturnType<typeof getFilterValues>[number]['values']
	onCheckedChange: (index: number, value: boolean) => void
}

export function FilterItem({ label, values, onCheckedChange }: FilterItemProps) {
	const selectedItems = values.filter(item => item.checked)
	const count = selectedItems.length > 0 ? `(${selectedItems.length})` : ''

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className={cn('h-8 min-w-max justify-between md:justify-start')} variant="ghost">
					<span>
						{label} {count}
					</span>
					<ChevronDownIcon className={cn('ml-1')} size={16} />
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn('max-w-max p-5')}>
				<div className={cn('space-y-3')}>
					{values.map((item, index) => (
						<div key={item.value} className={cn('flex space-x-3')}>
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
									'hover:cursor-pointer',
								)}
								htmlFor={item.value}
							>
								{item.value}
							</label>
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}
