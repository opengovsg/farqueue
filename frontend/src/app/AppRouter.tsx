import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Flex, Spinner } from '@chakra-ui/react'

import { PrivateRoute } from '~/app/PrivateRoute'
import { PublicRoute } from '~/app/PublicRoute'
import { routes } from '~/common/constants/routes'
import { LoginPage } from '~/features/auth/LoginPage'
import { ConceptOne } from '~/features/concept1'
import { ConceptTwo } from '~/features/concept2'
import { ConceptThreePersonalized, ConceptThreeTv } from '~/features/concept3'
import { Landing } from '~/features/landing'

const HealthPage = lazy(() => import('~/features/health/HealthPage'))
import { Oops } from '~/features/oops'

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense
      fallback={
        <Flex w="full" h="full" justify="center" align="center">
          <Spinner />
        </Flex>
      }
    >
      <Routes>
        <Route
          path={routes.index}
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />
        <Route
          path={routes.concept1}
          element={
            <PublicRoute>
              <ConceptOne />
            </PublicRoute>
          }
        />

        <Route
          path={routes.concept2}
          element={
            <PublicRoute>
              <ConceptTwo />
            </PublicRoute>
          }
        />

        <Route
          path={routes.concept3}
          element={
            <PublicRoute>
              <ConceptThreeTv />
            </PublicRoute>
          }
        />

        <Route
          path={routes.concept3Patient}
          element={
            <PublicRoute>
              <ConceptThreePersonalized />
            </PublicRoute>
          }
        />

        <Route
          path={routes.login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={routes.health}
          element={
            <PrivateRoute>
              <HealthPage />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.oops}
          element={
            <PublicRoute>
              <Oops />
            </PublicRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Suspense>
  )
}
