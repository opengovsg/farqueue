import {
  // eslint-disable-next-line no-restricted-imports
  useToast as useOgpToast,
  UseToastProps,
} from '@opengovsg/design-system-react'

const DEFAULT_TOAST_OPTIONS: UseToastProps = {
  duration: 3000,
  isClosable: true,
}

export const useToast = (props: UseToastProps = {}) => {
  return useOgpToast({ ...DEFAULT_TOAST_OPTIONS, ...props })
}
