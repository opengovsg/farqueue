import { Module } from '@nestjs/common'

import { SmsService, smsServiceFactory } from './sms.service'

@Module({
  providers: [smsServiceFactory],
  exports: [SmsService],
})
export class SmsModule {}
