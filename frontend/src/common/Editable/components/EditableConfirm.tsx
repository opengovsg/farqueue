import { BiCheck } from 'react-icons/bi'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

import { useEditable } from '../hooks'

export type EditableConfirmProps = Omit<IconButtonProps, 'aria-label'>

export const EditableConfirm = (props: EditableConfirmProps) => {
  const { onSubmit } = useEditable()

  return (
    <IconButton
      aria-label="confirm"
      variant="neutral"
      icon={<BiCheck />}
      onClick={() => onSubmit()}
      {...props}
    />
  )
}
