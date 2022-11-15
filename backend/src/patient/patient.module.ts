import { Module } from '@nestjs/common'
import { AuthModule } from 'auth/auth.module'
import { SmsModule } from 'sms/sms.module'

import { PatientController } from './patient.controller'

@Module({
  imports: [AuthModule, SmsModule],
  controllers: [PatientController],
  exports: [PatientModule],
})
export class PatientModule {}
