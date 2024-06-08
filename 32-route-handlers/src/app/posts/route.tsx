// export function GET() {
//   return Response.json({ msg: "Get Request" });
// }

import { createPost, getPosts } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") as string;
  const userId = Number(searchParams.get("userId"));
  const posts = await getPosts({ query, userId });
  return Response.json(posts);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await createPost(body);

  revalidatePath("/posts");
  revalidatePath(`/posts/${post.id}`);
  return Response.json(post);
}
