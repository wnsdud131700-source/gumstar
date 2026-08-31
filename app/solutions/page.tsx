import { BookOpen } from "lucide-react";
import Link from "next/link";
import { videoLinks } from "./videoData";

export default function SolutionsPage() {
  // 챕터별 문제 배열 생성
  const chapter1 = Array.from({ length: 40 }, (_, i) => i + 1); // 1~40
  const chapter2 = Array.from({ length: 20 }, (_, i) => i + 41); // 41~60
  const chapter3 = Array.from({ length: 33 }, (_, i) => i + 61); // 61~93

  const renderGrid = (problems: number[]) => (
    <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-4 mt-6 pb-8">
      {problems.map((num) => {
        const hasVideo = !!videoLinks[num.toString()];
        return (
          <Link
            key={num}
            href={`/solutions/${num}`}
            className={`flex items-center justify-center aspect-square text-2xl font-medium shadow-md rounded-full transition-transform duration-200 cursor-pointer ${
              hasVideo
                ? "bg-pink-400 text-white shadow-pink-300 hover:bg-pink-500 hover:scale-110"
                : "bg-white text-gray-600 shadow-pastelBlue/50 hover:bg-pastelMint hover:text-gray-800 hover:scale-110"
            }`}
          >
            {num}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="w-full max-w-6xl flex flex-col items-center gap-12 py-12 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl tracking-wide text-pink-500 flex items-center justify-center gap-4">
          <BookOpen className="w-10 h-10 text-pink-500" />
          부교재 해설강의
        </h1>

      </div>

      <div className="w-full space-y-12 p-8 bg-white/70 backdrop-blur-sm rounded-[3rem] shadow-xl shadow-pastelMint/30 relative">

        {/* Chapter 1 */}
        <section>
          <h2 className="text-3xl text-sky-500 tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 1. 이차곡선
          </h2>
          {renderGrid(chapter1)}
        </section>

        {/* Chapter 2 */}
        <section>
          <h2 className="text-3xl text-teal-500 tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 2. 공간도형과 공간좌표
          </h2>
          {renderGrid(chapter2)}
        </section>

        {/* Chapter 3 */}
        <section>
          <h2 className="text-3xl text-orange-400 tracking-wider pb-4 inline-block drop-shadow-sm">
            ☁️ Chapter 3. 벡터
          </h2>
          {renderGrid(chapter3)}
        </section>
      </div>
    </div>
  );
}
