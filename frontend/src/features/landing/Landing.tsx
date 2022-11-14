import { useNavigate } from 'react-router-dom'
import {
  Button,
  Flex,
  Link,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'

import { routes } from '~/common/constants/routes'

export const Landing = () => {
  const navigate = useNavigate()
  return (
    <VStack
      w="full"
      h="100vh"
      spacing={10}
      px="160px"
      py="80px"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Flex flexDir="row" justify="space-between" w="full">
        <Text textStyle="h1">Concept 1a - Comparing EDs</Text>
        <VStack align="start">
          <Button w="full" onClick={() => navigate(routes.concept1)}>
            The TV screen
          </Button>
          <Link href="https://form.gov.sg/6351103151634c00116ca800" isExternal>
            <Button>Contributor Form</Button>
          </Link>
        </VStack>
      </Flex>

      <Flex flexDir="row" justify="space-between" w="full">
        <Text textStyle="h1">Concept 1b - Historical ED averages</Text>
        <VStack align="start">
          <Button w="full" onClick={() => navigate(routes.concept2)}>
            The TV screen
          </Button>
        </VStack>
      </Flex>

      <Flex flexDir="row" justify="space-between" w="full">
        <Text textStyle="h1">Concept 2 - Where is my NOK?</Text>
        <VStack align="start">
          <Button onClick={() => navigate(routes.concept3)} w="full">
            The TV screen
          </Button>
          <Button
            onClick={() => navigate(`${routes.concept3}/S2608398B`)}
            w="full"
          >
            User website
          </Button>
          <Link
            href="https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Emergency/Pages/Emergency%20Medicine.aspx"
            isExternal
            w="full"
          >
            <Button w="full">FAQ website</Button>
          </Link>
        </VStack>
      </Flex>
    </VStack>
  )
}
