import { useRouter } from "next/router";

export default function Dynamicfolder(props: any) {
  // console.log(props);
  const router = useRouter();

  return <h1>Dynamic Folder : {router.query.folderId}</h1>;
}
