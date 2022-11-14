import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { getApiKeyFromHeader } from 'auth/auth.utils'
import { ClientsService } from 'clients/clients.service'
import { Request } from 'express'
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly clientsService: ClientsService,
    @InjectPinoLogger(AuthGuard.name)
    private readonly logger: PinoLogger,
  ) {}

  private async authenticateApiKey(
    req: Request,
    apiKey: string,
  ): Promise<boolean> {
    try {
      const client = await this.clientsService.getClientByApiKey(apiKey)
      req.apiClient = client
      this.logger.info({ clientId: client.id }, 'Authenticated by API key')
      return true
    } catch (_err) {
      return false
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>()

    const apiKey = getApiKeyFromHeader(req)
    if (!apiKey) return false
    return this.authenticateApiKey(req, apiKey)
  }
}