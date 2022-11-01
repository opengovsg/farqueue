import { FormEvent } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Searchbar } from '@opengovsg/design-system-react'

export interface SearchBarProps {
  searchTerm: string
  onSearch: (searchTerm: string) => void
  placeholder?: string
}

export const SearchBar = ({
  searchTerm,
  onSearch,
  placeholder,
}: SearchBarProps) => {
  return (
    <InputGroup>
      <Searchbar
        onSearch={onSearch}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          onSearch(event.currentTarget.value)
        }}
        value={searchTerm}
        isExpanded
        placeholder={placeholder}
        fontSize="14px"
        border="1px solid #BABECB"
      />
      {searchTerm !== '' && (
        <InputRightElement>
          <IconButton
            size="xs"
            aria-label="Clear search"
            icon={<CloseIcon boxSize="12px" />}
            variant="clear"
            onClick={() => {
              onSearch('')
            }}
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}
