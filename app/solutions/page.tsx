import { BookOpen } from "lucide-react";

export default function SolutionsPage() {
  // 챕터별 문제 배열 생성
  const chapter1 = Array.from({ length: 40 }, (_, i) => i + 1); // 1~40
  const chapter2 = Array.from({ length: 20 }, (_, i) => i + 41); // 41~60
  const chapter3 = Array.from({ length: 31 }, (_, i) => i + 61); // 61~91

  const renderGrid = (problems: number[]) => (
    <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-4 mt-6 pb-8">
      {problems.map((num) => (
        <div
          key={num}
          className="flex items-center justify-center aspect-square text-2xl font-bold text-gray-600 bg-white shadow-md shadow-pastelBlue/50 rounded-full hover:bg-pastelMint hover:text-gray-800 hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          {num}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12 py-12 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-pastelPink flex items-center justify-center gap-4">
          <BookOpen className="w-10 h-10 text-pastelPink" />
          부교재 해설강의
        </h1>
        <p className="text-xl text-gray-500">
          (해설 영상 업데이트 준비 중입니다 🎈)
        </p>
      </div>

      <div className="w-full space-y-12 p-8 bg-white/70 backdrop-blur-sm rounded-[3rem] shadow-xl shadow-pastelMint/30 relative">

        {/* Chapter 1 */}
        <section>
          <h2 className="text-3xl font-bold text-pastelBlue tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 1. 이차곡선
          </h2>
          {renderGrid(chapter1)}
        </section>

        {/* Chapter 2 */}
        <section>
          <h2 className="text-3xl font-bold text-pastelMint tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 2. 공간도형과 공간좌표
          </h2>
          {renderGrid(chapter2)}
        </section>

        {/* Chapter 3 */}
        <section>
          <h2 className="text-3xl font-bold text-pastelPeach tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 3. 벡터
          </h2>
          {renderGrid(chapter3)}
        </section>
      </div>
    </div>
  );
}
