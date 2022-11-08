import {
  InputProps,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
} from '@chakra-ui/react'

import { useEditable } from '../hooks'

export type EditableInputProps = Omit<InputProps, 'onSubmit' | 'value'>

/**
 * Switches to NumberInput when clicked, fires onSubmit when unfocused
 */
export const EditableNumberInput = ({
  ...props
}: EditableInputProps): JSX.Element => {
  const { closeOnBlur, value, setValue, onSubmit } = useEditable()

  return (
    <NumberInput
      value={value as number}
      onChange={(_valueAsString, valueAsNumber) => setValue(valueAsNumber)}
    >
      <NumberInputField
        autoFocus
        {...(props as NumberInputFieldProps)}
        onBlur={() => {
          if (closeOnBlur) onSubmit()
        }}
      />
    </NumberInput>
  )
}
