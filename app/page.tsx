import Link from "next/link";
import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center gap-12 py-16 px-8 bg-white rounded-[3rem] shadow-xl shadow-pastelMint/40 relative">
      
      <div className="text-center space-y-6 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800 leading-snug">
          2026학년도 2학기<br />신도고등학교 기하 부교재 해설강의
        </h1>
        <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed">
          문제 번호를 클릭하면 해설 영상으로 이동합니다 ✨
        </p>
      </div>

      <div className="flex gap-4 mt-8 mb-4">
        <Link href="/solutions" className="group flex items-center gap-3 px-12 py-6 bg-pastelPink text-white text-3xl font-bold rounded-full shadow-lg shadow-pastelPink/50 hover:bg-pink-400 hover:scale-105 transition-transform duration-200">
          <Pencil className="w-8 h-8 group-hover:rotate-12 transition-transform duration-200" />
          <span>들어가기</span>
        </Link>
      </div>
    </section>
  );
}
