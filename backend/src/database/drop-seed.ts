import { schema } from 'config/config.schema'
import convict from 'convict'
import { exit } from 'process'
import { DataSource, DataSourceOptions } from 'typeorm'

import ormconfig from './ormconfig'

const main = async () => {
  const env = convict(schema).get('environment')
  // Make sure it only runs when environment are these specified environments,
  // to prevent running in production on accident. Didn't use the positive check
  // `env === 'production'`, in case our config schema changes and passes erroneously.
  if (env !== 'development' && env !== 'staging' && env !== 'test') {
    // eslint-disable-next-line no-console
    console.info('Seeder not allowed to be run in this environment!')
    exit(0)
  }

  const dataSource = new DataSource(ormconfig as DataSourceOptions)
  await dataSource.initialize()
  await dataSource.dropDatabase()
  exit(0)
}

void main()
