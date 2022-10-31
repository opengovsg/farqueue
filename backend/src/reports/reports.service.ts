import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Report } from 'database/entities/report.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly repository: Repository<Report>,
  ) {}

  async create(report: Report) {
    return await this.repository.save(report)
  }
}
