import { Box, Text, VStack } from '@chakra-ui/react'

import { PatientRow, PatientTableHeader } from './PatientRow'
import { rows } from './rows'

export const ConceptThreeTv = (): JSX.Element => {
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

      <Box h={10} w="full" />
      <PatientTableHeader />
      {rows.map((row) => (
        <PatientRow key={row.uin} {...row} />
      ))}
    </VStack>
  )
}
