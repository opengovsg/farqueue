import { useNavigate } from 'react-router-dom'
import { Button, Flex, StackDivider, Text, VStack } from '@chakra-ui/react'

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
        <Text textStyle="h1">Concept 1 - Comparing EDs</Text>
        <VStack align="start">
          <Button w="full" onClick={() => navigate(routes.concept1)}>
            The TV screen
          </Button>
          <Button onClick={() => navigate(routes.concept1Contribute)}>
            Contributor Form
          </Button>
        </VStack>
      </Flex>

      <Flex flexDir="row" justify="space-between" w="full">
        <Text textStyle="h1">Concept 2 - Historical ED averages</Text>
        <VStack align="start">
          <Button w="full" onClick={() => navigate(routes.concept2)}>
            The TV screen
          </Button>
        </VStack>
      </Flex>

      <Flex flexDir="row" justify="space-between" w="full">
        <Text textStyle="h1">Concept 3 - Where is my NOK?</Text>
        <VStack align="start">
          <Button onClick={() => navigate(routes.concept3)}>
            User website
          </Button>
          <Button>FAQ website</Button>
        </VStack>
      </Flex>
    </VStack>
  )
}
