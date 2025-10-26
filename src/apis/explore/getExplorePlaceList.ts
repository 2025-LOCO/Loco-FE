import apiInstance from "@/apis/apiInstance";

/**
 * [GET] /api/v1/places/explore
 * - 인기 장소 / 신규 장소 리스트 조회
 */

export type GetExplorePlaceListRequest = void;

export interface ExplorePlaceItem {
  member_id: number;
  place_id: number;
  name: string;
  image_url: string | null;
  liked: number;
  short_location: string;
  intro: string;
}

export interface GetExplorePlaceListResponse {
  ranked_places: ExplorePlaceItem[];
  new_places: ExplorePlaceItem[];
}

export async function getExplorePlaceList(): Promise<GetExplorePlaceListResponse> {
  const res = await apiInstance.get<GetExplorePlaceListResponse>(
    "/api/v1/places/explore"
  );
  return res.data;
}
