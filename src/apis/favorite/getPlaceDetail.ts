import apiInstance from "@/apis/apiInstance";

export interface PlaceDetailResponse {
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
}

export async function getPlaceDetail(
  placeId: number
): Promise<PlaceDetailResponse> {
  const res = await apiInstance.get(`/api/v1/places/${placeId}`);
  return res.data;
}
