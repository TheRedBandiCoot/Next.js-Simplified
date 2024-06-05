import { wait } from '@/_libs/wait';

export default async function adminPage() {
  const adminText = await wait(1000, 'Admin');
  return <div className='card admin'>{adminText}</div>;
}
