import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TerminusModule } from '@nestjs/terminus'
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
