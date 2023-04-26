import { ROLES } from '@/constants/roles'

const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
} as const

const routeConfig: { [key: string]: { [key: string]: string } } = {
	PUBLIC: {
		default: ROUTES.HOME,
		[ROUTES.HOME]: ROUTES.HOME,
	},
	AUTH: {
		default: ROUTES.LOGIN,
		[ROUTES.LOGIN]: ROUTES.LOGIN,
		[ROUTES.REGISTER]: ROUTES.REGISTER,
	},
	[ROLES.USER]: {
		default: ROUTES.HOME,
		[ROUTES.HOME]: ROUTES.HOME,
	},
	[ROLES.ADMIN]: {
		default: ROUTES.DASHBOARD,
		[ROUTES.DASHBOARD]: ROUTES.DASHBOARD,
	},
}

export { routeConfig }

export default ROUTES
