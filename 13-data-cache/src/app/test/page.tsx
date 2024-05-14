import { getTodo, getTodos, getUsers } from '@/api/api';
import { TodoList } from '@/components/TodoList';
import { getTodosDatabase } from '@/db/db';

export default async function Test() {
  //   const todos1 = await getTodos();
  //   await getTodo();
  const todos1 = await getTodosDatabase();
  const todos2 = await getTodosDatabase();
  const users = await getUsers();

  // console.log('Home Page');

  return (
    <>
      <h1>Test Page</h1>
      <h1>Todos From Home Page</h1>
      <h2>Todos Count : {todos1.length}</h2>
      <h2>Users Count : {users.length}</h2>
      <TodoList />
    </>
  );
}
