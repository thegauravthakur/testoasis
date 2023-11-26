import { useMutation } from '@tanstack/react-query'
import { useToast } from '@/components/shadcn/ui/use-toast.ts'
import { LoginSchema } from '@/pages/Login'

/**
 * Hook to log in a user
 */
export function useLoginUser() {
	const { toast } = useToast()
	return useMutation<unknown, unknown, LoginSchema>({
		mutationFn: async () => {
			return new Promise(resolve => setTimeout(resolve, 1000))
			// return fetchHelper('/auth/api/v1/ldap', { method: 'POST', body: JSON.stringify(data) })
		},
		onSuccess: () => {
			toast({ title: 'Logged in', description: 'You have been logged in' })
		},
		onError: () => {
			// update with server error
			toast({ title: 'Error', description: 'Failed to log in', variant: 'destructive' })
		},
	})
}
