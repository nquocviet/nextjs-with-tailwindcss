import React from 'react'

import { withAuth } from '@/hocs'
import Home from '@/page-components/Home'

const HomePage = () => {
	return <Home />
}

export default withAuth({
	Component: HomePage,
})
