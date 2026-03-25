import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import type { Todo } from "@/db/schema"
import { cn } from "@/lib/utils"

type TodoItemProps = {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="mx-2 my-4 rounded-sm bg-background/30">
      <Field orientation="horizontal">
        <Checkbox
          id={`todo-${todo.id}`}
          name={`todo-${todo.id}`}
          defaultChecked={todo.isCompleted}
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
      </Field>
    </li>
  )
}
