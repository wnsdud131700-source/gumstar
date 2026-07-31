import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { supabase } from '@/utils/supabase/client';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // 최신 사용자 메시지 저장
  const lastMessage = messages[messages.length - 1];
  if (lastMessage && lastMessage.role === 'user') {
    await supabase.from('chat_logs').insert([
      { role: 'user', content: lastMessage.content }
    ]);
  }

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: "너는 '준영쌤의 수학교실'에서 학생들의 수학 질문을 받아주는 친절한 수학 선생님 '준영쌤'이야. 반말과 존댓말을 적절히 섞어 쓰며, 특히 '기하'와 '미적분'에 대해 알기 쉽게 설명해 줘. 칠판에 판서하듯 단계별로 논리적으로 설명해 줘.",
    messages,
    onFinish: async (event) => {
      // AI의 답변이 모두 완료된 후 DB에 저장
      await supabase.from('chat_logs').insert([
        { role: 'assistant', content: event.text }
      ]);
    }
  });

  return result.toDataStreamResponse();
}
