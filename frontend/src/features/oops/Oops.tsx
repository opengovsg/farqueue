import { BiArrowBack } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import { Icon, Image, Link, Text, VStack } from '@chakra-ui/react'

import { routes } from '~/common/constants/routes'

import OopsSvg from '../../assets/svgs/oops.svg'

export const Oops = (): JSX.Element => {
  return (
    <VStack h="100vh" w="100vw" spacing={10} justify="center" px="5vw">
      <Image src={OopsSvg} alt="oops" />
      <VStack>
        <Text textStyle="h2">Oops! Something went wrong.</Text>
        <Text textStyle="h2">We are working on it.</Text>
        {/* <Text color="neutral.700">
          Submit a support request{' '}
          <Link target="_blank" href="https://go.gov.sg/care360-support">
            here
          </Link>
        </Text> */}
      </VStack>
      <Link
        as={RouterLink}
        variant="plain"
        to={routes.index}
        display="flex"
        alignItems="center"
      >
        <Icon as={BiArrowBack} mr={2} /> Back to homepage
      </Link>
    </VStack>
  )
}
