"use server"

import { db } from "@/db/drizzle"
import { todos } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export type State = {
  error?: string | null
  message?: string | null
}

export async function createTodo(prevState: State, formData: FormData) {
  const title = formData.get("title")?.toString().trim()

  if (!title || !title.length) {
    return { error: "Title is required" }
  }

  try {
    await db.insert(todos).values({ title })
    revalidatePath("/")
    return { message: "Todo created successfully" }
  } catch (error) {
    console.error("Database Error:", error)
    return { error: "Database Error: Failed to create Todo." }
  }
}

export async function toggleTodo(
  id: string,
  isCompleted: boolean
): Promise<State> {
  try {
    await db.update(todos).set({ isCompleted }).where(eq(todos.id, id))
    revalidatePath("/")
    return { message: "Todo toggled successfully" }
  } catch (error) {
    console.error("Database Error:", error)
    return { error: "Database Error: Failed to toggle Todo." }
  }
}
