import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { routeConfig } from '@/routes'
import { ROLES } from '@/constants/roles'

interface withAuthProps {
  Component: React.FC
  allowedRoles?: Array<keyof typeof ROLES>
}

// TODO: replace when implement in real-life
const isAuthenticated = false
const role = ROLES.USER

const withAuth = ({
  Component,
  allowedRoles = [ROLES.USER],
}: withAuthProps) => {
  const Authenticated: React.FC = (): JSX.Element | null => {
    const [isValid, setIsValid] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
      if (routeConfig.PUBLIC[router.pathname]) {
        setIsValid(true)
        return
      }

      if (
        isAuthenticated &&
        (!allowedRoles.includes(role) || !routeConfig[role][router.pathname])
      ) {
        setIsValid(false)
        router.push(routeConfig[role].default)
        return
      }

      if (!isAuthenticated && !routeConfig.AUTH[router.pathname]) {
        setIsValid(false)
        router.push(routeConfig.AUTH.default)
        return
      }

      setIsValid(true)
    }, [router])

    return isValid ? <Component /> : null
  }

  return Authenticated
}

export default withAuth
