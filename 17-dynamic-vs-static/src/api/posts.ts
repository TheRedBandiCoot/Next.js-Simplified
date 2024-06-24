import type { Post } from "@/types/post.type";
import wait from "@/utils/wait";

export async function getPosts() {
  // await wait(2000);
  return fetch(`${process.env.API_URI}/posts`, { next: { revalidate: 0 } })
    .then((res) => res.json())
    .then((data) => data as [Post]);
}
export async function getPost(postId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => data as Post);
}

export async function getUserPost(userId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data as [Post]);
}
