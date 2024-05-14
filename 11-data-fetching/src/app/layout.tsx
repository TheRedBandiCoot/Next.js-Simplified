import type { Metadata } from 'next';
import './globals.css';
import { ClientLayoutComponent } from '@/components/ClientLayoutComponent';

export const metadata: Metadata = {
  title: 'Data fetching and caching Next'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col h-screen justify-center items-center'>
        <ClientLayoutComponent>{children}</ClientLayoutComponent>
      </body>
    </html>
  );
}
