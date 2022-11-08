import { Dayjs } from 'dayjs'

export const latestDayjs = (
  date1?: Dayjs,
  date2?: Dayjs,
): Dayjs | undefined => {
  if (!date1) return date2
  if (!date2) return date1
  return date1.isAfter(date2) ? date1 : date2
}
