import { getTodos } from '@/api/api';
import Link from 'next/link';

export default async function Home() {
  await getTodos();

  console.log('Rendering Home Page');

  return (
    <>
      <h1>Home Page</h1>
      <Link href='/test'>/Test</Link>
    </>
  );
}
