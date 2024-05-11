import { getTodos } from "@/api/todos"
import { TodoItem } from "@/components/TodoItem"
import { TodoType } from "../users/[id]/page"

export default async function TodoList() {
  const todos: TodoType[] = await getTodos()

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
