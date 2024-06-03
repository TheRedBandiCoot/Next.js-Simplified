'use server';

import { revalidatePath } from 'next/cache';

export async function updateTodo(id: number, completed: boolean) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ completed })
    body: JSON.stringify({ completed: true })
  }).then(res => res.json());
  //   console.log('onchange server');

  revalidatePath('/');
}

export async function deleteTodo(id: number) {
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE'
  });
  revalidatePath('/');
}
