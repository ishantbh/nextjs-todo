import { AddTodoForm } from "@/components/forms/add-todo-form"
import { TodoListSkeleton } from "@/components/skeletons/todo-list-skeleton"
import TodoList from "@/components/todo-list/todo-list"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="min-h-svh p-4 font-mono sm:p-6">
      <main className="mx-auto max-w-xl rounded-md bg-muted p-4 sm:p-6">
        <h1 className="mb-4 text-center text-4xl font-bold sm:mb-6">
          Todo App
        </h1>

        <AddTodoForm />

        <Suspense fallback={<TodoListSkeleton />}>
          <TodoList />
        </Suspense>
      </main>
    </div>
  )
}
