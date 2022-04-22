import { ConnectionOptions } from 'typeorm'

import { User, Domain } from '../entities'

export const config: ConnectionOptions = {
  type: 'postgres',
  name: 'default',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'user_domains',
  synchronize: true,
  logging: false,
  entities: [User, Domain],
  migrations: [],
  subscribers: []
}
