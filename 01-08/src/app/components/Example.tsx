'use client';

import { useParams } from 'next/navigation';

export function Example() {
  const params = useParams();
  return <h3>Example : {params.id}</h3>;
}
