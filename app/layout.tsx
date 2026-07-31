import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased min-h-screen flex flex-col bg-teal-900 text-[#fdfbf7] font-chalk selection:bg-teal-700 selection:text-white">
        <header className="p-6 border-b-2 border-dashed border-[#fdfbf7]/40 flex justify-between items-center">
          <div className="text-3xl tracking-wider text-chalkYellow">
            준영T의 수학교실
          </div>
          <nav>
            <ul className="flex gap-6 text-2xl">
              <li className="hover:text-chalkYellow cursor-pointer transition-colors">공지사항</li>
              <li className="hover:text-chalkYellow cursor-pointer transition-colors">자료실</li>
              <li className="hover:text-chalkYellow cursor-pointer transition-colors">이차곡선</li>
              <li className="hover:text-chalkYellow cursor-pointer transition-colors">부교재 해설강의</li>
              <li className="hover:text-chalkYellow cursor-pointer transition-colors">질문게시판</li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          {children}
        </main>
        <footer className="p-4 border-t-2 border-dashed border-[#fdfbf7]/40 text-center text-lg text-[#fdfbf7]/70 font-note">
          © {new Date().getFullYear()} 준영T의 수학교실. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
