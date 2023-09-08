import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres({ssl: 'require'})
const db = drizzle(client);

const main = async () => {
  console.log('running...')
}

main()