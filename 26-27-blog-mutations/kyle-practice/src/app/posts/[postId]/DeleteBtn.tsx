'use client';

import { useTransition } from 'react';
import { deletePostAction } from './actions';

export default function DeleteButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      className='btn btn-outline btn-danger'
      onClick={() => {
        startTransition(async () => {
          await deletePostAction(postId);
        });
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
