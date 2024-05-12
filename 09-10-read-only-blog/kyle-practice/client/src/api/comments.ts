type Comment = {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
};

export async function getPostComments(postId: string | number) {
  await wait(3000);
  return fetch(`${process.env.API_URI}/comments?postId${postId}`)
    .then(res => res.json())
    .then(data => data as Comment[]);
}

export function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
