import { extendTheme } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

import { colors } from './colors'
import * as components from './components'
import { textStyles } from './textStyles'

export const theme = extendTheme({
  ...ogpTheme,
  breakpoints: {
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: {
    ...ogpTheme.components,
    ...components,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  colors: {
    ...ogpTheme.colors,
    ...colors,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  textStyles: {
    ...ogpTheme.textStyles,
    ...textStyles,
  },
})
