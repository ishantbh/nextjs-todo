"use client"

import { Button } from "@/components/ui/button"
import { deleteTodo, State } from "@/lib/actions"
import { Delete02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useActionState, useEffect, useMemo } from "react"
import { toast } from "sonner"

type TodoDeleteBtnProps = {
  id: string
}

export function TodoDeleteBtn({ id }: TodoDeleteBtnProps) {
  const initialState: State = { error: null, message: null }

  const deleteTodoWithId = useMemo(() => deleteTodo.bind(null, id), [id])

  const [state, formAction, isPending] = useActionState(
    deleteTodoWithId,
    initialState
  )

  useEffect(() => {
    // No success message for delete because in case of success,
    // this component will unmount and toast will never trigger anyway

    if (state.error) {
      toast.error(state.error)
    }
  }, [state.error])

  return (
    <form action={formAction}>
      <Button
        type="submit"
        variant="destructive"
        size="icon-sm"
        disabled={isPending}
      >
        <HugeiconsIcon icon={Delete02Icon} aria-hidden />
        <span className="sr-only">Delete</span>
      </Button>
    </form>
  )
}
