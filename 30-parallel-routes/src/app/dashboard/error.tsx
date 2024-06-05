'use client';

export default function mainErrorPage({ error }: { error: Error }) {
  return <div className='card main error'>{error.message}</div>;
}
