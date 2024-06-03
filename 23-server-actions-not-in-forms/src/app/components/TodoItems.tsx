'use client';
import { MouseEvent, useTransition } from 'react';
import { deleteTodo, updateTodo } from '../actions/todos.actions';
import { type Todo } from '../page';

export default function TodoItems({ id, title, completed }: Todo) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteClick = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    await deleteTodo(id);
  };

  return (
    <li className={`list-disc ml-10`}>
      <label className='flex gap-x-2 items-center'>
        <input
          type='checkbox'
          // defaultChecked={completed}
          disabled={isPending}
          checked={completed}
          onChange={e => {
            startTransition(async () => {
              await updateTodo(id, e.target.checked);
            });
          }}
        />
        <span className='cursor-pointer' onClick={handleDeleteClick}>
          ⛔
        </span>
        {title}
      </label>
    </li>
  );
}
