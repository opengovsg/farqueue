import { Navigate } from 'react-router-dom'

import { routes } from '~/common/constants/routes'
import { useAuth } from '~/features/auth'

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return <Navigate to={routes.index} />
  return children
}
