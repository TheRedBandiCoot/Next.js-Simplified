import { wait } from '@/_libs/wait';

export default async function defaultPage() {
  const analyticsText = await wait(5000, 'Analytics Def');

  return <div className='card analytics'>{analyticsText}</div>;
}
