import { getTodo, getTodos } from '@/api/todos';

type Params = {
  params: {
    todoId: string;
  };
};

// export const revalidate = 20;

// export const dynamicParams = false;

export async function generateStaticParams() {
  //   return [{ todoId: '1' }, { todoId: '2' }];
  const todos = await getTodos();
  return todos.map(todo => ({ todoId: todo.id.toString() }));
}

export default async function TodoPage({ params: { todoId } }: Params) {
  const todo = await getTodo(todoId);

  console.log(todo.id);

  return <h1>Todo : {todo.title}</h1>;
}
