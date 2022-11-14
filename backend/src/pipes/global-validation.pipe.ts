import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'
import { values } from 'lodash'

type ValidationErrorResponseNode = {
  property: string
  constraints?: string
  children?: ValidationErrorResponseNode[]
}

function extractErrors(
  errors: ValidationError[],
): [ValidationErrorResponseNode[], string[]] {
  const flattenedErrorMessages: string[] = []

  const extractNestedErrors = (
    error: ValidationError,
    flattenedErrorMessages: string[],
  ) => {
    const errorNode: ValidationErrorResponseNode = { property: error.property }
    if (error.constraints) {
      const constraintsStr = values(error.constraints).join(', ')
      errorNode.constraints = constraintsStr
      flattenedErrorMessages.push(constraintsStr)
    }

    if (error.children && error.children.length > 0) {
      errorNode.children = error.children.map((child) =>
        extractNestedErrors(child, flattenedErrorMessages),
      )
    }

    return errorNode
  }

  return [
    errors.map((error) => extractNestedErrors(error, flattenedErrorMessages)),
    flattenedErrorMessages,
  ]
}

export const GlobalValidationPipe = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({
    whitelist: true,
    transform: true,
    exceptionFactory: (errors: ValidationError[]) => {
      const [jsonFormattedErrors, flattenedErrorMessages] =
        extractErrors(errors)

      const errorMessage: {
        errors: string[]
        jsonFormattedErrors?: ValidationErrorResponseNode[]
      } = {
        errors: flattenedErrorMessages,
      }

      // only enable this in development mode for debugging
      if (process.env.NODE_ENV === 'development') {
        errorMessage.jsonFormattedErrors = jsonFormattedErrors
      }

      return new BadRequestException(errorMessage)
    },
  }),
}
