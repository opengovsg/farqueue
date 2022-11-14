import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { AuthGuard } from 'auth/auth.guard'
import crypto from 'crypto'
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino'
import { SmsService } from 'sms/sms.service'

import { SendSmsReq } from './concept3.dto'

@Controller('concept3')
@UseGuards(AuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  excludeExtraneousValues: true,
})
export class Concept3Controller {
  constructor(
    private readonly smsService: SmsService,
    @InjectPinoLogger(Concept3Controller.name)
    private readonly logger: PinoLogger,
  ) {}

  @Post('sms')
  async create(@Body() { mobileNumber, uin }: SendSmsReq): Promise<void> {
    const uinHash = crypto.createHash('sha256').update(uin).digest('hex')

    const { messageId } = await this.smsService.send({
      recipient: mobileNumber,
      content: `Your next-of-kin has successfully registered at TTSH. Track their progress live at https://wait.beta.gov.sg/concept3/${uinHash}`,
    })

    this.logger.info({ messageId })
  }
}
