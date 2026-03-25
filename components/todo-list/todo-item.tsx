"use client"

import { TodoDeleteBtn } from "@/components/todo-list/todo-delete-btn"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import type { Todo } from "@/db/schema"
import { toggleTodo } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { useMemo, useTransition } from "react"
import { toast } from "sonner"

type TodoItemProps = {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const toggleTodoWithId = useMemo(
    () => toggleTodo.bind(null, todo.id),
    [todo.id]
  )

  const [isPending, startTransition] = useTransition()

  function handleToggle(isChecked: boolean) {
    startTransition(async () => {
      const state = await toggleTodoWithId(isChecked)

      if (state.error) {
        toast.error(state.error)
      }

      if (state.message) {
        toast.success(state.message)
      }
    })
  }

  return (
    <li className="mx-2 my-4 rounded-sm bg-background/30 pe-2">
      <Field orientation="horizontal">
        <Checkbox
          id={`todo-${todo.id}`}
          name={`todo-${todo.id}`}
          defaultChecked={todo.isCompleted}
          disabled={isPending}
          onCheckedChange={handleToggle}
          className="ms-4"
        />
        <FieldLabel
          htmlFor={`todo-${todo.id}`}
          className={cn("py-4 font-normal", {
            "text-white/50 line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </FieldLabel>

        <TodoDeleteBtn id={todo.id} />
      </Field>
    </li>
  )
}
