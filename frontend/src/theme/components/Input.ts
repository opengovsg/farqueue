/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

const size = {
  md: {
    px: '0.5rem',
    h: '2rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },
}

export const Input: ComponentStyleConfig = {
  ...ogpTheme.components.Input,
  sizes: {
    md: {
      field: size.md,
      addon: size.md,
    },
  },
}

export const NumberInput: ComponentStyleConfig = {
  ...ogpTheme.components.NumberInput,
  sizes: {
    md: {
      stepper: {
        fontSize: '1rem',
      },
      field: size.md,
      stepperButton: {
        _last: {
          borderRightRadius: size.md.borderRadius,
        },
      },
    },
  },
}
