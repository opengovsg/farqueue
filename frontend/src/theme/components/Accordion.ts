/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Accordion: ComponentStyleConfig = {
  ...ogpTheme.components.Accordion,
  baseStyle: {
    button: {
      ...ogpTheme.components.Accordion.baseStyle.button,
      p: 6,
      rounded: 'md',
    },
    panel: {
      pt: 3,
      pb: 6,
      px: 6,
    },
    container: {
      rounded: 'md',
      border: 'none',
      shadow: 'sm',
    },
  },
}
