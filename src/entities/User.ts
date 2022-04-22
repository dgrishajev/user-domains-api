import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Domain } from './Domain'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  @OneToMany(() => Domain, domain => domain.user)
  domains: Domain[]
}
