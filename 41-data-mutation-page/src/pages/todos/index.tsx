import type { GetStaticProps, InferGetStaticPropsType } from "next";
import db from "../../db/db";
import Link from "next/link";

export default function TodosPage({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Link href={"/todos/new"}>New</Link>
      <h1>Todos List - {todos.length}</h1>
      <ul>
        {todos
          .map((todo) => (
            <li key={todo.id}>
              <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </li>
          ))
          .reverse()}
      </ul>
    </>
  );
}

export const getStaticProps = (async () => {
  const data = await db.todo.findMany();

  return { props: { todos: data } };
}) satisfies GetStaticProps;
