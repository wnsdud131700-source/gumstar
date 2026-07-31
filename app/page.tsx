import Link from "next/link";
import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center gap-12 py-16 px-8 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative">
      {/* 칠판 지우개 흔적 같은 장식용 요소 */}
      <div className="absolute top-4 left-4 w-16 h-8 bg-teal-800 rounded-sm opacity-50 transform -rotate-12"></div>
      
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-chalkYellow leading-snug">
          2026학년도 2학기<br />신도고등학교 기하 부교재 해설강의
        </h1>
        <p className="text-2xl md:text-3xl opacity-90 leading-relaxed font-note">
          문제 번호를 클릭하면 해설 영상으로 이동합니다.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Link href="/solutions" className="group flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-dashed border-chalkYellow text-chalkYellow text-3xl font-bold rounded-2xl hover:bg-chalkYellow hover:text-teal-900 transition-all duration-300">
          <Pencil className="w-8 h-8 group-hover:animate-bounce" />
          <span>들어가기</span>
        </Link>
      </div>
    </section>
  );
}
