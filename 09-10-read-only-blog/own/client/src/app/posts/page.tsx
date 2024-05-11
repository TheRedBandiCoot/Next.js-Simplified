import { Suspense } from "react"
import { getPosts } from "@/api/posts"
import { PostCard, SkeletonPostCard } from "@/components/PostCard"
import { SkeletonList } from "@/components/Skeleton"

export default function PostList() {
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
          <ShowPost />
        </Suspense>
      </div>
    </>
  )
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
type PostType = Post

async function ShowPost() {
  const posts: PostType[] = await getPosts()
  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  )
}
