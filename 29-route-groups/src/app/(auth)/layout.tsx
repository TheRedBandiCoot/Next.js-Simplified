import Link from 'next/link';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <h1>Auth Layout</h1>
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <Link href='/'>Home</Link>
          <Link href='/login'>login</Link>
          <Link href='/signup'>Sign Up</Link>
          <Link href='/posts'>Posts</Link>{' '}
        </nav>
        {children}
      </body>
    </html>
  );
}
