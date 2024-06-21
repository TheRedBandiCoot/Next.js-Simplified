import Script from "next/script";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        /> */}
      </body>
    </html>
  );
}
