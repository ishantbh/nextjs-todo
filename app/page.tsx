import { AddTodoForm } from "@/components/forms/add-todo-form"

export default function Page() {
  return (
    <div className="min-h-svh p-4 font-mono sm:p-6">
      <main className="mx-auto max-w-xl rounded-md bg-muted p-4 sm:p-6">
        <h1 className="mb-4 text-center text-4xl font-bold sm:mb-6">
          Todo App
        </h1>

        <AddTodoForm />
      </main>
    </div>
  )
}
