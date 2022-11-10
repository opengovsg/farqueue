import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import dayjs from 'dayjs'

import EnvelopeSvg from '~/assets/svgs/envelope.svg'
import {
  Editable,
  EditableCancel,
  EditableConfirm,
  EditableDelete,
  EditablePreview,
  EditableTextArea,
  useEditable,
} from '~/common/Editable'
import { LastModifiedText } from '~/common/LastModifiedText'
import { useToast } from '~/hooks/useToast'

export const LeaveNoteEditable = (): JSX.Element => {
  const editedAt = dayjs()
  const [note, setNote] = useState('')

  const toast = useToast()
  const maxLength = 200

  const DiagnosisPlainView = (): JSX.Element => {
    return (
      <VStack alignItems="flex-start" spacing={4} w="full" textStyle="normal">
        <EditablePreview />
        <LastModifiedText lastEdited={editedAt ? dayjs(editedAt) : undefined} />
      </VStack>
    )
  }

  const DiagnosisEditView = (): JSX.Element => {
    const { value } = useEditable()

    return (
      <VStack alignItems="flex-start" spacing={2} w="full" pt={1}>
        <EditableTextArea
          maxLength={maxLength}
          resize="none"
          placeholder="e.g. Speaks Hokkien and some Mandarin, has difficulty hearing."
        />
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <ButtonGroup mt={2}>
            <EditableConfirm />
            <EditableCancel />
            <EditableDelete help="Remove the note" />
          </ButtonGroup>
          <Text textStyle="body-2">
            {maxLength - ((value as string) ?? '').length} characters left
          </Text>
        </HStack>
      </VStack>
    )
  }

  const DiagnosisEmptyView = (): JSX.Element => {
    const { onEdit } = useEditable()

    return (
      <VStack alignItems="center" spacing={2} pb={10}>
        <Image src={EnvelopeSvg} alt="envelope" />
        <Box fontWeight="medium">No note added yet.</Box>
        <Button p={0} variant="link" rightIcon={<BiPlus />} onClick={onEdit}>
          Leave a note for our staff
        </Button>
      </VStack>
    )
  }

  return (
    <Editable
      closeOnBlur={false}
      initialValue={note}
      onSubmit={(content) => {
        setNote(content as string)
        toast({
          title: 'Note saved. It will be viewable by our staff.',
          status: 'success',
        })
      }}
      editView={<DiagnosisEditView />}
      plainView={<DiagnosisPlainView />}
      emptyView={<DiagnosisEmptyView />}
    />
  )
}
