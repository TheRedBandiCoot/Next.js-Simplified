'use client';

export default function analyticsErrorPage({ error }: { error: Error }) {
  return <div className='card analytics error'>@@@@@@{error.message}</div>;
}
