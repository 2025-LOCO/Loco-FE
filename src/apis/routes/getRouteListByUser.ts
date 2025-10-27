import apiInstance from "@/apis/apiInstance";

export interface RouteTag {
  period: string;
  env: string;
  with: string;
  move: string;
  atmosphere: string;
  place_count: string;
}

export interface RoutePlace {
  id: number;
  name: string;
  category: string;
  day: number;
  order: number;
}

export interface RouteTransportation {
  id: number;
  name: string;
  day: number;
  order: number;
}

export interface RouteItem {
  userId: number;
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  intro: string;
  liked: number;
  tags: RouteTag;
  places: RoutePlace[];
  transportations: RouteTransportation[];
  countReal: number;
  countSoso: number;
  countBad: number;
  created_at: string;
}

/**
 * [GET] /api/v1/routes/by-user/{user_id}
 * 특정 유저의 루트 목록 조회
 */
export async function getRouteListByUser(userId: number): Promise<RouteItem[]> {
  const res = await apiInstance.get<RouteItem[]>(
    `/api/v1/routes/by-user/${userId}`
  );
  return res.data;
}
