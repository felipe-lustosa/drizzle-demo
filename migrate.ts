import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import {migrate} from 'drizzle-orm/postgres-js/migrator'

const client = postgres({ssl: 'require'})
const db = drizzle(client);

const main = async () => {
  console.log('migrating...')
  await migrate(db, {migrationsFolder: 'drizzle'})
}

main()