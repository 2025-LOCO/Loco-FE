import apiInstance from "@/apis/apiInstance";

export async function getQnADetail(questionId: number) {
  const res = await apiInstance.get(`/api/v1/qna/questions/${questionId}`);
  return res.data;
}
