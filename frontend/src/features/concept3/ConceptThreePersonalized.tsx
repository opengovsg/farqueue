import { Navigate, useParams } from 'react-router-dom'
import { Divider, Stack, Text, VStack } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { routes } from '~/common/constants/routes'
import { LastModifiedText } from '~/common/LastModifiedText'
import { Timeline } from '~/common/Timeline/Timeline'

import { LeaveNoteEditable } from './LeaveNoteEditable'
import { LegendExplained } from './Legend'
import { usePatient } from './queries'
import { ShareLink } from './ShareLink'

export const ConceptThreePersonalized = (): JSX.Element => {
  const { uin } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { events } = usePatient({ patientId: uin })

  const divider = useBreakpointValue(
    {
      base: <Divider />,
      md: <></>,
    },
    {
      fallback: 'md',
    },
  )

  // Using [] to represent no real patient
  if (events.length === 0) {
    return <Navigate to={routes.oops} />
  }

  return (
    <VStack spacing={6} p={8} backgroundColor="neutral.100" alignItems="center">
      <Text textStyle="h1">Milestones</Text>
      <Stack
        spacing={6}
        direction={{ base: 'column', md: 'row' }}
        divider={divider}
      >
        <VStack align="start" minW="25vw" spacing={6}>
          <VStack align="start">
            <Text textStyle="body-2">Patient Name</Text>
            <Text textStyle="h4">Grover Lee</Text>
          </VStack>

          <VStack align="start">
            <Text textStyle="body-2">Current Location</Text>
            <Text textStyle="h4">{`L4 (Room 4)`}</Text>
          </VStack>
          <VStack align="start">
            <Text textStyle="body-2">Status</Text>
            <LegendExplained isSeeingDoctor={false} isContactable={true} />
          </VStack>
          <LastModifiedText lastRetrieved={dayjs().subtract(5, 'minutes')} />
        </VStack>

        <Timeline rows={events} />
      </Stack>
      <Divider />
      <LeaveNoteEditable />
      <Divider />
      <ShareLink />
    </VStack>
  )
}
