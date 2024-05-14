import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Data fetching and caching Next'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  console.log('layout');

  return (
    <html lang='en'>
      <body className='flex flex-col h-screen justify-center items-center'>
        {children}
      </body>
    </html>
  );
}
