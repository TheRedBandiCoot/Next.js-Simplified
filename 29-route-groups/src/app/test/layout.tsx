import Link from 'next/link';

export default function TestRootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <h1>Test Layout</h1>

        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/login'>login</Link>
          <Link href='/signup'>Sign Up</Link>
          <Link href='/team'>Team</Link>
          <Link href='/todos'>Todos</Link>
          <Link href='/posts'>Posts</Link>
          <Link href='/test/test1'>Test/Test1</Link>
          <Link href='/test/test2'>Test/Test2</Link>
          <Link href='/test/contact'>Test/Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
