import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Read Only Blog - By Kyle'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <nav className='top-nav'>
          <div className='nav-text-large'>My App</div>
          <ul className='nav-list'>
            <li>
              <Link href='/posts'>Posts</Link>
            </li>
            <li>
              <Link href='/users'>Users</Link>
            </li>
            <li>
              <Link href='/todos'>Todos</Link>
            </li>
          </ul>
        </nav>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
