import apiInstance from "@/apis/apiInstance";

export async function deleteQnaPost(questionId: number) {
  try {
    const response = await apiInstance.delete(
      `/api/v1/qna/questions/${questionId}`
    );
    return response.data;
  } catch (error) {
    console.error("[deleteQnaPost Error]", error);
    throw error;
  }
}
