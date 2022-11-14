import { Module } from '@nestjs/common'
import { ClientsModule } from 'clients/clients.module'

import { AuthGuard } from './auth.guard'

@Module({
  providers: [AuthGuard],
  imports: [ClientsModule],
  exports: [AuthGuard, ClientsModule],
})
export class AuthModule {}
