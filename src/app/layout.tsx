import { Roboto } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const Work_San = Roboto({
  weight: ['400', '700'],
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
        className={Work_San.className}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
