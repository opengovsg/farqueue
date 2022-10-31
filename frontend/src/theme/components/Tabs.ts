/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

import { colors } from '../colors'

export const Tabs: ComponentStyleConfig = {
  ...ogpTheme.components.Tabs,
  variants: {
    ...ogpTheme.components.Tabs.variants,
    // TODO(oliver) - naming, didn't want to override the baseStyle yet.
    basic: {
      tablist: {
        mb: 6,
        borderBottom: `1px solid ${colors.neutral[200]}`,
      },
      tab: {
        color: 'neutral.700',
        fontWeight: 'medium',
        fontSize: '0.875rem',
        px: 6,
        _selected: {
          color: 'primary.500',
          fontSize: '0.875rem',
          borderBottom: '2px',
          paddingBottom: '6px',
        },
        _hover: {
          color: 'primary.500',
        },
      },
    },
    vertical: {
      tablist: {
        mr: 2,
      },
      tab: {
        w: 'full',
        justifyContent: 'flex-start',
        color: 'neutral.700',
        fontSize: '0.875rem',
        px: 6,
        _selected: {
          fontSize: '0.875rem',
          color: 'primary.500',
          bgColor: 'primary.50',
        },
        _hover: {
          bgColor: 'primary.50',
        },
      },
    },
  },
}
