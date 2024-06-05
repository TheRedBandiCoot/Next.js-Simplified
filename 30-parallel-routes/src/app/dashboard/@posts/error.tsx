'use client';

export default function postsErrorPage({ error }: { error: Error }) {
  return <div className='card posts error'>{error.message}</div>;
}
