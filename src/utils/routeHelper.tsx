import { lazy, Suspense } from 'react'
import { FullPageSpinner } from '@/components/shared/FullPageSpinner.tsx'
import { RouteObject } from 'react-router-dom'

export function generateRoutes(routes: RouteObject[]): RouteObject[] {
	return routes.map(
		({ element: rootElement, path: rootPath, children: rootChildren, ...restRootProps }) => {
			const RouteComponent = lazy(() =>
				import(`../pages/${rootElement}/index.tsx`).then(module => ({
					default: module[rootElement as string],
				})),
			)

			const children = rootChildren?.map(
				({ children: _children, element: _element, path: _path, ...restChildProps }) => {
					let children: RouteObject[] = []
					if (_children?.length !== 0) {
						children = generateRoutes(_children ?? [])
					}
					const RouteComponent = lazy(() =>
						import(`../pages/${_element}/index.tsx`).then(module => ({
							default: module[_element as string],
						})),
					)
					return {
						...restChildProps,
						path: _path,
						element: (
							<Suspense fallback={<FullPageSpinner />}>
								<RouteComponent />
							</Suspense>
						),
						children,
					}
				},
			)

			return {
				...restRootProps,
				path: rootPath,
				element: (
					<Suspense fallback={<FullPageSpinner />}>
						<RouteComponent />
					</Suspense>
				),
				children,
			} as RouteObject
		},
	)
}
