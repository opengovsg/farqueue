/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Checkbox: ComponentStyleConfig = {
  ...ogpTheme.components.Checkbox,
  variants: {
    ...ogpTheme.components.Checkbox.variants,
    plain: {
      control: {
        mt: '3px',
        w: '1rem',
        h: '1rem',
        _focus: {
          boxShadow: 'none',
        },
      },
      // Container for the checkbox as well as label
      container: {
        _hover: {
          bg: 'unset',
        },
        _focusWithin: {
          boxShadow: 'unset',
        },
        py: '0rem',
      },
      icon: {
        transform: 'scale(0.625)',
      },
      label: {
        fontSize: '0.875rem',
        ml: '0.5rem',
      },
    },
  },
}
