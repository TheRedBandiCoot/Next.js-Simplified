import type { Comment } from "@/types/comment.type";
import wait from "@/utils/wait";

export async function getPostComments(postId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((data) => data as [Comment]);
}
