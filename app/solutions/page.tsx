import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function SolutionsPage() {
  // 1부터 91까지의 숫자 배열 생성
  const problems = Array.from({ length: 91 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12 py-12 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-chalkYellow flex items-center justify-center gap-4">
          <BookOpen className="w-10 h-10" />
          부교재 해설강의
        </h1>
        <p className="text-xl text-chalk/80 font-note">
          원하는 문제 번호를 선택하여 해설을 확인하세요.
        </p>
      </div>

      <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-4 p-8 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative bg-teal-950">
        {/* 장식용 지우개 흔적 */}
        <div className="absolute -top-4 -right-4 w-12 h-6 bg-teal-800 rounded-sm opacity-50 transform rotate-12"></div>

        {problems.map((num) => (
          <Link
            key={num}
            href={`/solutions/${num}`}
            className="flex items-center justify-center aspect-square text-2xl font-bold text-chalk border-2 border-dashed border-chalk/40 rounded-xl hover:bg-chalkYellow hover:text-teal-900 hover:border-chalkYellow hover:scale-105 transition-all duration-300"
          >
            {num}
          </Link>
        ))}
      </div>
    </div>
  );
}
