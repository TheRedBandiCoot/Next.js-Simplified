import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '18-static-paths'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col h-screen justify-center items-center'>
        {children}
      </body>
    </html>
  );
}
