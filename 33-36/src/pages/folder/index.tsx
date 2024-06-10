import Head from "next/head";

export default function Folder({ folderName }: { folderName: string }) {
  return (
    <>
      <Head>
        <title>Folder Page</title>
        <meta name="description" content="desc 1" />
      </Head>

      <h1>{folderName}</h1>
      <FolderNestedComponent />
    </>
  );
}

function FolderNestedComponent() {
  return (
    <>
      <Head>
        <title>Folder Nested Component Page</title>
        <meta name="description" content="desc 2" />
      </Head>
      <h1>Folder Nested Component</h1>
    </>
  );
}
