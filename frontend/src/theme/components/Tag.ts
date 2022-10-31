import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Tag: ComponentMultiStyleConfig = {
  parts: ['container', 'label', 'closeButton'],
  baseStyle: {
    container: {
      size: 'lg',
      px: '8px',
      py: '4px',
      borderRadius: '16px',
    },
    label: {
      fontSize: '12px',
      fontWeight: '600',
    },
  },
  variants: {
    'filter-tag': {
      container: {
        bgColor: 'gray.100',
        px: '8px',
        py: '4px',
        borderRadius: '4px',
      },
      label: {
        fontSize: '12px',
        fontWeight: '600',
      },
    },
  },
}
