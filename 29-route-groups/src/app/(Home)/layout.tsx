import Link from 'next/link';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <h1>Root Layout</h1>
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/login'>login</Link>
          <Link href='/signup'>Sign Up</Link>
          <Link href='/team'>Team</Link>
          <Link href='/todos'>Todos</Link>
          <Link href='/posts'>Posts</Link>
          <Link href='/test/test1'>Test 1</Link>
          <Link href='/test/test2'>Test 2</Link>
          <Link href='/test/contact'>Contact</Link>
          <Link href='/samerouteconflict'>/samerouteconflict</Link>
          <span>
            Remove this and bracket also to show same parallel route conflict
            error
          </span>
          <Link href='/samerouteconflict(removethis)'>
            /samerouteconflict(removethis)
          </Link>
          <Link href='/components'>/Components</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
