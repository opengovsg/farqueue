import dayjs from 'dayjs'

export const fmtDate = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY')
}

export const fmtDateTime = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm')
}

type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds'
export const fmtTime = (
  numSeconds: number,
  {
    precision = 'seconds',
    verbose = false,
  }: { precision?: TimeUnit; verbose?: boolean } = {},
): string => {
  const days = Math.floor(numSeconds / 86400)
  const hours = Math.floor((numSeconds - days * 86400) / 3600)
  const minutes = Math.floor((numSeconds - days * 86400 - hours * 3600) / 60)
  const seconds = numSeconds % 60

  const accum = []
  if (seconds > 0 && ['seconds'].includes(precision))
    accum.push(
      verbose
        ? `${seconds} ${seconds <= 1 ? 'second' : 'seconds'}`
        : `${seconds}s`,
    )

  if (minutes > 0 && ['minutes', 'seconds'].includes(precision))
    accum.push(
      verbose
        ? `${minutes} ${minutes <= 1 ? 'minute' : 'minutes'}`
        : `${minutes}m`,
    )

  if (hours > 0 && ['hours', 'minutes', 'seconds'].includes(precision))
    accum.push(
      verbose ? `${hours} ${hours <= 1 ? 'hour' : 'hours'}` : `${hours}h`,
    )

  if (days > 0)
    accum.push(verbose ? `${days} ${days <= 1 ? 'day' : 'days'}` : `${days}d`)

  return accum.join(' ')
}

export const fmtBytes = (numBytes: number): string => {
  if (numBytes == 0) return '0 Bytes'
  const k = 1024
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(numBytes) / Math.log(k))
  const num = numBytes / Math.pow(k, i)
  const dp = 2 - Math.floor(Math.log10(num))
  return `${num.toFixed(dp)} ${units[i]}`
}

// Capitalizes every start of word, including punctuation and spaces
export const frontCase = (str: string): string => {
  return str.toLowerCase().replace(/(^\w|\W\w)/g, (m) => m.toUpperCase())
}

export const fmtCurrency = (value: number, round = false): string => {
  const formatter = new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    ...(round
      ? {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }
      : {}),
  })
  return formatter.format(value)
}

export const fmtPercentage = (value: number, round = false): string => {
  const percentage = value * 100
  return round ? `${Math.round(percentage)}%` : `${percentage.toFixed(2)}%`
}
