import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from 'config/config.service'
import { Logger } from 'nestjs-pino'

import { AppModule } from './app.module'

async function bootstrap() {
  console.log('one')
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  })
  console.log('two')
  app.useLogger(app.get(Logger))
  console.log('three')
  const config = app.get(ConfigService)
  console.log('four')
  if (!config.isDevEnv) {
    console.log('five')
    app.set('trust proxy', 1)
  }

  console.log('six')
  await app.listen(config.get('port'))
}

bootstrap()
