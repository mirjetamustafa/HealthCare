import type { ReactNode } from 'react'
import { useAuthContext } from '../lib/AuthContext'
import { RouteType } from './Routes'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  routeType: RouteType
  children: ReactNode
}

const AutheticationRoute = ({ routeType, children }: Props) => {
  const { isAuthenticated, isLoading, user } = useAuthContext()

  if (isLoading) return <p>Loading...</p>

  if (routeType === RouteType.PUBLIC && isAuthenticated) {
    const pathname = window.location.pathname

    if (pathname === '/login' || pathname === '/register') {
      switch (user?.role) {
        case 'admin':
          return <Navigate to="/admin" replace />
        case 'doctor':
          return <Navigate to="/doctorDashboard" replace />
        case 'patient':
          return <Navigate to="/patient" replace />
        default:
          return <Navigate to="/" replace />
      }
    }
    return <Outlet />
  }

  if (routeType === 'private' && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default AutheticationRoute
