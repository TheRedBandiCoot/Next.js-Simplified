import { revalidatePath, revalidateTag } from 'next/cache';

export default function Revalidate() {
  // revalidatePath('/test');
  // revalidateTag('todo');
  revalidateTag('DB');
  return <h1>Revalidate</h1>;
}
