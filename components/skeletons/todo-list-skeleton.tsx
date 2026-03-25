import { Skeleton } from "@/components/ui/skeleton"

function TodoItemSkeleton() {
  return <Skeleton className="mx-2 my-4 h-13 bg-background/30" />
}

export function TodoListSkeleton() {
  return (
    <div>
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
    </div>
  )
}
