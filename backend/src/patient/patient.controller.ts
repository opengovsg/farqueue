import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common'
import dayjs from 'dayjs'
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino'

import { FindPatientRes } from './patient.dto'

@Controller('patient')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  excludeExtraneousValues: true,
})
export class PatientController {
  constructor(
    @InjectPinoLogger(PatientController.name)
    private readonly logger: PinoLogger,
  ) {}

  @Get(':id')
  async find(@Param('id') id: string): Promise<FindPatientRes[]> {
    if (
      id !== '59606430205e9f0d6106ba7ebadc75e1ce0c0d5fa96ca3809e75413d8b305ad4'
    )
      return []
    return [
      {
        headerText: 'Dispensary',
      },
      {
        headerText: 'Admitted to TTSH Emergency Department',
        happenedAt: dayjs().subtract(17, 'hours').valueOf(),
      },
      {
        headerText: 'Admitted to ICU',
        happenedAt: dayjs()
          .subtract(16, 'hours')
          .subtract(24, 'minute')
          .valueOf(),
      },
      {
        headerText: 'Admitted to Radiology (L5-R3)',
        happenedAt: dayjs()
          .subtract(8, 'hours')
          .subtract(12, 'minute')
          .valueOf(),
      },
      {
        headerText: 'Warded at L4 (Room 4)',
        happenedAt: dayjs()
          .subtract(1, 'hours')
          .subtract(48, 'minute')
          .valueOf(),
      },
    ]
  }
}
