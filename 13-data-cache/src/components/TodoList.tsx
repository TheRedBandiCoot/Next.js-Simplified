import { getTodos } from '@/api/api';
import { getTodosDatabase } from '@/db/db';

export async function TodoList() {
  // const todos = await getTodos();
  const todos = await getTodosDatabase();

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li className={`${todo.completed && 'line-through'}`} key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}
