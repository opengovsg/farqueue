import { useSearchParams } from 'react-router-dom'

export const useParamsLocation = () => {
  const [searchParams] = useSearchParams()

  return { location: searchParams.get('location') ?? 'AH' }
}
