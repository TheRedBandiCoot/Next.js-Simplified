'use client';
import { useOptimistic, useRef } from 'react';
import { Todo, createTodo } from '@/actions/todos.actions';
import Button from './Button';

type OptimisticTodo = Todo & { isPending?: boolean };

export default function TodoComponent({ todos }: { todos: Todo[] }) {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todos,
    (state: OptimisticTodo[], newTodo: OptimisticTodo) => {
      return [...state, newTodo];
    }
  );

  return (
    <>
      <form
        ref={ref}
        className='flex gap-[0.25rem] flex-col max-w-[300px]'
        action={async formData => {
          //@ Reset Form Input
          ref.current?.reset();
          //@ Add Optimistic Approach to show expected data before load actual data
          setOptimisticTodos({
            completed: false,
            title: formData.get('title') as string,
            isPending: true
          });
          //@ Data Entry On DataBase - CreateTodo
          await createTodo(formData.get('title') as string);
        }}
      >
        <label className='text-3xl mt-10 font-bold' htmlFor='title'>
          Title
        </label>
        <input
          className='border-[3px] border-slate-400 p-2 w-full rounded-md text-black outline-none'
          type='text'
          name='title'
          id='title'
        />
        <Button />
      </form>
      <ul className='mt-5'>
        {optimisticTodos.map((todo, idx) => (
          <li
            className={`list-disc ml-10 ${
              todo.isPending ? 'opacity-30' : undefined
            }`}
            key={idx}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
