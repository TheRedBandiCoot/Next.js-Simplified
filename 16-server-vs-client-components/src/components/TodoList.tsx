import { getTodos } from '@/api/todos';
import { TodoItem } from './TodoItem';
import Child from './Child';

export async function TodoList() {
  const todos = await getTodos();
  console.log('Todo List');

  return (
    <ul>
      {todos.slice(0, 2).map(todo => (
        <TodoItem key={todo.id} title={todo.title}>
          <Child />
        </TodoItem>
      ))}
    </ul>
  );
}
