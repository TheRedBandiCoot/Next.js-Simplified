'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function Form() {
  const searchParams: URLSearchParams = useSearchParams();
  const router = useRouter();
  console.log(
    'Checking server re-render or not for every time url search params change'
  );

  return (
    <input
      type='text'
      value={searchParams.get('q') || ''}
      onChange={e => {
        const params = new URLSearchParams(searchParams);
        params.set('q', e.target.value);
        router.push(`/?${params.toString()}`);
      }}
    />
  );
}
