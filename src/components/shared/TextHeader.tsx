import { ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

interface TextHeaderProps {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	className?: string
	children: ReactNode
}

export function TextHeader({ as, className, children }: TextHeaderProps) {
	const Heading = as ?? 'h1'
	return <Heading className={cn('text-sm font-medium', cn(className))}>{children}</Heading>
}
