import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Report } from './report.entity'

@Entity({ name: 'reporters' })
export class Reporter {
  @PrimaryColumn('varchar', { length: 255 })
  id!: string

  @OneToMany(() => Report, (report) => report.reporter)
  reports: Report[]

  @Column('boolean', { default: false })
  whitelisted: boolean

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt?: Date
}
