import { useParams } from 'react-router-dom'
import { HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { LastModifiedText } from '~/common/LastModifiedText'
import { Timeline } from '~/common/Timeline'
import { TimelineRowProps } from '~/common/Timeline/TimelineRow'

import { LegendRow } from './Legend'

// MOCK
const events: TimelineRowProps[] = [
  {
    headerText: 'Admitted to TTSH Emergency Department',
    createdAt: dayjs().subtract(9, 'hours').toDate(),
  },
  {
    headerText: 'Admitted to ICU',
    createdAt: dayjs().subtract(7, 'hours').subtract(24, 'minute').toDate(),
  },
  {
    headerText: 'Admitted to Radiology (L5-R3)',
    createdAt: dayjs().subtract(5, 'hours').subtract(12, 'minute').toDate(),
  },
  {
    headerText: 'Warded at L4 (Room 4)',
    createdAt: dayjs().subtract(3, 'hours').subtract(12, 'minute').toDate(),
  },
]

export const ConceptThreePersonalized = (): JSX.Element => {
  const { uin } = useParams()

  console.log(uin)

  return (
    <VStack
      w="100vw"
      spacing={4}
      p={10}
      backgroundColor="neutral.100"
      alignItems="center"
    >
      <Text textStyle="h1">Live status</Text>

      <HStack w="full" spacing={10} px={10}>
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
          <Spacer />
          <LastModifiedText lastRetrieved={dayjs().subtract(5, 'minutes')} />
        </VStack>

        <Timeline rows={events} />
      </HStack>
    </VStack>
  )
}
