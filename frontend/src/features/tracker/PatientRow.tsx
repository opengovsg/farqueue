import { useMemo } from 'react'
import {
  ChakraProps,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import { LegendExplained } from './Legend'

export interface PatientRowProps {
  name: string
  uin: string
  wait: string
  location: string
  isContactable: boolean
  isSeeingDoctor: boolean
}

export const PatientRow = (props: PatientRowProps) => {
  const { name, uin, wait, location } = props

  const maskedUin = useMemo(() => {
    return uin[0] + 'XXXX' + uin.slice(5)
  }, [uin])

  return (
    <HStack
      textStyle="body-2"
      w="full"
      p={4}
      spacing={6}
      border="solid 1px #E9E9E9"
      borderRadius="md"
    >
      <VStack spacing={1} alignItems="flex-start" w={36} flexShrink={0}>
        <Text>{name}</Text>
        <Text color="neutral.700">{maskedUin}</Text>
      </VStack>
      <SimpleGrid columns={3} w="full">
        <GridItem {...equalSizingProps}>
          <Text noOfLines={1}>{location}</Text>
          <Text noOfLines={1} color="neutral.600">
            {wait}
          </Text>
        </GridItem>
        <GridItem {...equalSizingProps}>
          <LegendExplained {...props} />
        </GridItem>
        <GridItem {...equalSizingProps} noOfLines={1}>
          {'something else'}
        </GridItem>
      </SimpleGrid>
    </HStack>
  )
}

// This is a static row whose alignment matches RelativeCardHeader
export const PatientTableHeader = () => {
  const titles = ['Currently seen at', 'Status', 'More info']

  return (
    <HStack
      textStyle="body-2"
      w="full"
      fontWeight="medium"
      spacing={6}
      pl="16px"
      pr="16px"
    >
      <Text w={36} flexShrink={0}>
        Patient
      </Text>
      <SimpleGrid columns={titles.length} w="full">
        {titles.map((title) => (
          <GridItem key={title} {...equalSizingProps}>
            {title}
          </GridItem>
        ))}
      </SimpleGrid>
    </HStack>
  )
}

const equalSizingProps: ChakraProps = {
  noOfLines: 1,
  textAlign: 'left',
}
