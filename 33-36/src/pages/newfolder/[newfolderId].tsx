import { useRouter } from "next/router";

export default function DynamicNewFolder() {
  const router = useRouter();

  return (
    <>
      <h1>Dynamic New Folder</h1>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
}
