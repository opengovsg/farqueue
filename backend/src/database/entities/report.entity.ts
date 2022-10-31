import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Reporter } from './reporter.entity'

export const INSTITUTIONS = [
  'AH',
  'CGH',
  'KTPH',
  'NTFGH',
  'NUH (A)',
  'SGH',
  'SKH',
  'TTSH',
]

export type Institution = typeof INSTITUTIONS[number]

@Entity({ name: 'reports' })
export class Report {
  @PrimaryColumn('varchar', { length: 255 })
  id!: string

  @Column('enum', { enum: INSTITUTIONS })
  institution!: Institution

  @Column('varchar', { length: 255 })
  reporterId: string
  @ManyToOne(() => Reporter, (reporter) => reporter.reports)
  reporter: Reporter

  @Column('boolean')
  active!: boolean

  @Column('bigint')
  waitMinutes!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt?: Date
}
