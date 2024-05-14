'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <h2>Back To Home</h2>
      <Link className='text-green-700 text-2xl hover:text-red-500' href='/'>
        /Home
      </Link>
      <div>
        <button
          className='btn'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
