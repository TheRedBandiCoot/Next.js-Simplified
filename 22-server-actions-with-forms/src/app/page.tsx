import { getTodos } from '@/actions/todos.actions';
import TodoComponent from './components/TodoComponent';
import Link from 'next/link';

export default async function HomePage() {
  const todos = await getTodos();

  return (
    <main className='h-screen p-10 bg-black text-white'>
      <h1 className='text-5xl font-extrabold'>Todo List - Home Page</h1>
      <Link href={'/closure-server-action'}>closure-server-action</Link>
      <br />
      <Link href={'/server-action-extra-arg'}>server-action-extra-arg</Link>

      <TodoComponent todos={todos} />
    </main>
  );
}
