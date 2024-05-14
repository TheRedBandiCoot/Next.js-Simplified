import { getTodosFetch, getUsers } from '@/api/api';
import { TodoList } from '@/components/TodoList';
export default async function FetchPage() {
  const todos = await getTodosFetch();
  const todos2 = await getTodosFetch();
  const users = await getUsers();

  return (
    <>
      <h1>Todos From Fetch</h1>
      <h2>Todos Count : {todos.length}</h2>
      <h2>Users Count : {users.length}</h2>
      <TodoList todos={todos} />
    </>
  );
}
