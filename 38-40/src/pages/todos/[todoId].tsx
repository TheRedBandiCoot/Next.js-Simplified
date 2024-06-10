import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Todo } from ".";

export default function todoPage({
  todo,
  todoId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Todo ID : {todoId}</h1>
      <h1>{todo.title}</h1>
    </>
  );
}

export const getServerSideProps = (async ({ params }) => {
  const todoId = params?.todoId;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  ).then((res) => res.json());
  //   if (data.id == null) return { notFound: true };
  if (data.id == null)
    return { redirect: { destination: "/", permanent: false } };

  return { props: { todo: data as Todo, todoId } };
}) satisfies GetServerSideProps;
