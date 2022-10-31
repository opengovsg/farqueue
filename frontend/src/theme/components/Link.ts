/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Link: ComponentStyleConfig = {
  ...ogpTheme.components.Link,
  variants: {
    ...ogpTheme.components.Link.variants,
    plain: {
      textDecorationLine: 'none',
      _hover: {
        textDecorationLine: 'none',
      },
    },
  },
}
