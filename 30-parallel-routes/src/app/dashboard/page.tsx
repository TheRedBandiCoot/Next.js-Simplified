import { wait } from '@/_libs/wait';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';

export default async function dashboardPage() {
  revalidatePath('/');
  return (
    <Suspense
      fallback={<div className='card main loading'>Loading Dashboard...</div>}
    >
      <Dashboard />
    </Suspense>
  );
}

async function Dashboard() {
  const dashboardText = await wait(3000, 'Main Dashboard');
  // throw new Error('Something went wrong in dashboard');
  return <div className='card main'>{dashboardText}</div>;
}
