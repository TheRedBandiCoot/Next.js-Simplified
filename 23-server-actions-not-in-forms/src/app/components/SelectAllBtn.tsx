'use client';

import { useEffect, useTransition } from 'react';
import { updateTodo } from '../actions/todos.actions';

export default function SelectAll({ ids }: { ids: number[] }) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    updateTodo(1, true);
  }, []);

  return (
    <button
      className='bg-blue-700 p-2 px-6  rounded-md text-xl mt-4 font-semibold active:bg-blue-800'
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await Promise.all(ids.map(id => updateTodo(id, true)));
        });
      }}
    >
      {isPending ? 'Loading...' : 'Select All'}
    </button>
  );
}
