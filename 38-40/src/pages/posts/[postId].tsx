import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { Post } from ".";
import { useRouter } from "next/router";

export default function PostPage({
  postId,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Post ID : {postId}</h1>
      <h1>{post.title}</h1>
    </>
  );
}

export const getStaticPaths = (async () => {
  console.log("Post ID testing - getStaticPaths");
  return { paths: [{ params: { postId: "1" } }], fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  console.log("Post ID testing - getStaticProps");

  const postId = params?.postId;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());

  return { props: { post: data as Post, postId } };
}) satisfies GetStaticProps;
