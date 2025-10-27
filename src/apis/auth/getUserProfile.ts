import apiInstance from "@/apis/apiInstance";

export interface UserProfileResponse {
  id: number;
  nickname: string;
  city_name: string;
  intro: string;
  avatar_url: string;
  created_at: string;
  ranking: number;
  points: number;
  grade: string;
  ranking_percentile: number;
  liked: number;
}

// user_id 기반 사용자 정보 조회
export async function getUserProfile(
  userId: number
): Promise<UserProfileResponse> {
  const res = await apiInstance.get(`/api/v1/users/${userId}`);
  return res.data;
}
