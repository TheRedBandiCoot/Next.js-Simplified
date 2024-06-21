"use client";
import Image from "next/image";
import mountain from "../../public/images/mountain.jpg";
import Script from "next/script";
import Link from "next/link";
const ModelImg =
  "https://images.unsplash.com/photo-1593836788196-9fd68e904906?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <>
      <div style={{ width: "500px", height: "500px", position: "relative" }}>
        <Image
          width={500}
          height={500}
          // src={"/images/mountain.jpg"}
          src={mountain}
          alt="This is a Mountain"
        />
        {/* <Image
          placeholder="blur"
          fill
          src={mountain}
          alt="This is a Mountain"
        /> */}
        {/* <Image
          fill
          priority
          // width={750}
          // height={500}
          src={ModelImg}
          alt="This is a Mountain"
        /> */}
      </div>
      <h1
        style={{ userSelect: "none" }}
        onClick={() => {
          if ($("h1").text() === "Bye") {
            $("h1").text("HI");
            return;
          }
          $("h1").text("Bye");
        }}
      >
        HI
      </h1>
      <Script
        onLoad={() => {
          console.log("On Loaded");
        }}
        onReady={() => {
          console.log("Ready On Mount Every Time");
        }}
        onError={() => {
          console.log("Error");
        }}
        data-id="custom"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      />
      <Link href={"/test"}>Test</Link>
    </>
  );
}
