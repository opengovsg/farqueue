import { useMemo } from 'react'
import { BiPencil } from 'react-icons/bi'
import { Box, HStack, Text, TextProps } from '@chakra-ui/react'

import { EMPTY_LABEL } from '~/common/constants'

import { useEditable } from '../hooks'

const textProps: TextProps = {
  textStyle: 'normal',
  whiteSpace: 'pre-line',
  w: 'full',
}

/**
 * Displays as regular text
 * Switches to Input when clicked, fires onSubmit when unfocused
 */
export const EditablePreview = (): JSX.Element => {
  const { value, onEdit, isDisabled } = useEditable()

  // '', [], undefined are displayed as EMPTY_LABEL
  // Array is comma delimited, string is as-is
  const prettyValue = useMemo(() => {
    if (typeof value === 'object') {
      const valArr = value as string[]
      return valArr && valArr.length > 0 ? valArr.join(', ') : EMPTY_LABEL
    }

    if (value === '') return EMPTY_LABEL
    return (value ?? EMPTY_LABEL) as string
  }, [value])

  if (isDisabled) return <Text {...textProps}>{prettyValue}</Text>

  return (
    <HStack
      w="full"
      role="group"
      spacing={0}
      _hover={{ cursor: 'pointer' }}
      onClick={onEdit}
      alignItems="flex-start"
      py={1}
    >
      <Text {...textProps} _groupHover={{ color: 'primary.500' }} pr={2}>
        {prettyValue}
      </Text>
      <Box color={'primary.500'}>
        <BiPencil color="currentColor" />
      </Box>
    </HStack>
  )
}
