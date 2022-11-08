import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { WarningTwoIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  HStack,
  Link,
  Skeleton,
  StackItem,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'

const ErrorBoundaryCard = ({
  message = 'Something went wrong! Please try again or contact us for help if the problem persists',
  ...rest
}: {
  message?: string
} & StackProps) => {
  return (
    <Link
      href="https://go.gov.sg/care360-support"
      target="_blank"
      variant="plain"
    >
      <HStack {...rest} role="group" textDecor="none" color="red.500">
        <WarningTwoIcon />
        <Text
          textDecor="blink"
          _groupHover={{
            textDecor: 'underline',
            textUnderlineOffset: '0.125rem',
          }}
        >
          {message}
        </Text>
      </HStack>
    </Link>
  )
}

export interface AccordionCardProps extends AccordionProps {
  children: JSX.Element
  header?: JSX.Element
  isCollapsible?: boolean
  hideHelperText?: boolean
  /**
   * Clicking anywhere on the header of the accordion card will toggle expand/collapse.
   */
  shouldHeaderToggle?: boolean
  isLazy?: boolean
}

export const AccordionCard = ({
  children,
  header = <></>,
  isCollapsible = true,
  defaultIndex = [0], // starts with content visible
  hideHelperText = false,
  shouldHeaderToggle = true,
  isLazy = false,
  ...rest
}: AccordionCardProps) => {
  // Styling for the little caret plus helper text
  const AccordionToggle = ({ isExpanded }: { isExpanded: boolean }) => {
    if (hideHelperText) return <AccordionIcon />

    return (
      <HStack
        fontSize="14px"
        _groupHover={{ textDecoration: 'underline' }}
        alignItems="center"
      >
        <Text>{isExpanded ? 'Collapse' : 'Show'}</Text>
        <AccordionIcon />
      </HStack>
    )
  }

  const ContentSkeleton = () => {
    return (
      <VStack w="full" overflow="hidden" align="flex-start">
        <Skeleton height={6} width={250} />
        <Skeleton height={4} w={300} />
        <Skeleton height={4} w={300} />
      </VStack>
    )
  }

  return (
    <Accordion
      width="full"
      defaultIndex={defaultIndex}
      {...rest}
      allowMultiple={isCollapsible}
    >
      <AccordionItem>
        {({ isExpanded }) => (
          <ErrorBoundary
            fallback={
              <AccordionButton _hover={{}} cursor="default">
                <ErrorBoundaryCard />
              </AccordionButton>
            }
          >
            {/** Remove button styling if uncollapsible */}
            {shouldHeaderToggle ? (
              <AccordionButton
                role="group"
                as={Box}
                {...(isCollapsible ? { cursor: 'pointer' } : { _hover: {} })}
              >
                <HStack w="full">
                  <Box textStyle="header" w="full">
                    <Suspense fallback={<Skeleton w={40} h={6} />}>
                      {header}
                    </Suspense>
                  </Box>
                  {isCollapsible && <AccordionToggle isExpanded={isExpanded} />}
                </HStack>
              </AccordionButton>
            ) : (
              <HStack pl="8" w="full" justify="space-between" align="center">
                <HStack justify="space-between" w="full" align="center">
                  <Box textStyle="header" w="full">
                    <Suspense fallback={<Skeleton w={40} h={6} />}>
                      {header}
                    </Suspense>
                  </Box>
                </HStack>

                <StackItem>
                  <AccordionButton _hover={{ textColor: 'primary.500' }} pl="0">
                    {isCollapsible && (
                      <AccordionToggle isExpanded={isExpanded} />
                    )}
                  </AccordionButton>
                </StackItem>
              </HStack>
            )}

            <AccordionPanel>
              <Suspense fallback={<ContentSkeleton />}>
                {isLazy && !isExpanded ? <></> : children}
              </Suspense>
            </AccordionPanel>
          </ErrorBoundary>
        )}
      </AccordionItem>
    </Accordion>
  )
}
