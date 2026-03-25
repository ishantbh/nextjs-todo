"use client"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon, Loading03Icon } from "@hugeicons/core-free-icons"
import { createTodo, type State } from "@/lib/actions"
import { useActionState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function AddTodoForm() {
  const initialState: State = { error: null, message: null }

  const [state, formAction, isPending] = useActionState(
    createTodo,
    initialState
  )

  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }

    if (state.message) {
      toast.success(state.message)
    }
  }, [state])

  return (
    <div className="mb-4 sm:mb-6">
      <form action={formAction}>
        <Field>
          <Field orientation="horizontal">
            <Input
              type="text"
              id="todo-title"
              name="title"
              placeholder="Order groceries..."
              // required
              disabled={isPending}
            />
            <Button type="submit" disabled={isPending}>
              <HugeiconsIcon
                className={cn({
                  "size-5 animate-spin": isPending,
                })}
                icon={isPending ? Loading03Icon : Add01Icon}
                aria-hidden
              />
              <span>Add</span>
            </Button>
          </Field>
        </Field>
      </form>
    </div>
  )
}
