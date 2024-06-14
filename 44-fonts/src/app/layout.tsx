import { inter, localFonts } from "./fonts";

export default function RootLayout({ children }: any) {
  return (
    <html>
      {/* <body className={roboto.className}> */}
      {/* <body className={inter.variable}> */}
      {/* <body style={inter.style}> */}
      {/* <body className={inter.className}> */}
      <body className={localFonts.className}>
        {/* <body> */}
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
