import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/shadcn/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { useLoginUser } from '@/api/auth/useLoginUser.tsx'
import { FormInput } from '@/components/shared/FormInput'
import { Loader2 } from 'lucide-react'
import { useCurrentLocale } from '@/hooks/shared/useCurrentLocale.tsx'

const loginSchema = z.object({
	username: z.string().min(1, { message: 'Username is required' }),
	password: z.string().min(5, { message: 'Password must be at least 5 characters long' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
export function Login() {
	const currentLocale = useCurrentLocale()
	const login = useLoginUser()
	const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })
	function onSubmit(values: LoginSchema) {
		login.mutate(values)
	}

	return (
		<div className={cn('flex min-h-screen items-center justify-center')}>
			<main className={cn('mx-5 w-full max-w-md')}>
				<div className={cn('mb-10 space-y-1')}>
					<h1 className={cn('text-3xl font-bold')}>{currentLocale.login.welcome}</h1>
					<p className={cn('text-sm text-gray-500')}>{currentLocale?.login.welcome}</p>
				</div>
				<form className="" onSubmit={form.handleSubmit(onSubmit)}>
					<FormInput
						error={form.formState.errors.username}
						inputProps={{ required: true, type: 'text' }}
						label="Username"
						register={form.register('username')}
					/>
					<FormInput
						error={form.formState.errors.password}
						inputProps={{ required: true, type: 'password' }}
						label="Password"
						register={form.register('password')}
					/>
					<Button className={cn('mt-10 w-full')} disabled={login.isLoading} type="submit">
						{login.isLoading && <Loader2 className={cn('mr-2 h-4 w-4 animate-spin')} />}
						{currentLocale?.common.submit}
					</Button>
				</form>
			</main>
		</div>
	)
}
