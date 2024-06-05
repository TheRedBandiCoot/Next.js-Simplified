import Link from 'next/link';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <h1>Application Layout</h1>
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <Link href='/'>Home</Link>
          <Link href='/team'>Team</Link>
          <Link href='/todos'>Todos</Link>
          <Link href='/login'>login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
