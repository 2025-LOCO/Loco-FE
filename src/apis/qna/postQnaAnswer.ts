// src/apis/qna/postQnaAnswer.ts
import apiInstance from "@/apis/apiInstance";

interface PostQnaAnswerRequest {
  question_id: number;
  content: string;
  like: string | null;
}

interface PostQnaAnswerResponse {
  answer_id: number;
  user_id: number;
  question_id: number;
  content: string;
  created_at: string;
  user_nickname: string;
  vote_type: string;
}

export async function postQnaAnswer(
  data: PostQnaAnswerRequest
): Promise<PostQnaAnswerResponse> {
  try {
    const response = await apiInstance.post<PostQnaAnswerResponse>(
      "/api/v1/qna/answers",
      data
    );
    return response.data;
  } catch (error) {
    console.error("[postQnaAnswer Error]", error);
    throw error;
  }
}
