import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

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
  reporter!: string

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
