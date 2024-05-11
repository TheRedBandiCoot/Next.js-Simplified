import { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Next JS Page'
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
