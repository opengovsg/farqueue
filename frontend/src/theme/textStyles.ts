/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ChakraProps } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

const description: ChakraProps = {
  fontStyle: 'normal',
  fontSize: '0.625rem',
  lineHeight: '1rem',
  fontWeight: 400,
}

export const textStyles = {
  description,
  fieldText: {
    ...ogpTheme.textStyles['body-2'],
    color: 'neutral.800',
  },
  fieldLabel: {
    ...description,
    color: 'neutral.600',
  },
}
