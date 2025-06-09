import { Work_Sans } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const Work_San = Work_Sans({
  weight: ['400'],
  subsets: ['latin'],
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
        className={Work_San.className}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
