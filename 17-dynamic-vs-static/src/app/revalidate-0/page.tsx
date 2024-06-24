import { getTodos } from "@/api/todos";

export const revalidate = 0;

export default async function revalidate0() {
  const todos = await getTodos();

  return <div>revalidate0 - {todos.length}</div>;
}
