import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Read Only Blog"
}

type RootLayoutType = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">
            <Link href="/">My App</Link>
          </div>
          <ul className="nav-list">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
