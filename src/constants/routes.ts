import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { generateRoutes } from '@/utils/routeHelper.tsx'
import { PAGE_PATH } from './path'

export const routes: RouteObject[] = [
	{
		path: PAGE_PATH.LOGIN,
		element: 'Login',
	},

	{
		path: PAGE_PATH.DASHBOARD,
		element: 'Dashboard',
		children: [
			{
				path: PAGE_PATH.DEVICES,
				element: 'Devices',
			},
			{
				path: PAGE_PATH.SETTINGS,
				element: 'Settings',
				children: [
					{ path: PAGE_PATH.GENERAL_SETTINGS, element: 'GeneralSettings' },
					{ path: PAGE_PATH.KEYS_SETTINGS, element: 'KeysSettings' },
					{ path: PAGE_PATH.GROUPS_SETTINGS, element: 'GroupSettings' },
				],
			},
		],
	},
	{
		path: '*',
		element: 'NotFound',
	},
]

export const router = createBrowserRouter(generateRoutes(routes))
