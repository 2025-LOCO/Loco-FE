import apiInstance from "@/apis/apiInstance";

/**
 * QnA 댓글(Answer) 삭제 API
 * @param answerId - 삭제할 댓글의 ID
 */
export async function deleteQnaAnswer(answerId: number) {
  try {
    const response = await apiInstance.delete(
      `/api/v1/qna/answers/${answerId}`
    );
    return response.data;
  } catch (error) {
    console.error("[deleteQnaAnswer Error]", error);
    throw error;
  }
}
