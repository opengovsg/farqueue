import { useMemo } from 'react'
import { Box, ChakraProps } from '@chakra-ui/react'
import dayjs, { Dayjs } from 'dayjs'

import { latestDayjs } from '~/common/util/dates'

export interface LastModifiedTextProps extends ChakraProps {
  lastRetrieved?: Dayjs
  lastEdited?: Dayjs
  lastEditedBy?: string
}
export const LastModifiedText = ({
  lastRetrieved,
  lastEdited,
  lastEditedBy,
  ...rest
}: LastModifiedTextProps) => {
  // return empty if none of the dates are valid
  const isValid = useMemo(
    () => lastRetrieved?.isValid() || lastEdited?.isValid(),
    [lastRetrieved, lastEdited],
  )
  if (!isValid) return <></>

  // at least one of the dates is valid, so `latestModifiedDate` must be defined
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const latestModifiedDate = latestDayjs(lastRetrieved, lastEdited)!

  return (
    <Box textStyle="caption-2" {...rest}>
      {latestModifiedDate.isSame(lastRetrieved)
        ? `Last retrieved on ${dayjs(latestModifiedDate).format(
            'DD/MM/YYYY HH:mm',
          )}`
        : `Last edited on ${dayjs(latestModifiedDate).format(
            'DD/MM/YYYY HH:mm',
          )} by ${lastEditedBy ?? 'unknown'}`}
    </Box>
  )
}
