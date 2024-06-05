import { wait } from '@/_libs/wait';

export default async function analyticPage() {
  const analyticsText = await wait(2000, 'Analytics');
  // throw new Error('!Wrong Analytics');

  return <div className='card analytics'>{analyticsText}</div>;
}
