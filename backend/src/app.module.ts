import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApiModule } from 'api.module'
import { ConfigModule } from 'config/config.module'
import { HelmetMiddleware } from 'middlewares/helmet.middleware'
import { SessionMiddleware } from 'middlewares/session.middleware'
import { LoggerModule } from 'nestjs-pino'
import { join } from 'path'
import { GlobalValidationPipe } from 'pipes/global-validation.pipe'
import { TraceIdProvider } from 'providers/trace-id.provider'

import { ConfigService } from './config/config.service'
import { DatabaseConfigService } from './database/database-config.service'

const FRONTEND_PATH = join(__dirname, '..', '..', 'frontend', 'build')

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    LoggerModule.forRootAsync({
      providers: [GlobalValidationPipe, TraceIdProvider],
      inject: [TraceIdProvider],
      useFactory: (traceProvider: TraceIdProvider) => ({
        pinoHttp: {
          genReqId: traceProvider.getTraceId.bind(undefined),
          serializers: {
            req: (req) => {
              if (process.env.NODE_ENV === 'development') {
                return {
                  method: req.method,
                  url: req.url,
                }
              } else {
                return req
              }
            },
            res: (res) => {
              if (process.env.NODE_ENV === 'development') {
                return {
                  statusCode: res.statusCode,
                }
              } else {
                return res
              }
            },
          },
          customSuccessMessage: (req, res) => {
            return `${req.method ?? ''} ${req.url ?? ''} ${res.statusCode}`
          },
          customErrorMessage: (req, res, err) => {
            return `${req.method ?? ''} ${req.url ?? ''} ${res.statusCode}: (${
              err.name
            }) ${err.message}`
          },
        },
        renameContext: 'scope',
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConfigService,
    }),
    ServeStaticModule.forRoot({
      rootPath: FRONTEND_PATH,
      exclude: ['/api*'], // Return 404 for non-existent API routes
      serveStaticOptions: {
        maxAge: 2 * 60 * 60 * 1000, // 2 hours, same as cloudflare
        setHeaders: function (res, path) {
          // set maxAge to 0 for root index.html
          if (path === join(FRONTEND_PATH, 'index.html')) {
            res.setHeader('Cache-control', 'public, max-age=0')
          }
        },
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HelmetMiddleware, SessionMiddleware).forRoutes('*')
  }
}
