type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export async function getPosts() {
  await wait(2000);
  return fetch(`${process.env.API_URI}/posts`)
    .then(res => res.json())
    .then(data => data as Post[]);
}
export async function getPost(postId: string | number) {
  await wait(2000);
  return fetch(`${process.env.API_URI}/posts/${postId}`)
    .then(res => res.json())
    .then(data => data as Post);
}
export async function getUserPosts(userId: string | number) {
  await wait(2500);
  return fetch(`${process.env.API_URI}/posts?userId=${userId}`)
    .then(res => res.json())
    .then(data => data as Post[]);
}

export function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
