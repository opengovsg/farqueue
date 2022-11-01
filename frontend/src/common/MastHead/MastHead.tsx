import { IconType } from 'react-icons/lib'
import { Box, Flex, Text } from '@chakra-ui/react'

export interface MastHeadProps {
  /**
   * Text to display.
   */
  text: string

  /**
   * Background color of MastHead.
   */
  bgColor?: string

  /**
   * Icon to show.
   */
  icon?: IconType

  /**
   * Color of icon.
   */
  iconColor?: string

  /**
   * Always show in viewport.
   */
  float?: boolean
}

export function MastHead({
  bgColor,
  text,
  icon,
  iconColor,
  float,
}: MastHeadProps) {
  const styleProps = {
    bg: bgColor ?? 'neutral.200',
    py: { base: '0.5rem', md: '0.375rem' },
    px: { base: '1.5rem', md: '1.75rem', lg: '2rem' },
    textStyle: { base: 'legal', md: 'caption-2' },
    display: 'flex',
    width: '100%',
    zIndex: 'overlay',
    top: 0,
  }

  const Icon = icon as IconType

  return (
    <Flex {...styleProps} position={float ? 'sticky' : undefined}>
      {icon ? (
        <Box
          aria-hidden
          mr={{ base: '0.25rem', lg: '0.5rem' }}
          my={{ base: '0px', md: '2px' }}
          color={iconColor ?? 'red.600'}
        >
          <Icon fontSize="1.5em" />
        </Box>
      ) : (
        <></>
      )}
      <Flex alignItems="center" flexWrap="wrap">
        <Text my="2px">{text}</Text>
      </Flex>
    </Flex>
  )
}
