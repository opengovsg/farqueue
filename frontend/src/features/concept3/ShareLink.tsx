import {
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'

import { CopyButton } from '~/common/CopyButton'

export const ShareLink = () => {
  return (
    <Stack w="full">
      <Heading alignSelf="start" color="#445072" size="sm">
        Share this link
      </Heading>
      <Stack direction="row" align="center">
        <InputGroup>
          <Input isReadOnly value={'https://www.google.com'} />
          <InputRightElement>
            <CopyButton
              colorScheme="secondary"
              stringToCopy={'https://www.google.com'}
              aria-label="Copy respondent form link"
            />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Stack>
  )
}
