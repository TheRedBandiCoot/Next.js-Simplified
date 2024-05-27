import useSWR, { type SWRConfiguration } from 'swr';

const swrOptions: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateOnMount: false
};

export async function getTodo(API_URI?: string) {
  await wait(2000);
  const res = await fetch(API_URI!);
  const data: { title: string } = await res.json();
  return data;
}

export function useSwrTodo(API_URI: string) {
  const { data, isValidating, mutate } = useSWR(API_URI, getTodo, swrOptions);
  return { data, loading: isValidating, mutate };
}

function wait(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
