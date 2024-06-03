'use client';
import { MouseEvent, useOptimistic } from 'react';
import { deleteTodo, updateTodo } from '../actions/todos.actions';
import { type Todo } from '../page';

export default function TodoItems({ id, completed, title }: Todo) {
  const [optimisticCompleted, setOptimisticTodo] = useOptimistic(completed);

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
          checked={optimisticCompleted}
          onChange={async e => {
            setOptimisticTodo(e.target.checked);
            await updateTodo(id, e.target.checked);
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
