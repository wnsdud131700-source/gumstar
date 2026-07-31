"use client";

import { useChat } from "ai/react";
import { Send, User, Bot } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-3xl flex flex-col h-[70vh] border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative overflow-hidden bg-teal-950">
      <div className="p-6 border-b-2 border-dashed border-chalk/40 bg-teal-900 flex items-center justify-between z-10">
        <h1 className="text-3xl text-chalkYellow tracking-widest font-bold">준영쌤의 질문게시판 💬</h1>
        <div className="text-chalk/60 font-note text-lg">기하, 미적분 무엇이든 물어보세요!</div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-chalk/50 font-note text-2xl space-y-4">
            <Bot className="w-16 h-16 opacity-50" />
            <p>안녕! 나는 준영쌤이야. 수학 관련해서 모르는 게 있으면 편하게 물어봐!</p>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-4 ${
              m.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div className={`p-3 rounded-full shrink-0 ${m.role === "user" ? "bg-chalkYellow text-teal-900" : "bg-teal-800 text-chalk"}`}>
              {m.role === "user" ? <User size={24} /> : <Bot size={24} />}
            </div>
            <div
              className={`max-w-[80%] p-4 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                m.role === "user"
                  ? "bg-chalkYellow/20 border-2 border-chalkYellow text-chalk"
                  : "bg-teal-800/50 border-2 border-dashed border-chalk/40 text-chalk font-note text-xl"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full shrink-0 bg-teal-800 text-chalk">
              <Bot size={24} className="animate-pulse" />
            </div>
            <div className="max-w-[80%] p-4 rounded-2xl bg-teal-800/50 border-2 border-dashed border-chalk/40 text-chalk/60 font-note text-xl animate-pulse">
              준영쌤이 분필을 끄적이며 고민 중입니다...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-teal-900 border-t-2 border-dashed border-chalk/40 flex gap-4"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="여기에 수학 질문을 적어주세요..."
          className="flex-1 bg-transparent border-b-2 border-dashed border-chalk/60 p-4 text-xl focus:outline-none focus:border-chalkYellow transition-colors placeholder:text-chalk/30"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-4 bg-chalkYellow text-teal-900 rounded-2xl hover:bg-yellow-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={28} />
        </button>
      </form>
    </div>
  );
}
