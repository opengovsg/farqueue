import { Expose, Transform } from 'class-transformer'
import {
  IsDefined,
  IsMobilePhone,
  IsString,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import nric from 'nric'

@ValidatorConstraint({ name: 'customText', async: false })
export class IsNricFin implements ValidatorConstraintInterface {
  validate(text: string, _args: ValidationArguments) {
    return nric.validate(text ?? '')
  }

  defaultMessage(_args: ValidationArguments) {
    return 'Invalid NRIC/FIN'
  }
}

export class SendSmsReq {
  @Transform(({ value }: { value: string | null }) => {
    if (!value) return null
    return value.startsWith('+65') ? value : `+65${value}`
  })
  @IsMobilePhone('en-SG')
  @Expose()
  @IsDefined()
  mobileNumber: string

  @IsString()
  @IsDefined()
  // @Validate(IsNricFin)
  uin: string
}
