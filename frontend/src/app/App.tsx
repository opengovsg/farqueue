import { BiMessageSquareError } from 'react-icons/bi'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@opengovsg/design-system-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MastHead } from '~/common/MastHead'
import { AuthProvider } from '~/features/auth'
import { theme } from '~/theme/index'

import { AppRouter } from './AppRouter'

export const queryClient = new QueryClient()
export const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <ThemeProvider resetCSS theme={theme}>
      <MastHead
        bgColor={'red.200'}
        iconColor={'primary.500'}
        icon={BiMessageSquareError}
        text={`Running in staging environment. This is a protoype.`}
        float={true}
      />
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
