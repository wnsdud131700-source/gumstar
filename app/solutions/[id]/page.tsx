import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function SolutionDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // 현재는 1번 문항에 대한 링크를 기본으로 제공합니다.
  const videoId = "RtZcqVBc4kQ"; 
  const listId = "PLZFVgSfK9dAFhsj7D9mUrlYqsaztk73yS";
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?list=${listId}`;

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

        {/* Video Container */}
        <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-pastelBlue/30 bg-gray-100">
          <iframe 
            width="100%" 
            height="100%" 
            src={embedUrl}
            title={`${id}번 문항 해설강의`}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}
