'use client';

export default function adminErrorPage({ error }: { error: Error }) {
  return <div className='card admin error'>{error.message}</div>;
}
