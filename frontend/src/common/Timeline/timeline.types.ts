import { Dayjs } from 'dayjs'

export type TimelineRowProps = {
  headerText: string
  happenedAt?: Dayjs // undefined => future
}

export interface TimelineSegmentProps {
  label: string
  rows: TimelineRowProps[]
}

export interface TimelineProps {
  rows: TimelineRowProps[]
}
