import { ComponentStyleConfig } from '@chakra-ui/react'

export const Table: ComponentStyleConfig = {
  baseStyle: {
    th: {
      h: 12,
      textTransform: 'none',
      bg: 'neutral.200',
      _hover: {
        bg: 'neutral.300',
      },
    },
    td: {
      h: 12,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  sizes: {
    md: {
      th: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.25rem',
        letterSpacing: -0.006,
        p: 3,
      },
      td: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.25rem',
        letterSpacing: -0.006,
        px: 3,
      },
    },
  },
}
