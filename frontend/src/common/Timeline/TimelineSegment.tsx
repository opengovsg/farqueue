import { Box, Heading, VStack } from '@chakra-ui/react'

import { TimelineSegmentProps } from './timeline.types'
import { TimelineRow } from './TimelineRow'

export const TimelineSegment = ({ label, rows }: TimelineSegmentProps) => {
  return (
    <VStack align="start" width="full" spacing={4}>
      <Heading color="#445072" size="sm">
        {label}
      </Heading>
      <VStack align="start" spacing={6} position="relative" width="100%">
        {rows.map((event) => (
          <Box
            width="100%"
            key={event.headerText}
            _after={{
              content: `""`,
              backgroundColor: 'neutral.300',
              width: '3px',
              position: 'absolute',
              left: '13.5px',
              top: 0,
              bottom: 0,
              marginLeft: '-3px',
              zIndex: 0,
            }}
          >
            <TimelineRow {...event} />
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}
