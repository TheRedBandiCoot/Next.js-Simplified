import { PostForm } from '@/components/PostForm';
import { wait } from '@/db/posts';
import { UserSelectOptions } from '../userSelectOptions';
import { getUsers } from '@/db/users';

export default async function NewPostPage() {
  const [_, users] = await Promise.all([wait(2000), getUsers()]);
  return (
    <>
      <h1 className='page-title'>New Post</h1>
      <PostForm userSelectOptions={<UserSelectOptions users={users} />} />
    </>
  );
}
