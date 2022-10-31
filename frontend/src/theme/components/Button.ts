/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Button: ComponentStyleConfig = {
  ...ogpTheme.components.Button,
  variants: {
    solid: (args) => ({
      ...ogpTheme.components.Button.variants.solid(args),
      _focus: {
        boxShadow: 'none',
      },
    }),
    outline: (args) => ({
      ...ogpTheme.components.Button.variants.outline(args),
      _focus: {
        boxShadow: 'none',
      },
    }),
    clear: (args) => ({
      ...ogpTheme.components.Button.variants.clear(args),
      _focus: {
        boxShadow: 'none',
      },
    }),
    link: (args) => ({
      ...ogpTheme.components.Button.variants.link(args),
      _focus: {
        boxShadow: 'none',
      },
    }),
    'link-alt': {
      border: '0px',
      color: 'neutral.700',
      _hover: {
        bgColor: 'primary.200',
      },
      _active: {
        bgColor: 'primary.200',
        color: 'primary.500',
      },
    },
    'dark-menu': {
      color: 'white',
      border: '0px',
      size: 'sm',
      _hover: {
        bg: 'primary.800',
      },
      _active: {
        bg: 'primary.700',
      },
    },
    neutral: {
      backgroundColor: 'neutral.300',
      borderColor: 'neutral.300',
      borderWidth: 0,
      color: 'neutral.700',
      _hover: {
        bg: 'neutral.300',
      },
      _active: {
        bg: 'neutral.400',
      },
    },
  },
  sizes: {
    md: {
      h: '2rem',
      minW: '2rem',
      fontSize: '0.875rem',
      py: '0',
    },
  },
}
