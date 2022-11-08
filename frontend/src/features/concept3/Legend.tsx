import { BiInfoCircle, BiPhone } from 'react-icons/bi'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import {
  Box,
  ButtonGroup,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'

import { PatientRowProps } from './PatientRow'

const ICONS = [
  {
    icon: <MdOutlineHealthAndSafety />,
    label: 'Seeing a doctor',
    accessor: (
      props: Pick<PatientRowProps, 'isContactable' | 'isSeeingDoctor'>,
    ) => props.isSeeingDoctor,
  },
  {
    icon: <BiPhone />,
    label: 'Contactable',
    accessor: (
      props: Pick<PatientRowProps, 'isContactable' | 'isSeeingDoctor'>,
    ) => props.isContactable,
  },
] as const

export const Legend = (): JSX.Element => {
  return (
    <Popover placement="right" trigger="hover">
      <Box px={2}>
        <PopoverTrigger>
          <Box w="fit-content" fontSize="1.25rem">
            <BiInfoCircle />
          </Box>
        </PopoverTrigger>
      </Box>
      <Portal>
        <PopoverContent
          bg="neutral.100"
          borderColor="neutral.100"
          shadow="md"
          w="210px"
        >
          <PopoverArrow bg="neutral.100" />
          <PopoverBody p={4}>
            <VStack alignItems="flex-start" spacing={2}>
              {ICONS.map(({ icon, label }) => (
                <HStack key={label} spacing={6}>
                  {icon}
                  <Text textStyle="fieldText">{label}</Text>
                </HStack>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export const LegendRow = (
  props: Pick<PatientRowProps, 'isContactable' | 'isSeeingDoctor'>,
): JSX.Element => {
  return (
    <ButtonGroup>
      {ICONS.map(({ icon, label, accessor }) => {
        return (
          <Tooltip key={label} label={label} hasArrow>
            <Box
              fontSize="1.25rem"
              color={accessor(props) ? 'neutral.700' : 'neutral.300'}
            >
              {icon}
            </Box>
          </Tooltip>
        )
      })}
    </ButtonGroup>
  )
}
