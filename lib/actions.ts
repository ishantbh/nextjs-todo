"use server"

import { db } from "@/db/drizzle"
import { todos } from "@/db/schema"
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
