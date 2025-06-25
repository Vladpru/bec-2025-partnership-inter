import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const Interr = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Partnership BEC'2025",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Bec-logo.svg" />
      </head>
      <body
        className={Interr.className}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
