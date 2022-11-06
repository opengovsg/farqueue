import { useMemo, useState } from 'react'
import { Box, VStack } from '@chakra-ui/react'

import { SearchBar } from '~/common/SearchBar'

import { PatientRow, PatientTableHeader } from './PatientRow'
import { rows } from './rows'

export const ConceptThreePersonalized = (): JSX.Element => {
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
