import { Metadata } from 'next';
import Link from 'next/link';
// "use client";
export const metadata: Metadata = {
  title: 'About Page',
  description: 'Desc From About',
  openGraph: {
    type: 'profile',
    firstName: 'Sam',
    lastName: 'Current'
  }
};

export default function About() {
  return (
    <>
      <Link href="/">Back To All Todos</Link>
      <h1>About Page</h1>
    </>
  );
}
