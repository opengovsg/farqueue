import { useMemo, useRef, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useRadioGroup,
  VStack,
} from '@chakra-ui/react'

import { routes } from '~/common/constants/routes'
import { SearchBar } from '~/common/SearchBar'

import { InstitutionCard } from './InstitutionCard'

const institutionCards = [
  {
    id: 'AH',
    name: 'Alexandra Hospital',
    busyness: 'short',
    address: '378 Alexandra Rd, Singapore 159964',
    distance: 5600,
  },
  {
    id: 'SGH',
    name: 'Singapore General Hospital',
    busyness: 'average',
    address: '31 Third Hospital Ave, Singapore 168753',
    distance: 180,
  },
  {
    id: 'SKH',
    name: 'Sengkang General Hospital',
    busyness: 'short',
    address: '3110 Sengkang E Way, Singapore 544886',
    distance: 17450,
  },
  {
    id: 'KTPH',
    name: 'Khoo Teck Puat Hospital',
    busyness: 'average',
    address: '90 Yishun Central, Singapore 768828',
    distance: 9230,
  },
  {
    id: 'TTSH',
    name: 'Tan Tock Seng Hospital',
    busyness: 'long',
    address: '311 Jln Tan Tock Seng, Singapore 308433',
    distance: 3480,
  },
  {
    id: 'NUH(A)',
    name: 'National University Hospital (Adult)',
    busyness: 'long',
    address: '5 Lower Kent Ridge Rd, Singapore 119074',
    distance: 8350,
  },
  {
    id: 'NTFGH',
    name: 'Ng Teng Fong General Hospital',
    busyness: 'long',
    address: '1 Jurong East Street 21, Singapore 609606',
    distance: 14230,
  },
  {
    id: 'CGH',
    name: 'Changi General Hospital',
    busyness: 'long',
    address: '2 Simei St 3, Singapore 529889',
    distance: 21610,
  },
] as const

export const DiverterC = (): JSX.Element => {
  const selectionRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [selected, setSelected] = useState<string | undefined>()

  const { value: selectedInstitutionId, getRadioProps } = useRadioGroup({
    name: 'institution',
    value: selected,
    onChange: (nextValue) => setSelected(nextValue),
  })

  const relevantInsitutions = useMemo(() => {
    if (searchTerm === '') return []
    else if (searchTerm.length === 6 && /^\d+$/.test(searchTerm))
      return institutionCards

    return institutionCards
      .filter(
        ({ name, id }) =>
          name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          id.toLowerCase().startsWith(searchTerm.toLowerCase()),
      )
      .map(({ distance: _distance, ...rest }) => ({ ...rest }))
  }, [searchTerm])

  return (
    <VStack h="100vh" w="100vw">
      <VStack spacing={8} p={6} backgroundColor="neutral.100">
        <Text textStyle={{ base: 'h3', md: 'h1' }}>
          Check A&amp;E wait times
        </Text>
        <Text>{`Type your postal code to see wait times at the closest A&E or type a name to find a specific hospital`}</Text>
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          placeholder="Type your postal code or hospital name"
        />
      </VStack>
      <Container maxW="container.xl" paddingInline={6}>
        <VStack
          w={{ base: '100%', lg: '70%' }}
          align="stretch"
          spacing={4}
          pb={`${selectionRef.current?.clientHeight ?? 0}px`}
        >
          {relevantInsitutions.map((institution) => {
            const radio = getRadioProps({
              value: institution.id.toString(),
            })
            return (
              <InstitutionCard
                key={institution.id}
                {...radio}
                institution={institution}
              />
            )
          })}
        </VStack>
      </Container>
      <Flex
        pos="fixed"
        zIndex={1}
        bottom={0}
        bg="white"
        w="100%"
        p={6}
        pt={4}
        boxShadow="0px -1px 6px rgba(0, 0, 0, 0.15)"
        borderTopRadius={{ base: 4, md: 16 }}
        visibility={selectedInstitutionId ? 'visible' : 'hidden'}
        ref={selectionRef}
      >
        <Container maxW="container.xl" px={0}>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              mb={{ base: 4, md: 0 }}
              flex={1}
              w={{ base: '100%', md: 'auto' }}
            >
              <Text textStyle="body-1">
                You’ve selected{' '}
                <Text as="strong" textTransform="uppercase">
                  {institutionCards.find(({ id }) => id === selected)?.name}
                </Text>
              </Text>
            </Box>
            <Button
              w={{ base: '100%', md: '25%' }}
              h="53px"
              onClick={() =>
                navigate({
                  pathname: routes.concept1b,
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  search: `?${createSearchParams({
                    ...(!!selected && { selected }),
                  })}`,
                })
              }
            >
              See live wait times
            </Button>
          </Flex>
        </Container>
      </Flex>
    </VStack>
  )
}
