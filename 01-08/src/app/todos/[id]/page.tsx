import { Example } from '@/app/components/Example';
import { wait } from '@/app/page';
import { notFound } from 'next/navigation';

async function getTodo(params: string) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.typicode.com/todos/${params}`).then(
    res => res.json()
  );
}

export default async function page({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  console.log(todo);

  if (todo.title == null) return notFound();

  return (
    <>
      <h1>{todo.title}</h1>
      <Example />
    </>
  );
}
