import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function SolutionDetailPage({ params }: { params: { id: string } }) {
  const problemNumber = params.id;

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-12 py-12 px-6">
      <div className="w-full flex justify-start">
        <Link 
          href="/solutions" 
          className="flex items-center gap-2 text-chalk/70 hover:text-chalkYellow transition-colors text-xl font-note"
        >
          <ArrowLeft className="w-6 h-6" />
          목록으로 돌아가기
        </Link>
      </div>

      <div className="w-full flex flex-col items-center gap-8 p-12 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl bg-teal-950 relative">
        <div className="absolute -top-4 left-8 w-16 h-8 bg-teal-800 rounded-sm opacity-50 transform -rotate-6"></div>
        
        <h1 className="text-5xl font-bold tracking-widest text-chalkYellow">
          {problemNumber}번 문제 해설
        </h1>
        
        <div className="w-full aspect-video bg-teal-900 border-2 border-dashed border-chalk/40 rounded-2xl flex flex-col items-center justify-center gap-4 text-chalk/50 hover:bg-teal-800/50 transition-colors cursor-pointer group">
          <PlayCircle className="w-20 h-20 group-hover:text-chalkYellow group-hover:scale-110 transition-all duration-300" />
          <p className="text-2xl font-note">준비 중인 영상입니다...</p>
        </div>

        <div className="w-full text-center space-y-4 font-note text-xl text-chalk/80 mt-4">
          <p>이곳에 {problemNumber}번 문제의 해설 영상이나 텍스트가 들어갈 예정입니다.</p>
          <p>추후 유튜브 링크나 이미지 등을 자유롭게 추가하실 수 있습니다!</p>
        </div>
      </div>
    </div>
  );
}
