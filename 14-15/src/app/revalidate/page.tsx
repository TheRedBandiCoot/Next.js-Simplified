import { revalidatePath } from 'next/cache';

export default function Revalidate() {
  console.log('Rendering Revalidate Page');

  revalidatePath('/test');
  return <h1>Revalidate</h1>;
}
