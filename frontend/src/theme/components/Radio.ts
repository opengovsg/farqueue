/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Radio: ComponentStyleConfig = {
  ...ogpTheme.components.Radio,
  baseStyle: ({ colorScheme: c }) => ({
    control: {
      alignSelf: 'flex-start',
      mt: '2px',
      bg: 'white',
      cursor: 'pointer',
      border: '2px solid',
      borderColor: `${c}.500`,
      _before: {
        content: `""`,
        transition: 'transform ease 200ms',
      },
      _focus: {
        boxShadow: 'none',
      },
      _checked: {
        bg: 'white',
        color: `${c}.500`,
        _hover: {
          bg: 'white',
          borderColor: `${c}.500`,
        },
      },
      _invalid: {
        // override Chakra UI style which turns the control red when invalid
        borderColor: `${c}.500`,
      },
      _disabled: {
        borderColor: 'neutral.500',
        bg: 'white',
        _checked: {
          borderColor: 'neutral.500',
          color: 'neutral.500',
          bg: 'white',
        },
      },
    },
    container: {
      w: '100%',
      color: 'secondary.700',
      _hover: {
        bg: 'unset',
      },
      _focusWithin: {
        boxShadow: 'unset',
      },
      _disabled: {
        bg: 'white',
        color: 'neutral.500',
        cursor: 'not-allowed',
      },
    },
    // Text label
    label: {
      _disabled: {
        color: 'neutral.500',
        // Chakra automatically sets opacity to 0.4, so override that
        opacity: 1,
      },
      textStyle: 'normal',
      ml: '0.75rem',
    },
    othersContainer: {
      _hover: {
        bg: `${c}.100`,
        _disabled: {
          bg: 'none',
        },
      },
      _focusWithin: {
        boxShadow: 'unset',
      },
    },
    othersRadio: {
      // To get around an issue where the hover background blocks the border when focused
      _focusWithin: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'none',
      },
      p: 0,
    },
  }),
  sizes: {
    md: {
      container: {
        px: '0rem',
        py: '0.25rem',
      },
      control: {
        w: '1rem',
        h: '1rem',
        // the ::before pseudoclass controls the solid circle which indicates
        // that the radio button is checked
        _before: {
          w: '0.625rem',
          h: '0.625rem',
          transform: 'scale(0)',
        },
        _checked: {
          _before: {
            w: '0.5rem',
            h: '0.5rem',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
}
