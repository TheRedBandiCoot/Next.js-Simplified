import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function TodosPage({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Todos List - {todos.length}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = (async () => {
  console.log("Todos testing");

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(
    (res) => res.json()
  );

  return { props: { todos: data as Todo[] } };
}) satisfies GetServerSideProps;

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
