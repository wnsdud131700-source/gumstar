import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "2026-2 기하 부교재 해설강의",
  description: "2026학년도 2학기 신도고등학교 기하 부교재 해설강의",
  openGraph: {
    title: "2026-2 기하 부교재 해설강의",
    description: "2026학년도 2학기 신도고등학교 기하 부교재 해설강의",
  }
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
          © 2026-2 기하 부교재 해설강의. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
