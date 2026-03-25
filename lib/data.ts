import { db } from "@/db/drizzle"
import { todos } from "@/db/schema"
import { desc } from "drizzle-orm"

export async function fetchTodos() {
  try {
    const data = await db.select().from(todos).orderBy(desc(todos.createdAt))
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch todos")
  }
}
