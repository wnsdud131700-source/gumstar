import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center gap-12 py-16 px-8 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative">
      {/* 칠판 지우개 흔적 같은 장식용 요소 */}
      <div className="absolute top-4 left-4 w-16 h-8 bg-teal-800 rounded-sm opacity-50 transform -rotate-12"></div>
      
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-chalkYellow">
          준영쌤과 함께하는 &apos;기하&apos;
        </h1>
        <p className="text-2xl md:text-3xl opacity-90 leading-relaxed font-note">
          수학은 단순한 계산이 아닙니다.<br />
          논리적 사고와 문제 해결의 예술입니다.
        </p>
      </div>

      <button className="group flex items-center gap-3 px-8 py-4 mt-8 bg-transparent border-2 border-dashed border-chalkYellow text-chalkYellow text-2xl rounded-2xl hover:bg-chalkYellow hover:text-teal-900 transition-all duration-300">
        <Pencil className="w-6 h-6 group-hover:animate-bounce" />
        <span>시작하기</span>
      </button>
    </section>
  );
}
