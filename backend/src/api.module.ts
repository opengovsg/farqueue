import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TerminusModule } from '@nestjs/terminus'
import { Concept3Module } from 'concept3/concept3.module'
import { PatientModule } from 'patient/patient.module'
import { ReportsModule } from 'reports/reports.module'

import { AuthModule } from './auth/auth.module'
import { HealthModule } from './health/health.module'
import { MailerModule } from './mailer/mailer.module'
import { OtpModule } from './otp/otp.module'

const apiModules = [
  AuthModule,
  TerminusModule,
  HealthModule,
  OtpModule,
  MailerModule,
  ReportsModule,
  Concept3Module,
  PatientModule,
]

@Module({
  imports: [
    ...apiModules,
    RouterModule.register([
      {
        path: 'api',
        children: apiModules,
      },
    ]),
  ],
})
export class ApiModule {}
