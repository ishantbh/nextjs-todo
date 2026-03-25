import { Sortable } from "@/components/sortable"
import { TodoItem } from "@/components/todo-list/todo-item"
import { fetchTodos } from "@/lib/data"

export default async function TodoList() {
  const todos = await fetchTodos()

  return (
    <ul>
      {todos.map((todo, index) => (
        <Sortable
          key={todo.id}
          id={todo.id}
          index={index}
          className="mx-2 my-4 rounded-sm bg-background/30 pe-2 transition"
        >
          <TodoItem todo={todo} />
        </Sortable>
      ))}
    </ul>
  )
}
