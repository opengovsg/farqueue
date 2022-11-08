import { BiX } from 'react-icons/bi'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

import { useEditable } from '../hooks'

export type EditableCancelProps = Omit<IconButtonProps, 'aria-label'>

export const EditableCancel = (props: EditableCancelProps) => {
  const { onCancel } = useEditable()

  return (
    <IconButton
      aria-label="cancel"
      variant="neutral"
      icon={<BiX />}
      onClick={() => onCancel()}
      {...props}
    />
  )
}
