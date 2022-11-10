import { useMemo } from 'react'
import { VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { TimelineProps, TimelineRowProps } from './timeline.types'
import { TimelineSegment } from './TimelineSegment'

export const Timeline = ({ rows }: TimelineProps) => {
  const segments = useMemo(() => {
    const accum = new Map<string, TimelineRowProps[]>()

    for (const row of rows.sort(
      (a, b) =>
        (a.happenedAt?.valueOf() ?? dayjs().valueOf() + 1) -
        (b.happenedAt?.valueOf() ?? dayjs().valueOf() + 1),
    )) {
      const day = row.happenedAt?.format('YYYY-MM-DD') ?? 'Pending'
      if (!accum.has(day)) accum.set(day, [])
      accum.get(day)?.push(row)
    }

    function renameSpecialDays(label: string) {
      switch (label) {
        case dayjs().format('YYYY-MM-DD'):
          return 'Today'
        case dayjs().subtract(1, 'day').format('YYYY-MM-DD'):
          return 'Yesterday'
        default:
          return label
      }
    }

    return Array.from(accum.entries()).map(([label, rows]) => ({
      label: renameSpecialDays(label),
      rows,
    }))
  }, [rows])

  return (
    <VStack align="start" width="full" spacing={8}>
      {segments.map((s) => (
        <TimelineSegment key={s.label} {...s} />
      ))}
    </VStack>
  )
}
