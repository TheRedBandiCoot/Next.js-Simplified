import { wait } from '@/_libs/wait';

export default async function dashboardTestPage() {
  const dashboardTestText = await wait(2500, 'Dashboard Test');
  return <div className='card main'>{dashboardTestText}</div>;
}
