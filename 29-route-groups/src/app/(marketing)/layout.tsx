import Link from 'next/link';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <h1>Marketing Layout</h1>
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/posts'>Posts</Link>
          <Link href='/todos'>Todos</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
