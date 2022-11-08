import { BiTrash } from 'react-icons/bi'
import { IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react'

import { useEditable } from '../hooks'

export type EditableDeleteProps = Omit<IconButtonProps, 'aria-label'> & {
  help?: string
}

export const EditableDelete = (props: EditableDeleteProps) => {
  const { onDelete } = useEditable()

  return (
    <Tooltip hasArrow label={props.help || 'Delete'} placement="auto-start">
      <IconButton
        aria-label="delete"
        icon={<BiTrash />}
        colorScheme="danger"
        variant="link"
        onClick={() => {
          onDelete()
        }}
        {...props}
      />
    </Tooltip>
  )
}
