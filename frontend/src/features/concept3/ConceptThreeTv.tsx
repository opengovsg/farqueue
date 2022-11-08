import { useEffect } from 'react'
import { Box, Collapse, Text, useDisclosure, VStack } from '@chakra-ui/react'

import { PatientRow, PatientTableHeader } from './PatientRow'
import { rows } from './rows'

export const ConceptThreeTv = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    const intervalId = setInterval(() => onToggle(), 5000)
    return () => clearInterval(intervalId)
  }, [onToggle])

  return (
    <VStack
      h="100vh"
      w="100vw"
      alignItems="center"
      spacing={4}
      p={10}
      backgroundColor="neutral.100"
    >
      <Text textStyle="h1">Patients in-progress</Text>
      <Box h={10} w="full" />
      <PatientTableHeader />
      {rows.map((row, idx) => (
        <Box w="full" key={row.uin}>
          <Collapse in={idx % 2 === 0 ? isOpen : !isOpen} animateOpacity>
            <PatientRow {...row} />
          </Collapse>
        </Box>
      ))}
    </VStack>
  )
}
