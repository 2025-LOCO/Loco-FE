import apiInstance from "@/apis/apiInstance";

// 요청 타입
export interface GetExploreRouteListRequest {
  tag_period?: number;
  tag_env?: string;
  tag_with?: string;
  tag_move?: string;
  tag_atmosphere?: string;
  tag_place_count?: number;
}

// 태그 타입
export interface ExploreRouteTag {
  period: string;
  env: string;
  with: string;
  move: string;
  atmosphere: string;
  place_count: string;
}

// 경로 내 장소 타입
export interface ExploreRoutePlace {
  id: number;
  name: string;
  category: string;
  day: number;
  order: number;
}

// 교통수단 타입
export interface ExploreRouteTransportation {
  id: number;
  name: string;
  day: number;
  order: number;
}

// 전체 경로 아이템 타입
export interface ExploreRouteItem {
  userId: number;
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  intro: string;
  liked: number;
  tags: ExploreRouteTag;
  places: ExploreRoutePlace[];
  transportations: ExploreRouteTransportation[];
  countReal: number;
  countSoso: number;
  countBad: number;
  created_at: string;
}

export type GetExploreRouteListResponse = ExploreRouteItem[];

/**
 * [GET] /api/v1/routes/search
 * 탐색 탭에서 루트 목록 조회 (태그 검색 포함)
 */
export async function getExploreRouteList(
  params?: GetExploreRouteListRequest
): Promise<GetExploreRouteListResponse> {
  const res = await apiInstance.get<GetExploreRouteListResponse>(
    "/api/v1/routes/search",
    { params } // 쿼리 파라미터 전달
  );
  return res.data;
}
