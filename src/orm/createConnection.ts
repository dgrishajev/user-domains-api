import { createConnection, getConnectionManager } from 'typeorm'

import { config } from './config'

const dbCreateConnection = async () => {
  try {
    const { name, options } = await createConnection(config)

    console.log(
      `Database connection success. Connection name: '${name}' Database: '${options.database}'`
    )
  } catch (err) {
    if (err.name === 'AlreadyHasActiveConnectionError') {
      return getConnectionManager().get(config.name)
    }

    console.log(err)
  }

  return null
}

export { dbCreateConnection as createConnection }
