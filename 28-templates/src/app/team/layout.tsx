'use client';
import Link from 'next/link';
import React from 'react';

export default function teamLayout({
  children
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    console.log('Layout Render');
  }, []);
  return (
    <>
      <nav className='root-layout-nav'>
        <Link href='/team/1'>Team 1</Link>
        <Link href='/team/2'>Team 2</Link>
      </nav>
      {children}
    </>
  );
}
