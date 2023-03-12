import React, { ReactNode } from 'react'
import { ErrorBoundary } from '@/components'
import { ThemeProvider } from 'context/theme'

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
