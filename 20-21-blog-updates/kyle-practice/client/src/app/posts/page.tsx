import { getPosts } from '@/db/posts';
import { getUsers } from '@/db/users';
import { PostCard, SkeletonPostCard } from '@/components/PostCard';
import { SkeletonList } from '@/components/Skeleton';
import { Suspense } from 'react';
import SearchForm from './SearchForm';

type PageProps = {
  searchParams: { query?: string; userId?: string };
};
export type PostAndSearchType = Required<
  Pick<PageProps['searchParams'], 'query' | 'userId'>
>;
export default function PostsPage({
  searchParams: { query = '', userId = '' }
}: PageProps) {
  return (
    <>
      <h1 className='page-title'>Posts</h1>
      <SearchForm key={`${userId}-${query}`} userOptions={<UserSelect />} />

      <div className='card-grid'>
        <Suspense
          key={`${userId}-${query}`}
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <PostGrid query={query} userId={userId} />
        </Suspense>
      </div>
    </>
  );
}

async function PostGrid({ query, userId }: PostAndSearchType) {
  const posts = await getPosts({ query, userId });
  return posts.map(post => <PostCard key={post.id} {...post} />);
}

async function UserSelect() {
  const users = await getUsers();

  return (
    <>
      <option value=''>Any</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </>
  );
}
