import { Expose, Transform } from 'class-transformer'
import { IsDefined, IsMobilePhone } from 'class-validator'

export class SendSmsReq {
  @Transform(({ value }: { value: string | null }) => {
    if (!value) return null
    return value.startsWith('+65') ? value : `+65${value}`
  })
  @IsMobilePhone('en-SG')
  @Expose()
  @IsDefined()
  mobileNumber: string
}
