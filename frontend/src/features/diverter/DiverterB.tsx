import { useMemo } from 'react'
import {
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { fmtTime } from '~/common/util/humanReadable'
import { useParamsSelected } from '~/hooks/useParamsSelected'

import GoQrSvg from '../../assets/svgs/sample-go.svg'

import { Barchart } from './Barchart'

interface WaitTime {
  label: string
  wait: number
  subtitle: string
}

const MainWait = {
  AH: 50,
  SGH: 170,
  SKH: 110,
  KTPH: 190,
  TTSH: 230,
  'NUH(A)': 210,
  NTFGH: 350,
  CGH: 480,
} as const

const waits: WaitTime[] = [
  { label: 'Prudence Family Clinic', subtitle: '800 m away', wait: 20 },
  { label: 'The Housecall GP Pte Ltd', subtitle: '2.2 km away', wait: 30 },
  {
    label: 'Toa Payoh North Clinic',
    subtitle: '1.2 km away',
    wait: 60,
  },
  { label: 'E Medical Clinic & Surgery', subtitle: '1.5 km away', wait: 10 },
]

export const DiverterB = (): JSX.Element => {
  const { selected } = useParamsSelected()

  const currWaitSeconds = useMemo(
    () => MainWait[selected as keyof typeof MainWait] * 60,
    [selected],
  )
  return (
    <Stack h="100vh" w="100vw" direction={{ base: 'column', md: 'row' }}>
      <VStack
        h="full"
        alignItems="center"
        spacing={8}
        p={6}
        backgroundColor="neutral.100"
      >
        <HStack align="center">
          <Text
            textStyle={{ base: 'h3', md: 'h1' }}
          >{`Wait Time for Non-Critical Cases now: ${fmtTime(
            currWaitSeconds,
          )}`}</Text>
        </HStack>

        <Barchart currentWait={currWaitSeconds} />

        <Text textStyle={{ base: 'h3', md: 'h1' }} color="neutral.800">
          Wait times at nearby clinics
        </Text>

        <SimpleGrid columns={{ base: 2, md: 4 }} w="full" spacing={6}>
          {waits.map(({ label, wait, subtitle }) => (
            <GridItem key={label}>
              <VStack spacing={2} align="center" textAlign="center">
                <Text color="neutral.800">{label}</Text>
                <Text color="neutral.800" textStyle="h3">
                  {fmtTime(wait * 60, { precision: 'minutes' })}
                </Text>
                <Text color="neutral.800" textStyle="caption-1">
                  {subtitle}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </SimpleGrid>
        <Text color="white">{`https://wait.health.gov.sg`}</Text>
      </VStack>
      <VStack
        h="full"
        alignItems="center"
        spacing="60px"
        p={6}
        backgroundColor="white"
      >
        <Text textStyle={{ base: 'h3', md: 'h1' }}>
          Free transfer to nearby clinics
        </Text>
        <VStack spacing={4}>
          <Image src={GoQrSvg} alt="go-qr" />
          <Text
            textStyle="caption-1"
            textAlign="center"
            color="gray.500"
            px={6}
          >
            Scan the above QR code, complete the questionnaire, and we&apos;ll
            pay for your Grab to the nearest clinic
          </Text>
        </VStack>
      </VStack>
    </Stack>
  )
}
