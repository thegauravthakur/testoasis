import { ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

interface TextProps {
	as: 'p' | 'span' | 'div'
	className?: string
	children: ReactNode
}

export function Text({ as, className, children }: TextProps) {
	const Component = as ?? 'p'
	return (
		<Component className={cn('text-sm text-muted-foreground', cn(className))}>{children}</Component>
	)
}
