import Link from "next/link";
import Script from "next/script";

export default function TestPage() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Script id="logger">{`console.log("HI TEST")`}</Script>
    </>
  );
}
