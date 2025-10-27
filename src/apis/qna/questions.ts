import apiInstance from "../apiInstance";

/** QnA 질문*/
export interface QnaQuestion {
  question_id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
  view_count: number;
  answer_count: number;
}

/** 질문 목록 조회: GET /api/v1/qna/questions */
export async function getQnaQuestions(): Promise<QnaQuestion[]> {
  const res = await apiInstance.get<QnaQuestion[]>("/api/v1/qna/questions", {
    headers: { Accept: "application/json" },
  });
  return res.data;
}
