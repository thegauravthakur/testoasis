import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { cn } from '@/lib/utils.ts'
import { Label } from '@/components/shadcn/ui/label.tsx'
import { Input } from '@/components/shadcn/ui/input.tsx'
import { ComponentPropsWithoutRef } from 'react'

interface FormInputProps {
	label: string
	register: UseFormRegisterReturn
	error?: FieldError
	inputProps?: ComponentPropsWithoutRef<'input'>
}

export function FormInput({ register, error, label, inputProps }: FormInputProps) {
	return (
		<div className={cn('space-y-2')}>
			<Label className={cn(error?.message && 'text-red-600')} htmlFor={label}>
				{label} {inputProps?.required && <span className={cn('text-red-600')}>*</span>}
			</Label>
			<Input id={label} {...inputProps} {...register} />
			<p className={cn('text-xs text-red-600')}>{error?.message} &nbsp;</p>
		</div>
	)
}
