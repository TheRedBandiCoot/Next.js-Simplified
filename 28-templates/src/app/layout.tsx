import Link from 'next/link';
import './globals.css';
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <nav className='root-layout-nav'>
          <Link href='/'>Home</Link>
          <Link href='/team'>Team</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
