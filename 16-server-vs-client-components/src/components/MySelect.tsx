'use client';
import { getTodo } from '@/api/todo';
import Select from 'react-select';

export async function MySelect() {
  //   const todo = await getTodo();
  return (
    <>
      {/* {todo.title} */}
      <Select
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]}
      />
    </>
  );
}
