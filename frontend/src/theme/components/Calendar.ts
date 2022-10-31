/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStyleConfig } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const Calendar: ComponentStyleConfig = {
  ...ogpTheme.components.Calendar,
  sizes: {
    md: {
      dayOfMonth: {
        p: {
          base: 0,
          md: 0.0,
        },
        w: {
          base: '2rem',
          md: '2rem',
        },
        h: {
          base: '2rem',
          md: '2rem',
        },
      },
      monthYearSelectorContainer: {
        pt: '0.75rem',
        h: '2rem',
      },
      monthArrowContainer: {
        mt: '-0.35rem',
      },
      calendarContainer: {
        px: '0.75rem',
        mb: '-1px',
        pb: '0.75rem',
      },
      dayNamesContainer: {
        w: {
          base: '2.25rem',
          md: '2rem',
        },
        h: {
          base: '2rem',
          md: '3rem',
        },
      },
      todayLinkContainer: {
        // py: '0.25rem',
        display: 'none',
      },
    },
  },
}
