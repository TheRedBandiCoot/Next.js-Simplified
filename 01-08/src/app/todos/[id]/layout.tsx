import Link from 'next/link';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">Back To All Todos</Link>
      <h3>Todo layout</h3>
      {children}
    </>
  );
}
