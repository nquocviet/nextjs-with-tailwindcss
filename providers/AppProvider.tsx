import React, { ReactNode } from 'react'
import { ThemeProvider } from 'context/theme'

interface AppProviderProps {
	children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default AppProvider
