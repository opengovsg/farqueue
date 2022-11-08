import { useCallback, useMemo } from 'react'
import { StackProps, VStack } from '@chakra-ui/react'

import { Editable, EditableProps } from '../Editable'

export type EditableListProps = Pick<
  EditableProps,
  'emptyView' | 'plainView' | 'editView'
> &
  Omit<StackProps, 'onSubmit'> & {
    values: string[]
    onSubmit: (newValues: string[]) => void
  }
/**
 * Displays multiple Editables (Input) from a string[]
 * Relies on RQ to have set up the invalidation upon mutation
 */
export const EditableList = ({
  values: valuesProp,
  onSubmit: onSubmitProp,
  plainView,
  editView,
  emptyView,
  ...rest
}: EditableListProps): JSX.Element => {
  // Here's the hack - we use empty string as placeholder for deleted values
  const onSubmit = useCallback(
    (newValues: string[]) => {
      onSubmitProp(newValues.filter((v) => !!v))
    },
    [onSubmitProp],
  )

  // We always drop empty strings, but append one to the end to allow users to add new values
  const values = useMemo(() => [...valuesProp, ''], [valuesProp])

  const EditableListElement = ({ idx }: { idx: number }): JSX.Element => {
    return (
      <Editable
        onSubmit={(value) =>
          onSubmit([
            ...values.slice(0, idx),
            value as string, // replace just myself with new value
            ...values.slice(idx + 1),
          ])
        }
        initialValue={values[idx]}
        closeOnBlur={false}
        plainView={plainView}
        editView={editView}
        emptyView={emptyView}
      />
    )
  }

  return (
    <VStack {...rest}>
      {[...Array(values.length).keys()].map((idx) => (
        <EditableListElement key={idx} idx={idx} />
      ))}
    </VStack>
  )
}
