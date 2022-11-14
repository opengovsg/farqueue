import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ConfigService } from 'config/config.service'
import crypto from 'crypto'
import { Client } from 'database/entities'
import { Repository } from 'typeorm'

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly repository: Repository<Client>,
    private readonly config: ConfigService,
  ) {}

  async getClientByApiKey(apiKey: string): Promise<Client> {
    const { alg } = this.config.get('apiKey')
    const apiKeyHash = crypto.createHash(alg).update(apiKey).digest('base64')
    const client = await this.repository.findOne({
      where: { apiKeyHash },
      relations: ['scopes'],
    })
    if (!client) throw new Error(`Client not found`)
    return client
  }
}
