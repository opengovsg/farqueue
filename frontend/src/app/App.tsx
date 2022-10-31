import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@opengovsg/design-system-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from '~/features/auth'
import { theme } from '~/theme/index'

import { AppRouter } from './AppRouter'

export const queryClient = new QueryClient()
export const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider resetCSS theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
