import TodoItem from "@/components/todo-list/todo-item"
import { fetchTodos } from "@/lib/data"

export default async function TodoList() {
  const todos = await fetchTodos()

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
