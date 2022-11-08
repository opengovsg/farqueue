import { ReactNode } from 'react'
import { Provider } from 'jotai'

import {
  editCloseOnBlurAtom,
  editValueAtom,
  isDisabledAtom,
  onSubmitEditableAtom,
  previousValueAtom,
} from './atoms'
import { EditableInput, EditablePreview } from './components'
import { useEditable } from './hooks'

export interface EditableProps {
  editView?: ReactNode
  plainView?: ReactNode
  emptyView?: ReactNode
  initialValue?: unknown
  onSubmit: (value: unknown) => void
  isDisabled?: boolean
  closeOnBlur?: boolean
}

export const Editable = ({
  initialValue,
  onSubmit,
  isDisabled = false,
  closeOnBlur = true,
  editView,
  plainView,
  emptyView,
}: EditableProps) => {
  return (
    <Provider
      key={initialValue as string} // Force re-render if initialValue changes
      initialValues={[
        [editValueAtom, initialValue],
        [previousValueAtom, initialValue],
        [onSubmitEditableAtom, { onSubmit }],
        [editCloseOnBlurAtom, closeOnBlur],
        [isDisabledAtom, isDisabled],
      ]}
    >
      <EditableBody {...{ editView, plainView, emptyView, initialValue }} />
    </Provider>
  )
}

const EditableBody = ({
  editView = <EditableInput />,
  plainView = <EditablePreview />,
  emptyView = plainView,
}: Pick<
  EditableProps,
  'editView' | 'plainView' | 'emptyView' | 'initialValue'
>): JSX.Element => {
  const { isEditing, value } = useEditable()
  return <>{isEditing ? editView : value ? plainView : emptyView}</>
}
