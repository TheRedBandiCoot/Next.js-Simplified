// import { getTodosFetch } from '@/api/api';

import { Todo } from '@/api/api';

export async function TodoList({ todos }: { todos: Todo[] }) {
  // const todos = await getTodosFetch();

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
