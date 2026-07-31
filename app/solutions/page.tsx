import { BookOpen } from "lucide-react";

export default function SolutionsPage() {
  // 챕터별 문제 배열 생성
  const chapter1 = Array.from({ length: 40 }, (_, i) => i + 1); // 1~40
  const chapter2 = Array.from({ length: 20 }, (_, i) => i + 41); // 41~60
  const chapter3 = Array.from({ length: 31 }, (_, i) => i + 61); // 61~91

  const renderGrid = (problems: number[]) => (
    <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-4 mt-6">
      {problems.map((num) => (
        <div
          key={num}
          className="flex items-center justify-center aspect-square text-2xl font-bold text-chalk border-2 border-dashed border-chalk/40 rounded-xl bg-teal-900/50 hover:bg-chalkYellow hover:text-teal-900 hover:border-chalkYellow hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {num}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12 py-12 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-chalkYellow flex items-center justify-center gap-4">
          <BookOpen className="w-10 h-10" />
          부교재 해설강의
        </h1>
        <p className="text-xl text-chalk/80 font-note">
          (해설 영상 업데이트 준비 중입니다)
        </p>
      </div>

      <div className="w-full space-y-16 p-8 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative bg-teal-950">
        {/* 장식용 지우개 흔적 */}
        <div className="absolute -top-4 -right-4 w-12 h-6 bg-teal-800 rounded-sm opacity-50 transform rotate-12"></div>

        {/* Chapter 1 */}
        <section>
          <h2 className="text-3xl font-bold text-chalkYellow tracking-wider border-b-2 border-dashed border-chalk/30 pb-4 inline-block">
            &lt;Chapter 1. 이차곡선&gt;
          </h2>
          {renderGrid(chapter1)}
        </section>

        {/* Chapter 2 */}
        <section>
          <h2 className="text-3xl font-bold text-chalkYellow tracking-wider border-b-2 border-dashed border-chalk/30 pb-4 inline-block">
            &lt;Chapter 2. 공간도형과 공간좌표&gt;
          </h2>
          {renderGrid(chapter2)}
        </section>

        {/* Chapter 3 */}
        <section>
          <h2 className="text-3xl font-bold text-chalkYellow tracking-wider border-b-2 border-dashed border-chalk/30 pb-4 inline-block">
            &lt;Chapter 3. 벡터&gt;
          </h2>
          {renderGrid(chapter3)}
        </section>
      </div>
    </div>
  );
}
