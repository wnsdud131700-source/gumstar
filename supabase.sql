-- 1. conic_scores 테이블 생성
CREATE TABLE public.conic_scores (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_name text NOT NULL,
    score integer NOT NULL DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT conic_scores_pkey PRIMARY KEY (id)
);

-- 2. 누구나 점수를 등록하고 조회할 수 있도록 RLS(Row Level Security) 설정
ALTER TABLE public.conic_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON public.conic_scores
    AS PERMISSIVE FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Enable insert access for all users" ON public.conic_scores
    AS PERMISSIVE FOR INSERT
    TO public
    WITH CHECK (true);
