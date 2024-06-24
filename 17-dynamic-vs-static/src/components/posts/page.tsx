import { getPosts } from "@/api/posts";
import { PostCard } from "@/components/PostCard";
import { SkeletonList, SkeletonPostCard } from "@/components/Skeleton";
import { Suspense } from "react";

export default function PostsPage() {
  return (
    <>
      <h1 className="page-title">Posts</h1>

      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <Posts />
        </Suspense>
      </div>
    </>
  );
}

async function Posts() {
  const posts = await getPosts();
  return posts.map((post) => <PostCard key={post.id} {...post} />);
}
