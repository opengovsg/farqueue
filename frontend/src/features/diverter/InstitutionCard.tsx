import { BiMap } from 'react-icons/bi'
import {
  Box,
  HStack,
  Text,
  useRadio,
  UseRadioProps,
  VStack,
} from '@chakra-ui/react'

export interface Timeslot {
  start: Date | string
  end: Date | string
}

const formatDistance = (distance?: number): string => {
  if (!distance) return '0m'

  const unit = distance >= 1000 ? 'km' : 'm'
  const fixed =
    unit === 'km' ? +(distance / 1000).toFixed(1) : +distance.toFixed(0)
  return Intl.NumberFormat('en-US').format(fixed) + unit
}

export const InstitutionCard = ({
  institution,
  ...props
}: UseRadioProps & {
  institution: {
    name: string
    busyness: 'short' | 'average' | 'long'
    address: string
    distance?: number
  }
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const { name, address, distance, busyness } = institution
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} hidden />
      <VStack
        cursor="pointer"
        align="stretch"
        p={4}
        bg={
          busyness === 'short'
            ? 'green.50'
            : busyness === 'average'
            ? 'yellow.50'
            : 'red.50'
        }
        border="solid 1px"
        borderRadius="4px"
        borderColor="neutral.400"
        boxSizing="border-box"
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.1);"
        _checked={{
          borderColor: 'white',
          boxShadow: '0 0 0 3px #276EF1',
        }}
        {...checkbox}
      >
        <Text textStyle="subhead" fontWeight={700} textTransform="uppercase">
          {name}
        </Text>
        <Text textStyle="body-1" textTransform="capitalize">
          {address.toLowerCase()}
        </Text>
        <Text fontSize="0.875rem">Wait times are {busyness}</Text>

        {!!distance && (
          <HStack
            fontSize="0.875rem"
            lineHeight="1.25rem"
            letterSpacing="-0.006em"
            color="neutral.700"
            alignItems="center"
          >
            <BiMap />
            <Text>{formatDistance(distance)} away</Text>
          </HStack>
        )}
      </VStack>
    </Box>
  )
}
