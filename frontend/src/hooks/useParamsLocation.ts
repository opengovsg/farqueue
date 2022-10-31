import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useParamsLocation = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('location')) setSearchParams({ location: 'AH' })
  })

  return { location: searchParams.get('location') ?? 'AH' }
}
