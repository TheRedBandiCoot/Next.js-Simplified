import { TodoList } from '@/components/TodoList';
import { getTodosDatabase } from '@/db/db';

export default async function DatabasePage() {
  console.log('Database');

  const databaseTodos = await getTodosDatabase();

  return (
    <>
      <h1>Todos From Database</h1>
      <TodoList todos={databaseTodos} />
    </>
  );
}
