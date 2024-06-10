import Head from "next/head";

export default function Home({ value }: { value: string }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page {value}</h1>
    </>
  );
}
