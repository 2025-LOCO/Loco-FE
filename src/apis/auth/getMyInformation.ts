import apiInstance from "@/apis/apiInstance";

// 요청 타입
export type GetMyInformationRequest = void;

// 응답 타입
export interface GetMyInformationResponse {
  id: number;
  email: string;
  nickname: string;
  intro: string | null;
  image_url: string | null;
  city_id: string | null;
  created_at: string;
  ranking: number | null;
  points: number;
  grade: string;
  my_places_count: number;
  my_routes_count: number;
  my_answers_count: number;
  my_places_liked_count: number;
  my_routes_liked_count: number;
}

export async function getMyInformation(): Promise<GetMyInformationResponse> {
  const res = await apiInstance.get<GetMyInformationResponse>(
    "/api/v1/users/me"
  );
  return res.data;
}
