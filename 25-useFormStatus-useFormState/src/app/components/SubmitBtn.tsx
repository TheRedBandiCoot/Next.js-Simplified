'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-slate-500 p-2 rounded-md text-2xl font-semibold active:bg-slate-600'
      disabled={pending}
    >
      {pending ? 'Adding Todo...' : 'Add Todo'}
    </button>
  );
}
