import { useCallback } from 'react'
import { useAtom } from 'jotai'

import {
  editCloseOnBlurAtom,
  editValueAtom,
  isDisabledAtom,
  isEditingAtom,
  onSubmitEditableAtom,
  previousValueAtom,
} from './atoms'

export const useEditable = () => {
  const [isEditing, setIsEditing] = useAtom(isEditingAtom)
  const [{ onSubmit: onSubmitRaw }] = useAtom(onSubmitEditableAtom)
  const [value, setValue] = useAtom(editValueAtom)
  const [previousValue, setPreviousValue] = useAtom(previousValueAtom)
  const [closeOnBlur] = useAtom(editCloseOnBlurAtom)
  const [isDisabled] = useAtom(isDisabledAtom)

  const onSubmit = useCallback(() => {
    if (previousValue !== value) onSubmitRaw(value)
    setIsEditing(false)
  }, [onSubmitRaw, previousValue, setIsEditing, value])

  // hooks execute asynchronously, so updating state + submitting in the same op is not straightforward
  const onSubmitValue = useCallback(
    (newValue: string | string[]) => {
      setValue(newValue)
      if (previousValue !== newValue) onSubmitRaw(newValue)
      setIsEditing(false)
    },
    [onSubmitRaw, setValue, previousValue, setIsEditing],
  )

  const onCancel = useCallback(() => {
    setIsEditing(false)
    setValue(previousValue)
  }, [setValue, previousValue, setIsEditing])

  // Like onCancel, but less confirmatory (e.g. used for temporary onBlur)
  const onClose = useCallback(() => {
    setIsEditing(false)
  }, [setIsEditing])

  const onDelete = useCallback(() => {
    setValue('')
    onSubmitRaw('')
    setIsEditing(false)
  }, [setValue, onSubmitRaw, setIsEditing])

  const onEdit = useCallback(() => {
    setIsEditing(true)
    setPreviousValue(value)
  }, [value, setPreviousValue, setIsEditing])

  return {
    value,
    closeOnBlur,
    isEditing,
    isDisabled,
    setValue,
    onSubmit,
    onSubmitValue,
    onCancel,
    onClose,
    onDelete, // Only works for string editables
    onEdit,
  }
}
