"use client"

import { cn } from "@/lib/utils"
import { useSortable } from "@dnd-kit/react/sortable"

type SortableProps = {
  id: string
  index: number
  children: React.ReactNode
  className?: string
}

export function Sortable({ id, index, children, className }: SortableProps) {
  const { ref, isDragging } = useSortable({ id, index })

  return (
    <li
      ref={ref}
      className={cn(className, {
        "bg-background shadow-2xl shadow-white/10": isDragging,
      })}
    >
      {children}
    </li>
  )
}
