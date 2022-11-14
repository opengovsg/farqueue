import { useParams } from 'react-router-dom'
import { Divider, Stack, Text, VStack } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { LastModifiedText } from '~/common/LastModifiedText'
import { Timeline } from '~/common/Timeline/Timeline'
import { TimelineRowProps } from '~/common/Timeline/timeline.types'

import { LeaveNoteEditable } from './LeaveNoteEditable'
import { LegendRow } from './Legend'

// MOCK
const events: TimelineRowProps[] = [
  {
    headerText: 'Dispensary',
  },
  {
    headerText: 'Admitted to TTSH Emergency Department',
    happenedAt: dayjs().subtract(17, 'hours'),
  },
  {
    headerText: 'Admitted to ICU',
    happenedAt: dayjs().subtract(16, 'hours').subtract(24, 'minute'),
  },
  {
    headerText: 'Admitted to Radiology (L5-R3)',
    happenedAt: dayjs().subtract(8, 'hours').subtract(12, 'minute'),
  },
  {
    headerText: 'Warded at L4 (Room 4)',
    happenedAt: dayjs().subtract(1, 'hours').subtract(48, 'minute'),
  },
]

export const ConceptThreePersonalized = (): JSX.Element => {
  const { uin } = useParams()

  const divider = useBreakpointValue(
    {
      base: <Divider />,
      md: <></>,
    },
    {
      fallback: 'md',
    },
  )

  console.log(uin)

  return (
    <VStack spacing={6} p={8} backgroundColor="neutral.100" alignItems="center">
      <Text textStyle="h1">Live status</Text>
      <Stack
        w="full"
        spacing={6}
        direction={{ base: 'column', md: 'row' }}
        divider={divider}
      >
        <VStack align="start" minW="25vw" spacing={6}>
          <VStack w="full" align="start">
            <Text textStyle="body-2">Patient Name</Text>
            <Text textStyle="h4">Grover Lee</Text>
          </VStack>

          <VStack w="full" align="start">
            <Text textStyle="body-2">Current Location</Text>
            <Text textStyle="h4">{`L4 (Room 4)`}</Text>
          </VStack>
          <VStack w="full" align="start">
            <Text textStyle="body-2">Status</Text>
            <LegendRow isSeeingDoctor={false} isContactable={true} />
          </VStack>
          <LastModifiedText lastRetrieved={dayjs().subtract(5, 'minutes')} />
        </VStack>

        <Timeline rows={events} />
      </Stack>
      <Divider />
      <LeaveNoteEditable />
    </VStack>
  )
}
