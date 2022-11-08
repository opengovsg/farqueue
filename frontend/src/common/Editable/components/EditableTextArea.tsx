import { Textarea, TextareaProps } from '@chakra-ui/react'

import { useEditable } from '../hooks'
export type EditableTextAreaProps = Omit<
  TextareaProps,
  'value' | 'onChange' | 'onSubmit'
>

export const EditableTextArea = (props: EditableTextAreaProps) => {
  const { closeOnBlur, value, setValue, onSubmit } = useEditable()

  return (
    <Textarea
      autoFocus
      textStyle="normal"
      {...props}
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        if (closeOnBlur) onSubmit()
      }}
    />
  )
}
