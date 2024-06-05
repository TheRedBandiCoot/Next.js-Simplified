import { wait } from '@/_libs/wait';

export default async function postPage() {
  const postsText = await wait(4000, 'Posts');
  // throw new Error('!Wrong Posts');
  return <div className='card posts'>{postsText}</div>;
}
