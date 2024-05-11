import Link from 'next/link';

export default function page({ params }: { params: { id: string[] } }) {
  const { id } = params;
  console.log(id);

  return (
    <>
      <Link href={`/`}>Back To Home</Link>
      <hr />
      <Link href={`/example`}>
        Back To <span className="green">EXAMPLE</span>
      </Link>
      <h1>Example routes</h1>
      <h2>{id?.join('/')}</h2>
    </>
  );
}
