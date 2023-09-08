import { pgTable, serial, varchar, timestamp, integer } from 'drizzle-orm/pg-core'
import {relations} from 'drizzle-orm'

export const user = pgTable('user', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 50 }).notNull(),
})

export const usersRelations = relations(user, ({many}) => ({
  tasks: many(todo)
}))

export const todo = pgTable('todo', {
	id: serial('id').primaryKey().notNull(),
	title: varchar('title', { length: 50 }).notNull(),
	description: varchar('description', { length: 50 }),
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  userId: integer('user_id').references(() => user.id)
});
