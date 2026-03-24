import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const todos = pgTable("todos", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export type Todo = typeof todos.$inferSelect
export type TodoInsert = typeof todos.$inferInsert
