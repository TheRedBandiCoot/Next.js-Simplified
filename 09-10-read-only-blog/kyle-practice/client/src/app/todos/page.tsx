import { getTodos } from '@/api/todos';
import { Skeleton, SkeletonList } from '@/components/Skeleton';
import { TodoItem } from '@/components/TodoItem';
import { Suspense } from 'react';

export default function TodosPage() {
  return (
    <>
      <h1 className='page-title'>Todos</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short inline />
              </li>
            </SkeletonList>
          }
        >
          <TodoList />
        </Suspense>
      </ul>
    </>
  );
}

async function TodoList() {
  const todos = await getTodos();

  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}
