import type { Metadata } from "next";
import "./styles.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Read Only Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">My App</div>
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/revalidate-0">R-0</Link>
            </li>
            <li>
              <Link href="/revalidate5">r5</Link>
            </li>
            <li>
              <Link href="/force-dynamic">force-dynamic</Link>
            </li>
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
