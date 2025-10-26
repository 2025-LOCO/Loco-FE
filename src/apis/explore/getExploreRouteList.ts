import apiInstance from "@/apis/apiInstance";

// 요청 타입
export type GetExploreRouteListRequest = void;

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
}

export type GetExploreRouteListResponse = ExploreRouteItem[];

/**
 * [GET] /api/v1/route/explore
 * 탐색 탭에서 루트 목록 조회
 */
export async function getExploreRouteList(): Promise<GetExploreRouteListResponse> {
  const res = await apiInstance.get<GetExploreRouteListResponse>(
    "/api/v1/route/explore"
  );
  return res.data;
}
