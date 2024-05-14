import { PrismaClient } from '@prisma/client';
import { getTodos } from '@/api/api';
import { cache } from 'react';

export const prisma = new PrismaClient();

// export function getTodosDatabase() {
//   console.log('DB is available');
//   return prisma.todos.findMany();
// }
export const getTodosDatabase = cache(() => {
  console.log('DB is available');
  return prisma.todos.findMany();
});

export async function delTodosDatabase() {
  await prisma.todos.deleteMany();
}

export async function createTodosDatabase() {
  await prisma.todos.deleteMany();
  const todos = await getTodos();

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
}
