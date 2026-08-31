import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function SolutionDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
// 임시로 문항 번호(id)와 유튜브 영상 ID를 매핑하는 객체입니다.
  // 곧 링크를 주시면 여기에 영상 ID를 넣으면 됩니다.
  // 예: "1": "유튜브영상ID"
  const videoLinks: Record<string, string> = {
    "1": "iNf3LDJYKH8", 
  };

  const videoId = videoLinks[id];

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8 py-12 px-6">
      
      {/* Back Button */}
      <div className="w-full flex justify-start">
        <Link 
          href="/solutions"
          className="flex items-center gap-2 text-xl text-gray-500 hover:text-pink-500 hover:scale-105 transition-transform duration-200"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>목록으로 돌아가기</span>
        </Link>
      </div>

      <div className="w-full bg-white/80 backdrop-blur-sm rounded-[3rem] shadow-xl shadow-pastelMint/40 p-8 md:p-12 flex flex-col items-center gap-10">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl tracking-wide text-pink-500 flex items-center justify-center gap-4 text-center break-keep">
          <PlayCircle className="w-10 h-10 text-pink-500 shrink-0" />
          {id}번 문항 해설강의
        </h1>

        {/* Video or Placeholder */}
        {videoId ? (
          <div className="w-full max-w-4xl aspect-video rounded-3xl shadow-lg border-4 border-pastelBlue/30 bg-black flex items-center justify-center overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${id}번 문항 해설강의`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="w-full max-w-4xl aspect-video rounded-3xl shadow-lg border-4 border-pastelBlue/30 bg-gray-50 flex items-center justify-center">
            <p className="text-3xl text-gray-400 font-medium">준비중입니다 ㅠㅠ</p>
          </div>
        )}
        
      </div>
    </div>
  );
}
