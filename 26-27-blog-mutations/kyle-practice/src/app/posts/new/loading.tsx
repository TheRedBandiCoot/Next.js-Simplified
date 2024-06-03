import { SkeletonPostForm } from '@/components/PostForm';

export default function loadingNewPostPage() {
  return (
    <>
      <h1 className='page-title'> Post</h1>
      <SkeletonPostForm />
    </>
  );
}
