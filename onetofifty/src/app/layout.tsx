import type { Metadata } from 'next';
import './globals.css';
import Header from './Components/Header';

export const metadata: Metadata = {
  title: 'OneToFifty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
