import { useMemo, useState } from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'

import { SearchBar } from '~/common/SearchBar'

import { PatientRow, PatientRowProps, PatientTableHeader } from './PatientRow'

const rows: PatientRowProps[] = [
  {
    name: 'Harriet Loo',
    uin: 'S1234567A',
    wait: '14 min ago',
    location: 'Gastroenterology Dept.',
    isContactable: true,
    isSeeingDoctor: true,
  },
  {
    name: 'Scarlett Red',
    uin: 'S26028342B',
    wait: '19 min ago',
    location: 'Radiology Dept.',
    isContactable: false,
    isSeeingDoctor: true,
  },
  {
    name: 'Bustard Lee',
    uin: 'T1234567A',
    wait: '31 min ago',
    location: 'Pharmacy',
    isContactable: false,
    isSeeingDoctor: false,
  },
  {
    name: 'Bob Tan',
    uin: 'T1238120B',
    wait: '45 min ago',
    location: 'Observation',
    isContactable: true,
    isSeeingDoctor: false,
  },
]

export const ConceptThree = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  return (
    <VStack
      h="100vh"
      w="100vw"
      alignItems="center"
      spacing={4}
      p={10}
      backgroundColor="neutral.100"
    >
      <Text textStyle="h1">Patient Dashboard</Text>
      <SearchBar
        placeholder="e.g. Tan Ah Kow"
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <Box h={10} w="full" />
      <PatientTableHeader />
      {filteredRows.map((row) => (
        <PatientRow key={row.uin} {...row} />
      ))}
    </VStack>
  )
}
