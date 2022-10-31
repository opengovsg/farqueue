import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import { fmtTime } from '~/common/util/humanReadable'

import GoQrSvg from '../../assets/svgs/sample-go.svg'

interface WaitTime {
  label: string
  fullName: string
  wait: number
}

const waits: WaitTime[] = [
  { label: 'AH', fullName: 'Alexandra Hospital', wait: 100 },
  { label: 'CGH', fullName: 'Changi General Hospital', wait: 200 },
  { label: 'KTPH', fullName: 'Khoo Teck Puat Hospital', wait: 321 },
  { label: 'NTFGH', fullName: 'Ng Teng Fong General Hospital', wait: 600 },
  {
    label: 'NUH(A)',
    fullName: 'National University Hospital (Adult)',
    wait: 123,
  },
  { label: 'SGH', fullName: 'Singapore General Hospital', wait: 1230 },
  { label: 'SKH', fullName: 'Sengkang Hospital', wait: 1320 },
  { label: 'TTSH', fullName: 'Tan Tock Seng Hospital', wait: 120 },
]

export const DashboardPage = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('location')) setSearchParams({ location: 'AH' })
  })

  const currLocation = useMemo(() => {
    const currLabel = searchParams.get('location')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return waits.find(({ label }) => label === currLabel)!
  }, [searchParams])

  return (
    <HStack h="100vh" w="100vw">
      <VStack
        h="full"
        alignItems="center"
        spacing="72px"
        p={10}
        backgroundColor="neutral.100"
      >
        <Text textStyle="h1" textAlign="center">
          Estimated A&amp;E Waiting Time For Non-Critical Conditions
        </Text>

        <VStack spacing={4}>
          <Text color="neutral.800" textStyle="h3" textTransform="capitalize">
            {currLocation.fullName}
          </Text>
          <Text color="neutral.800" textStyle="display-1">
            {fmtTime(currLocation.wait * 60, {
              precision: 'hours',
              verbose: true,
            }).toLocaleUpperCase()}
          </Text>
        </VStack>

        <SimpleGrid columns={4} w="full" spacing={6}>
          {waits
            .filter(({ label }) => label != currLocation.label)
            .map(({ label, wait }) => (
              <GridItem key={label}>
                <VStack spacing={2}>
                  <Text
                    color="neutral.800"
                    textStyle="h3"
                    textTransform="capitalize"
                  >
                    {label}
                  </Text>
                  <Text
                    color="neutral.800"
                    textStyle="display-2"
                    fontWeight="medium"
                  >
                    {fmtTime(wait * 60, { precision: 'hours' })}
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
        spacing="72px"
        p={10}
        backgroundColor="white"
      >
        <Text textStyle="h1" textAlign="center">
          Check Nearby Open Clinics
        </Text>
        <Image src={GoQrSvg} alt="go-qr" />
        <Text textStyle="h6" textAlign="center" color="gray.500">
          go.gov.sg/clinics-near-ttsh
        </Text>
      </VStack>
    </HStack>
  )
}
