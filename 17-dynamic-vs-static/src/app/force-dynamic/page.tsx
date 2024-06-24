import { getTodos } from "@/api/todos";

export const dynamic = "force-dynamic";

export default async function forceDynamic() {
  const todos = await getTodos();

  return <div>Force Dynamic - {todos.length}</div>;
}
