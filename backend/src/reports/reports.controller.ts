import { Controller, Get } from '@nestjs/common'
import { Report } from 'database/entities/report.entity'

import { ReportsService } from './reports.service'

@Controller()
export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  @Get()
  async create(): Promise<Report> {
    return await this.service.create({} as Report)
  }
}
