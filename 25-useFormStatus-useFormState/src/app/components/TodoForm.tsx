'use client';

import { useFormState } from 'react-dom';
import SubmitButton from './SubmitBtn';

export default function TodoForm({ createTodo }: TodoFormType) {
  const [error, action] = useFormState(createTodo, {
    errorMessage: '',
    errorMsg: undefined
  });

  return (
    <>
      <div>{error?.errorMessage}</div>
      <div>{error?.errorMsg}</div>
      <form
        className='flex gap-[0.25rem] flex-col max-w-[300px]'
        action={action}
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
        <SubmitButton />
      </form>
    </>
  );
}

type TodoFormType = {
  createTodo: (
    prevState:
      | {
          errorMessage: string;
        }
      | undefined
      | unknown,
    formData: FormData
  ) => Promise<
    | {
        errorMessage: string;
        errorMsg?: undefined;
      }
    | {
        errorMsg: string;
        errorMessage?: undefined;
      }
  >;
};
