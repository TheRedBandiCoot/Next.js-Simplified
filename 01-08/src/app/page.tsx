// 'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Home Page',
//   description: 'Desc From Home',
//   openGraph:{
//     type:"profile",
//     firstName:"Gourab",
//     lastName:"Chatterjee"
//   }
// };

type Props = {
  params: string;
  searchParams: { id: string | string[] | undefined };
};

// export async function generateMetadata({params,searchParams}:Props): Promise<Metadata> {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${searchParams.id}`);
//     const data = await res.json();
//     return { title: data && data[0]  ? data[0].email : "email"}
//   } catch (error) {
//     console.log(error);
//     return { title: "email" }
//   }
// }

async function getPost() {
  await wait(2000);
  // throw new Error('testing Error');
  return fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
    res.json()
  );
}

export default function Home() {
  return (
    <>
      <h1>All Todos Length</h1>
      {/* <p>{post.length}</p> */}
      <Suspense fallback={'loading...'}>
        <TodoList />
      </Suspense>
    </>
  );
}

async function TodoList() {
  const post = await getPost();
  return (
    <>
      <p>{post.length}</p>
      <ul>
        <li>
          <Link className="green" href={`/about`}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="red" href={`/todos/random`}>
            Test Non link
          </Link>
        </li>
        <li>
          <Link className="green" href={`/example/1`}>
            Example/1
          </Link>
        </li>
        <li>
          <Link className="blue" href={`/example/1/54/as87wa`}>
            Example/1/54/as87wa
          </Link>
        </li>
        {post.map((post: any,i: number) => {
	   if(i >= 3) return;
	   return( 
	   	<li key={post.id}> 
		   <Link href={`/todos/${post.id}`}>{post.title}</Link>
		</li> 
	)})}
      </ul>
    </>
  );
}

export function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
