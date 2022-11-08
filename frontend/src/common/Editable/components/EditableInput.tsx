import { Input, InputProps } from '@chakra-ui/react'

import { useEditable } from '../hooks'

export type EditableInputProps = Omit<InputProps, 'onSubmit' | 'value'>

/**
 * Displays as regular text
 * Switches to Input when clicked, fires onSubmit when unfocused
 */
export const EditableInput = ({
  ...props
}: EditableInputProps): JSX.Element => {
  const { closeOnBlur, value, setValue, onSubmit } = useEditable()

  return (
    <Input
      autoFocus
      value={value as string}
      {...props}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        if (closeOnBlur) onSubmit()
      }}
    />
  )
}
