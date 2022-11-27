import { useParams } from 'react-router-dom'
import {
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'

import { CopyButton } from '~/common/CopyButton'

export const ShareLink = () => {
  const { uin } = useParams()
  return (
    <Stack w="full">
      <Heading alignSelf="start" color="#445072" size="sm">
        Share this link
      </Heading>
      <Stack direction="row" align="center">
        <InputGroup>
          <Input
            isReadOnly
            value={`https://wait.beta.gov.sg/concept2/${uin!}`}
          />
          <InputRightElement>
            <CopyButton
              colorScheme="secondary"
              stringToCopy={`https://wait.beta.gov.sg/concept2/${uin!}`}
              aria-label="Copy respondent form link"
            />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Stack>
  )
}
