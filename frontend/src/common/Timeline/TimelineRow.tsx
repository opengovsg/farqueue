import { RiClipboardFill } from 'react-icons/ri'
import { Box, HStack, Text } from '@chakra-ui/react'
import _ from 'lodash'

import { TimelineRowProps } from './timeline.types'

export const TimelineRow = ({ headerText, happenedAt }: TimelineRowProps) => {
  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      fontSize="14"
      alignItems="flex-start"
      spacing={4}
    >
      <HStack spacing={5} alignItems="start">
        <Box
          flexShrink={0}
          backgroundColor="#BABECB"
          borderRadius="50%"
          h={'24px'}
          w={'24px'}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex={1}
          color="white"
          fontSize={'12px'}
        >
          <RiClipboardFill />
        </Box>

        <Text>{headerText}</Text>
      </HStack>

      <Text flexShrink={0} color="#a0a0a0">
        {happenedAt?.format('hh:mm A') ?? ''}
      </Text>
    </HStack>
  )
}
