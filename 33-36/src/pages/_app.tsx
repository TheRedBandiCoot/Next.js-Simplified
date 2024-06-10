import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const value = "Hi";
  const folderName = "Folder";

  return (
    <div>
      <Nav />
      <h1>Every Page - (_app.tsx)</h1>
      <Component value={value} folderName={folderName} {...pageProps} />
    </div>
  );
}

function Nav() {
  return (
    <nav style={{ display: "flex", gap: "0.5rem" }}>
      <Link href={"/"}>/Home</Link>
      <Link href={"/error"}>/Error</Link>
      <Link href={"/test"}>/Test</Link>
      <Link href={"/folder"}>/Folder</Link>
      <Link href={"/folder/45"}>/Folder/[folderId]</Link>
      <Link href={"/folder/test"}>/Folder/Test</Link>
      <Link href={"/newfolder"}>/NewFolder</Link>
      <Link href={"/newfolder/7845"}>/NewFolder/[newfolderId].tsx</Link>
    </nav>
  );
}
