import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const Interr = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BEC'2025",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={Interr.className}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
