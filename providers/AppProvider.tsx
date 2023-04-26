import React, { ReactNode } from 'react'
import { ThemeProvider } from 'context/theme'

import { ErrorBoundary } from '@/components'

type AppProviderProps = {
	children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<ErrorBoundary>
			<ThemeProvider>{children}</ThemeProvider>
		</ErrorBoundary>
	)
}

export default AppProvider
