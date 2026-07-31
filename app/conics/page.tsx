"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/utils/supabase/client";

type ConicType = "x_squared" | "y_squared";

interface Question {
  type: ConicType;
  p: number;
}

export default function ConicsQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  // User Inputs
  const [focusX, setFocusX] = useState("");
  const [focusY, setFocusY] = useState("");
  const [directrixVar, setDirectrixVar] = useState<"x" | "y">("x");
  const [directrixVal, setDirectrixVal] = useState("");
  
  const [quizFinished, setQuizFinished] = useState(false);
  const [userName, setUserName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Generate 5 random questions
    const generated: Question[] = [];
    const pValues = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i++) {
      generated.push({
        type: Math.random() > 0.5 ? "x_squared" : "y_squared",
        p: pValues[Math.floor(Math.random() * pValues.length)],
      });
    }
    setQuestions(generated);
  }, []);

  const currentQ = questions[currentQuestionIndex];

  const handleSubmitAnswer = (e: FormEvent) => {
    e.preventDefault();
    if (!currentQ) return;

    let isCorrect = false;
    const ansFocusX = parseInt(focusX);
    const ansFocusY = parseInt(focusY);
    const ansDirVal = parseInt(directrixVal);

    if (currentQ.type === "y_squared") {
      // y^2 = 4px -> Focus(p, 0), Directrix x = -p
      if (
        ansFocusX === currentQ.p &&
        ansFocusY === 0 &&
        directrixVar === "x" &&
        ansDirVal === -currentQ.p
      ) {
        isCorrect = true;
      }
    } else {
      // x^2 = 4py -> Focus(0, p), Directrix y = -p
      if (
        ansFocusX === 0 &&
        ansFocusY === currentQ.p &&
        directrixVar === "y" &&
        ansDirVal === -currentQ.p
      ) {
        isCorrect = true;
      }
    }

    if (isCorrect) setScore((prev) => prev + 20); // 20 points per question = 100 max

    // Next question or finish
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prev) => prev + 1);
      // Reset inputs
      setFocusX("");
      setFocusY("");
      setDirectrixVal("");
    } else {
      setQuizFinished(true);
    }
  };

  const handleSaveScore = async () => {
    if (!userName.trim()) return alert("이름을 입력해주세요!");
    setIsSubmitting(true);
    
    const { error } = await supabase.from("conic_scores").insert([
      { user_name: userName, score: score }
    ]);

    setIsSubmitting(false);
    if (error) {
      console.error(error);
      alert("점수 저장에 실패했습니다. (Supabase 연결 설정을 확인하세요)");
    } else {
      setSubmitSuccess(true);
    }
  };

  if (questions.length === 0) return <div className="text-center p-8">문제 생성 중...</div>;

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-8 py-12 px-6 border-4 border-dashed border-[#fdfbf7]/60 rounded-3xl relative">
      <h1 className="text-4xl text-chalkYellow tracking-widest font-bold">포물선의 초점과 준선</h1>
      
      {!quizFinished ? (
        <div className="w-full space-y-8 flex flex-col items-center">
          <div className="text-2xl text-[#fdfbf7]/80">문제 {currentQuestionIndex + 1} / 5</div>
          
          <div className="text-5xl my-6 font-note tracking-widest">
            {currentQ.type === "y_squared" 
              ? `y² = ${4 * currentQ.p}x` 
              : `x² = ${4 * currentQ.p}y`}
          </div>

          <form onSubmit={handleSubmitAnswer} className="w-full flex flex-col gap-6 items-center">
            <div className="flex items-center gap-4 text-2xl">
              <span>초점 F(</span>
              <input 
                type="number" 
                required
                value={focusX} 
                onChange={(e) => setFocusX(e.target.value)}
                className="w-16 bg-transparent border-b-2 border-dashed border-chalk text-center focus:outline-none" 
              />
              <span>,</span>
              <input 
                type="number" 
                required
                value={focusY} 
                onChange={(e) => setFocusY(e.target.value)}
                className="w-16 bg-transparent border-b-2 border-dashed border-chalk text-center focus:outline-none" 
              />
              <span>)</span>
            </div>

            <div className="flex items-center gap-4 text-2xl">
              <span>준선</span>
              <select 
                value={directrixVar} 
                onChange={(e) => setDirectrixVar(e.target.value as "x"|"y")}
                className="bg-transparent border-b-2 border-dashed border-chalk focus:outline-none text-chalkYellow"
              >
                <option value="x" className="bg-teal-900 text-chalk">x</option>
                <option value="y" className="bg-teal-900 text-chalk">y</option>
              </select>
              <span>=</span>
              <input 
                type="number" 
                required
                value={directrixVal} 
                onChange={(e) => setDirectrixVal(e.target.value)}
                className="w-16 bg-transparent border-b-2 border-dashed border-chalk text-center focus:outline-none" 
              />
            </div>

            <button type="submit" className="mt-8 px-8 py-3 border-2 border-chalkYellow text-chalkYellow hover:bg-chalkYellow hover:text-teal-900 rounded-xl transition-colors text-2xl">
              제출 및 다음 문제
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full space-y-8 flex flex-col items-center text-center">
          <h2 className="text-4xl text-chalkYellow">퀴즈 종료!</h2>
          <div className="text-3xl">당신의 점수는 <span className="text-5xl font-bold">{score}</span> 점 입니다.</div>
          
          {!submitSuccess ? (
            <div className="flex flex-col items-center gap-4 mt-8">
              <input 
                type="text" 
                placeholder="이름을 입력하세요" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-transparent border-b-2 border-dashed border-chalk text-center focus:outline-none text-2xl p-2 placeholder:text-chalk/50"
              />
              <button 
                onClick={handleSaveScore}
                disabled={isSubmitting}
                className="px-8 py-3 border-2 border-chalk text-chalk hover:bg-chalk hover:text-teal-900 rounded-xl transition-colors text-2xl disabled:opacity-50"
              >
                {isSubmitting ? "저장 중..." : "점수 저장하기"}
              </button>
            </div>
          ) : (
            <div className="text-2xl text-green-300 mt-8 p-4 border-2 border-dashed border-green-300 rounded-xl">
              점수가 성공적으로 기록되었습니다!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
