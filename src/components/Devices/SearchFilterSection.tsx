import { useState } from 'react'
import { cn } from '@/lib/utils.ts'
import { Input } from '@/components/shadcn/ui/input.tsx'
import { Sheet, SheetTrigger } from '@/components/shadcn/ui/sheet.tsx'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { Settings2Icon } from 'lucide-react'
import { FilterItem } from '@/components/Devices/FilterItem.tsx'
import { MobileFilterSheet } from '@/components/Devices/MobileFilterSheet.tsx'
import { Label } from '@/components/shadcn/ui/label.tsx'

export type Filter = ReturnType<typeof getFilterValues>
export type FilterValues = Filter[number]['values']

export function SearchFilterSection() {
	const [filters, setFilters] = useState(() => getFilterValues())
	const hasActiveFilters = filters.some(filter => filter.values.some(val => val.checked))
	return (
		<div className={cn('flex items-center gap-x-3')}>
			<Label className={cn('sr-only')} htmlFor="search-box">
				Search for devices
			</Label>
			<Input
				className={cn('transition-max-width sm:max-w-[200px] md:focus:max-w-xs')}
				id="search-box"
				placeholder="Search..."
				role="search"
			/>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						aria-label="Open filter section"
						className={cn('sm:hidden')}
						size="icon"
						type="button"
						variant="outline"
					>
						<Settings2Icon />
					</Button>
				</SheetTrigger>
				<MobileFilterSheet filters={filters} setFilters={setFilters} />
			</Sheet>
			<div className={cn('hidden items-center overflow-x-auto scroll-auto p-2 sm:flex')}>
				{filters.map(({ filter, values }, index) => (
					<FilterItem
						key={filter}
						label={filter}
						values={values}
						onCheckedChange={(updatedValueIndex, value) => {
							const updatedFilters = [...filters]
							filters[index].values[updatedValueIndex].checked = value
							setFilters(updatedFilters)
						}}
					/>
				))}
				{hasActiveFilters && (
					<Button
						className={cn('min-w-max')}
						type="button"
						variant="ghost"
						onClick={() => {
							setFilters(getFilterValues())
						}}
					>
						Clear filters
					</Button>
				)}
			</div>
		</div>
	)
}

// This function would be removed after the API integration
export function getFilterValues() {
	return [
		{
			filter: 'brand',
			values: [
				{ value: 'Brand 1', checked: false },
				{ value: 'Brand 2', checked: false },
				{ value: 'Brand 3', checked: false },
				{ value: 'Brand 4', checked: false },
			],
		},
		{
			filter: 'Serial Number',
			values: [
				{ value: 'Number 1', checked: false },
				{ value: 'Number 2', checked: false },
				{ value: 'Number 3', checked: false },
				{ value: 'Number 4', checked: false },
			],
		},
	]
}
