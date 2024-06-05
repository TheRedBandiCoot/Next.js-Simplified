// import { wait } from '@/_libs/wait';
// import { Suspense } from 'react';

import { wait } from '@/_libs/wait';
import Link from 'next/link';

export default async function dashboardLayout({
  children,
  analytics,
  posts,
  admin,
  login
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  posts: React.ReactNode;
  admin: React.ReactNode;
  login: React.ReactNode;
}) {
  const user = getUser();
  if (!user.isLoggedIn) return login;
  // await wait(3000, '');
  return (
    <>
      <nav>
        <Link href={'/dashboard'}>Prod</Link>
        <Link href={'/dashboard/test'}>Test</Link>
      </nav>
      <div className='dashboard-grid'>
        {children}
        {analytics}
        {posts}
        {/* {user.isAdmin && admin} */}
      </div>
    </>
  );
}

// async function Analytics() {
//   const analyticsText = await wait(2000, 'Analytics');
//   return <div className='card analytics'>{analyticsText}</div>;
// }
// async function Posts() {
//   const postsText = await wait(4000, 'Posts');
//   return <div className='card posts'>{postsText}</div>;
// }

function getUser() {
  return { isAdmin: true, isLoggedIn: true };
}
