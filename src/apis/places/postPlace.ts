import apiInstance from "../apiInstance";

export interface AddPlaceRequest {
  name: string;
  type: string;
  is_frequent: boolean;
  atmosphere: string;
  pros: string;
  cons: string;
  image_url: string;
  latitude: number;
  longitude: number;
  kakao_place_id: string;
  intro: string;
  phone: string;
  address_name: string;
  short_location: string;
  link: string;
}

export async function addPlace(data: AddPlaceRequest) {
  try {
    const res = await apiInstance.post("/api/v1/places", data);
    return res.data;
  } catch (error: any) {
    console.error("장소 추가 실패:", error.response?.data || error.message);
    throw error;
  }
}
