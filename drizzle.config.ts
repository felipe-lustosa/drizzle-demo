import 'dotenv/config'

import type { Config } from 'drizzle-kit'

export default {
  out: './drizzle',
  schema: './schema.ts',
  driver: 'pg',
  dbCredentials: {
    host: process.env.PGHOST ?? '',
    user: process.env.PGUSER,
    database: process.env.PGDATABASE ?? '',
    password: process.env.PGPASSWORD,
    ssl: true
  }
} satisfies Config;