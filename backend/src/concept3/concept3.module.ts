import { Module } from '@nestjs/common'
import { AuthModule } from 'auth/auth.module'
import { SmsModule } from 'sms/sms.module'

import { Concept3Controller } from './concept3.controller'

@Module({
  imports: [AuthModule, SmsModule],
  controllers: [Concept3Controller],
  exports: [Concept3Module],
})
export class Concept3Module {}
