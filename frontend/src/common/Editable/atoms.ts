import { atom } from 'jotai'

export const editCloseOnBlurAtom = atom<boolean>(false)
export const editValueAtom = atom<unknown>(undefined)
export const previousValueAtom = atom<unknown>(undefined)
export const isEditingAtom = atom(false)
export const isDisabledAtom = atom(false)

export const onSubmitEditableAtom = atom<{
  onSubmit: (value: unknown) => void
}>({ onSubmit: () => undefined })
