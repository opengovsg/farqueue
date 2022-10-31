import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a multipart component: ComponentMultiStyleConfig
export const TextRadio: ComponentStyleConfig = {
  parts: ['button'],
  baseStyle: {
    button: {
      // Common for unchecked/checked state
      cursor: 'pointer',
      borderWidth: '1px',
      fontWeight: 'medium',
      fontSize: '0.875rem',
      h: '2rem',
      alignItems: 'center',
      px: 4,
      bg: 'white',
      color: 'neutral.700',
      borderColor: 'neutral.500',
      // Leftmost and rightmost buttons are rounded
      _first: {
        roundedLeft: 'md',
      },
      _last: {
        roundedRight: 'md',
      },
      // Overlap the borders of adjacent buttons
      _notFirst: {
        marginLeft: '-1px',
      },
      _checked: {
        bg: 'primary.50',
        color: 'primary.500',
        borderColor: 'primary.400',
        zIndex: 2,
      },
    },
  },
  variants: {
    inert: {
      button: {
        cursor: 'default',
        _checked: {
          bg: 'neutral.200',
          color: 'neutral.700',
          borderColor: 'neutral.500',
        },
      },
    },
  },
}
