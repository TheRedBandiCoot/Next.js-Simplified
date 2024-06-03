import { getTodos } from '@/actions/todos.actions';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default async function ClosureServerActionPage() {
  const todos = await getTodos();

  const completed = true;

  async function createTodo(formData: FormData) {
    'use server';
    const title = formData.get('title');
    if (title == null || title === '') return;
    try {
      await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          completed
        })
      });
      revalidatePath('/');
      revalidatePath('/closure-server-action');
      revalidatePath('/server-action-extra-arg');
    } catch (error) {
      return { error };
    }
  }

  return (
    <main className='h-screen p-10 bg-black text-white'>
      <h1 className='text-4xl font-extrabold'>
        Todo List - closure-server-action
      </h1>
      <Link href={'/'}>Home Page</Link>
      <br />
      <Link href={'/server-action-extra-arg'}>server-action-extra-arg</Link>

      <>
        <form
          className='flex gap-[0.25rem] flex-col max-w-[300px]'
          action={createTodo}
        >
          <label className='text-3xl mt-10 font-bold' htmlFor='title'>
            Title
          </label>
          <input
            className='border-[3px] border-slate-400 p-2 w-full rounded-md text-black outline-none'
            type='text'
            name='title'
            id='title'
          />
          <button className='bg-slate-500 p-2 rounded-md text-2xl font-semibold active:bg-slate-500'>
            Add
          </button>
        </form>
        <ul className='mt-5'>
          {todos.map(todo => (
            <li className={`list-disc ml-10`} key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </>
    </main>
  );
}
