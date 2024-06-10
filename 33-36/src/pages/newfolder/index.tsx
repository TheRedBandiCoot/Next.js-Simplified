export default function newFolder() {
  return <h1>New Folder</h1>;
}

export function getServerSideProps() {
  throw Error("Testing Error");
}
