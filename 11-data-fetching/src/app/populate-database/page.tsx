import { getTodosFetch } from '@/api/api';
import { prisma } from '@/db/db';

export default async function PopulateDatabasePage() {
  await prisma.todos.deleteMany();
  const todos = await getTodosFetch();

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    await prisma.todos.create({
      data: {
        id: todo.id,
        userId: todo.userId,
        title: todo.title,
        completed: todo.completed
      }
    });
  }

  //   const todosPromise =  todos.map(todo => {
  //     return  prisma.todos.createMany({
  //       data: {
  //         id: todo.id,
  //         userId: todo.userId,
  //         title: todo.title,
  //         completed: todo.completed
  //       }
  //     });
  //   });

  //     await Promise.all(todosPromise);

  return (
    <>
      <h1>Populated Database</h1>
    </>
  );
}
