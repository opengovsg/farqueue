import { RiClipboardFill } from 'react-icons/ri'
import { Box, HStack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import _ from 'lodash'

export type TimelineRowProps = {
  headerText: string
  createdAt: Date
}

export const TimelineRow = ({ headerText, createdAt }: TimelineRowProps) => {
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
          backgroundColor="#BABECB"
          borderRadius="50%"
          h={'24px'}
          w={'24px'}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex={1}
        >
          <Box color="white" fontSize={'12px'}>
            <RiClipboardFill />
          </Box>
        </Box>

        <Box>
          <Text>{headerText}</Text>
        </Box>
      </HStack>

      <Text flexShrink={0} color="#a0a0a0">
        {dayjs(createdAt).format('hh:mm A')}
      </Text>
    </HStack>
  )
}
