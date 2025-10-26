import apiInstance from "@/apis/apiInstance";

/** 요청 타입 */
export type GetExploreMembersRequest = void;

/** 로코지기(회원) 개별 타입 */
export interface ExploreMemberItem {
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

/** 응답 타입 */
export interface GetExploreMembersResponse {
  best_users: ExploreMemberItem[];
  new_local_users: ExploreMemberItem[];
}

/**
 * [GET] /api/v1/users/loco-explore
 * 로코지기 탐색 - 베스트/신규 로코지기 목록 조회
 */
export async function getExploreMembers(): Promise<GetExploreMembersResponse> {
  const res = await apiInstance.get<GetExploreMembersResponse>(
    "/api/v1/users/loco-explore"
  );
  return res.data;
}
