import { revalidatePath } from 'next/cache';
import TodoItems from './components/TodoItems';
import TodoForm from './components/TodoForm';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  return fetch(`http://localhost:3001/todos`)
    .then(res => res.json())
    .then(data => data as Todo[]);
}

async function createTodo(
  prevState: { errorMessage: string } | undefined | unknown,
  formData: FormData
) {
  'use server';
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(prevState);

  const title = formData.get('title') as string;

  if (title == null || title === '')
    return { errorMessage: 'No title provided' };

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
  return { errorMsg: 'No Error Message Expected' };
}

export default async function ServerActionExtraArgPage() {
  const todos = await getTodos();
  return (
    <main className='h-screen p-10 bg-black text-white'>
      <h1 className='text-4xl font-extrabold'>Todo List - Home Page</h1>

      <TodoForm createTodo={createTodo} />

      <ul className='mt-5 flex flex-col'>
        {todos.map(todo => <TodoItems key={todo.id} {...todo} />).reverse()}
      </ul>
    </main>
  );
}
