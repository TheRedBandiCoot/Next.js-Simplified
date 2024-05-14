import { getTodos } from '@/api/api';
import Link from 'next/link';

export default async function Test() {
  await getTodos();
  console.log('Rendering Test Page');

  return (
    <>
      <h1>Test Page</h1>
      <Link href='/'>/Home</Link>
    </>
  );
}
