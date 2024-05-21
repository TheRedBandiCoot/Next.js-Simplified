'use client';

import { Button } from '@/components/ui/button';
import { ErrorHandler } from '@/utils/util';
import { useActionState } from 'react';

const status = !true;

async function incr(prevState: number) {
  await wait(2000);
  return prevState + 1;
}
export default function Home() {
  const [count, handleForm, isPending] = useActionState(incr, 0);

  if (status) throw new ErrorHandler('Invalid state', 400);

  return (
    <>
      <form action={handleForm}>
        <div className='h-screen dark:bg-black flex items-center justify-center'>
          <div>
            <h1>Counter</h1>
            <section>
              <Title title='Home Page' />
              {isPending ? <h1>Loading...</h1> : <p>Count : {count}</p>}
            </section>
            <Button type='submit' disabled={isPending}>
              {isPending ? 'Loading...' : 'Incr'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

function Title({ title }: { title: string }) {
  return <title>{title}</title>;
}

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
