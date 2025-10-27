// src/apis/favorite/getFavoritePlaces.ts
import apiInstance from "@/apis/apiInstance";

// 요청 타입
export type GetMyPlacesRequest = {
  user_id: number;
};

// 응답 타입
export interface MyPlaceItem {
  id: number;
  user_id: number;
  place_id: number;
  created_at: string;
  place: {
    place_id: number;
    name: string;
    type: string;
    is_frequent: boolean;
    atmosphere: string;
    pros: string;
    cons: string;
    image_url: string;
    count_real: number;
    count_normal: number;
    count_bad: number;
    latitude: number;
    longitude: number;
    kakao_place_id: string;
    intro: string;
    phone: string;
    address_name: string;
    link: string;
    liked: number;
    user_id: number;
    city_name: string;
  };
}

// 전체 응답 타입
export type GetMyPlacesResponse = MyPlaceItem[];

// API 함수
export async function getMyPlaces(
  user_id: number
): Promise<GetMyPlacesResponse> {
  const res = await apiInstance.get<GetMyPlacesResponse>(
    `/api/v1/places/by-user/${user_id}`
  );
  return res.data;
}
