import { rockybilly } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html className={rockybilly.className}>
      <body>{children}</body>
    </html>
  );
}