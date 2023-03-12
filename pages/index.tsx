import React from 'react'
import Home from '@/page-components/Home'
import { withAuth } from '@/hocs'

const HomePage = () => {
  return <Home />
}

export default withAuth({
  Component: HomePage,
})
