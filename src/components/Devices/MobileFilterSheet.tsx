import { SheetContent, SheetHeader, SheetTitle } from '@/components/shadcn/ui/sheet.tsx'
import { cn } from '@/lib/utils.ts'
import { Accordion } from '@/components/shadcn/ui/accordion.tsx'
import { Filter } from '@/components/Devices/SearchFilterSection.tsx'
import { FilterAccordionItem } from '@/components/Devices/FilterAccordionItem.tsx'

interface MobileFilterSheetProps {
	filters: Filter
	setFilters: (filters: Filter) => void
}

export function MobileFilterSheet({ filters, setFilters }: MobileFilterSheetProps) {
	return (
		<SheetContent side="bottom">
			<SheetHeader>
				<SheetTitle>Device Filters</SheetTitle>
				<div className={cn('grid')}>
					{filters.map(({ filter, values }, _index) => (
						<Accordion key={filter} collapsible className="w-full" type="single">
							<FilterAccordionItem
								filter={filter}
								values={values}
								onCheckedChange={(index, value) => {
									const _filters = structuredClone(filters)
									_filters[_index].values[index].checked = value
									setFilters(_filters)
								}}
							/>
						</Accordion>
					))}
				</div>
			</SheetHeader>
		</SheetContent>
	)
}
