import Link from 'next/link';

export default function TestGroupRootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Test Group Layout</h1>
      {children}
    </>
  );
}
