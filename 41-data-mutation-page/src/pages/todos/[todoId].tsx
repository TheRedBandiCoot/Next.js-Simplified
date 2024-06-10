import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import db from "../../db/db";
import Link from "next/link";

export default function TodoPage({
  todo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Todo - {todo.title}</h1>
      <Link href={"/todos"}>/Todos</Link>
    </>
  );
}

export const getStaticPaths = (async () => {
  const data = await db.todo.findMany();

  return {
    paths: data.map((todo) => ({ params: { todoId: todo.id.toString() } })),
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const todoId = Number(params?.todoId);
  if (isNaN(todoId)) return { notFound: true };

  const data = await db.todo.findUnique({ where: { id: todoId } });
  if (data == null) return { notFound: true };

  return { props: { todo: data } };
}) satisfies GetStaticProps;
