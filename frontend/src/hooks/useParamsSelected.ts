import { useSearchParams } from 'react-router-dom'

export const useParamsSelected = () => {
  const [searchParams] = useSearchParams()

  return { selected: searchParams.get('selected') }
}
