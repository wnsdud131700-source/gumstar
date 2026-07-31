import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";

export const metadata: Metadata = {
  title: "준영T의 수학교실",
  description: "미적분Ⅰ, 그리고 기하",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col bg-pastelBlue text-gray-800 font-jua selection:bg-pastelPink selection:text-white">

        <main className="flex-1 flex flex-col items-center justify-center p-8">
          {children}
        </main>
        <footer className="p-6 text-center text-xl text-gray-600">
          © {new Date().getFullYear()} 준영T의 수학교실. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
