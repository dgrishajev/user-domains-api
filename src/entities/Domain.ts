import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { User } from './User'

@Entity()
export class Domain {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  label: string

  @Column()
  extension: string

  @ManyToOne(() => User, user => user.domains)
  user: User
}
