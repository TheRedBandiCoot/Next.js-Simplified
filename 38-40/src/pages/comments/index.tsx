export default function Comments({ comments }: any) {
  return <h1>comments - {comments.length}</h1>;
}

Comments.getInitialProps = async ({ query, req, res }: any) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((res) => res.json());
  return { comments: data };
};
