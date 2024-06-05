import Link from 'next/link';

export default function notFound() {
  return (
    <>
      <h1>not-found</h1>
      <Link href={'/'}>Home</Link>
    </>
  );
}
