import { revalidatePath } from 'next/cache';
import TodoItems from './components/TodoItems';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return fetch(`http://localhost:3001/todos`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}

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
        completed: false
      })
    });
    revalidatePath('/');
  } catch (error) {
    return { error };
  }
}

export default async function ServerActionExtraArgPage() {
  const todos = await getTodos();
  return (
    <main className='h-screen p-10 bg-black text-white'>
      <h1 className='text-4xl font-extrabold'>Todo List - Home Page</h1>

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
        <button className='bg-slate-500 p-2 rounded-md text-2xl font-semibold active:bg-slate-600'>
          Add
        </button>
      </form>

      <ul className='mt-5 flex flex-col'>
        {todos.map(todo => <TodoItems key={todo.id} {...todo} />).reverse()}
      </ul>
    </main>
  );
}
