import { getTodos } from '@/api/todos';

export default async function Child() {
  const todos = await getTodos();
  console.log('Child');
  return <h1>Child : {todos.length}</h1>;
}
