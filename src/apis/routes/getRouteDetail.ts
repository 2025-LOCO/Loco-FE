import apiInstance from "@/apis/apiInstance";

/** 단일 루트 상세 타입 정의 */
export interface RouteDetail {
  userId: number;
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  intro: string;
  liked: number;
  tags: {
    period: string;
    env: string;
    with: string;
    move: string;
    atmosphere: string;
    place_count: string;
  };
  places: {
    id: number;
    name: string;
    category: string;
    day: number;
    order: number;
  }[];
  transportations: {
    id: number;
    name: string;
    day: number;
    order: number;
  }[];
  countReal: number;
  countSoso: number;
  countBad: number;
  created_at: string;
}

/**
 * 단일 루트 상세 조회 API
 * @param routeId 조회할 루트 ID
 * @returns 해당 루트 상세 데이터
 */
export async function getRouteDetail(routeId: number): Promise<RouteDetail> {
  try {
    const res = await apiInstance.get<RouteDetail>(`/api/v1/routes/${routeId}`);
    return res.data;
  } catch (error) {
    console.error("❌ 루트 상세 조회 실패:", error);
    throw error;
  }
}
