import { wait } from '@/_libs/wait';

export default async function dashboardTestPage() {
  const dashboardTestText = await wait(2000, 'Posts Def');
  return <div className='card posts'>{dashboardTestText}</div>;
}
