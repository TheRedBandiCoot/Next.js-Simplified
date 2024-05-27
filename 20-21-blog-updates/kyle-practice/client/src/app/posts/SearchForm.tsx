'use client';
import { FormGroup } from '@/components/FormGroup';
import { FormEvent, Suspense, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchForm({
  userOptions
}: {
  userOptions: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const queryRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLSelectElement>(null);

  const query = searchParams.get('query') || '';
  const userId = searchParams.get('userId') || '';

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set('query', queryRef.current?.value || '');
    params.set('userId', userIdRef.current?.value || '');
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <form onSubmit={handleFormSubmit} className='form mb-4'>
      <div className='form-row'>
        <FormGroup>
          <label htmlFor='query'>Query</label>
          <input
            type='search'
            name='query'
            id='query'
            ref={queryRef}
            defaultValue={query}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='userId'>Author</label>
          <select
            name='userId'
            id='userId'
            ref={userIdRef}
            defaultValue={userId}
          >
            <Suspense fallback={<option value=''>Loading...</option>}>
              {userOptions}
            </Suspense>
          </select>
        </FormGroup>
        <button className='btn'>Filter</button>
      </div>
    </form>
  );
}
