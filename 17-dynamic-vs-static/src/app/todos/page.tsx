import { getTodos } from "@/api/todos";
import RandomNumber from "@/components/RandomNumber";
import { TodoItem } from "@/components/TodoItem";
import { getDbTodos } from "@/db/todos";

export default async function Todos() {
  // const todos = await getTodos(); // unstable_noStore
  const todos = await getDbTodos(); // unstable_noStore

  return (
    <>
      {/* <RandomNumber /> */}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
