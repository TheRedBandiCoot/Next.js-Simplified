'use server';
import { revalidatePath } from 'next/cache';

export type Todo = {
  id?: number;
  title: string;
  completed: boolean;
};

export async function createTodo(title: string) {
  //@ throw new Error('Test Error');
  if (title == null || title === '') return;
  try {
    await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //@ title: `${title}-server-testing-optimistic-change-from-action.ts`,
        title,
        completed: false
      })
    });
    revalidatePath('/');
    revalidatePath('/closure-server-action');
    revalidatePath('/server-action-extra-arg');
  } catch (error) {
    return { error };
  }
}

export async function getTodos() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(data => data as Todo[]);
}
