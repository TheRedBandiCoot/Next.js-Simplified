import Nav from "@/_components/nav";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {modal}
        {children}
      </body>
    </html>
  );
}
