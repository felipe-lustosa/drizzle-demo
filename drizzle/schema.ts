import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const todos = pgTable("todos", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 50 }).notNull(),
	description: varchar("description", { length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});