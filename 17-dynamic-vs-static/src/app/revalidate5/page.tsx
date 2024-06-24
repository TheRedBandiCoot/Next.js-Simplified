import { getPosts } from "@/api/posts";

export const revalidate = 5;

export default async function revalidate5() {
  const posts = await getPosts();

  return <div>revalidate5</div>;
}
