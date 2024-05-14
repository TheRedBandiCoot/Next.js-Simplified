import { getTodos, getUsers } from '@/api/api';
import { TodoList } from '@/components/TodoList';
import { getTodosDatabase } from '@/db/db';

export default async function Home() {
  // const todos1 = await getTodos();
  // const todos2 = await getTodos();
  const todos1 = await getTodosDatabase();
  const todos2 = await getTodosDatabase();
  const users = await getUsers();

  // console.log('Home Page');

  return (
    <>
      <h1>Todos From Home Page</h1>
      <h2>Todos Count : {todos1.length}</h2>
      <h2>Users Count : {users.length}</h2>
      <TodoList />
    </>
  );
}
