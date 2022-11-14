import { BadRequestException, FactoryProvider } from '@nestjs/common'
import { ConfigService } from 'config/config.service'
import { randomUUID } from 'crypto'
import { PinoLogger } from 'nestjs-pino'
import twilio from 'twilio'

type SmsMessage = {
  recipient: string
  content: string
}

export abstract class SmsService {
  abstract send(message: SmsMessage): Promise<{ messageId: string }>
}

export class TwilioService extends SmsService {
  private client: twilio.Twilio

  constructor(private readonly config: ConfigService) {
    super()

    const { apiKey, apiSecret, accountSid } = this.config.get('twilio')
    this.client = twilio(apiKey, apiSecret, {
      accountSid,
    })
  }

  async send({ recipient, content }: SmsMessage) {
    const from = this.config.get('twilio.messagingSid')
    const payload = {
      from,
      to: recipient,
      body: content,
    }
    const { errorCode, sid: messageId } = await this.client.messages.create(
      payload,
    )
    if (errorCode === 21211) {
      throw new BadRequestException('Invalid phone number')
    }
    if (!messageId) throw new Error(`Failed to send message to ${recipient}`)

    return { messageId }
  }
}

export class LocalSmsService extends SmsService {
  constructor(private readonly logger: PinoLogger) {
    super()
    this.logger.setContext('LocalSmsService')
  }

  async send(message: SmsMessage) {
    this.logger.info(message)
    return { messageId: randomUUID() }
  }
}

export const smsServiceFactory: FactoryProvider = {
  provide: SmsService,
  inject: [PinoLogger, ConfigService],
  useFactory: (logger: PinoLogger, config: ConfigService): SmsService => {
    return config.isDevEnv
      ? new LocalSmsService(logger)
      : new TwilioService(config)
  },
}
