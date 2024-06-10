import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function PostPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Posts List - {posts.length}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = (async () => {
  console.log("Posts testing");

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

  return { props: { posts: data as Post[] }, revalidate: 10 };
}) satisfies GetStaticProps;

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
