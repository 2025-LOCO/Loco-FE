import type { MapType } from "./map";

export const PLACE_TYPES = [
  "공원",
  "전시/컨벤션",
  "쇼핑거리",
  "복합문화거리",
  "카페",
  "베이커리",
  "플랜트샵",
  "갤러리",
  "루프탑 라운지",
] as const;

export type PlaceType = (typeof PLACE_TYPES)[number];

export interface Place {
  id: number;
  name: string;
  imageUrl: string | null;
  liked: number;
  location: string;
  intro: string;
  type: PlaceType;
  latitude?: number;
  longitude?: number;
  atmosphere?: string;
  recommend?: string;
  notice?: string;
  count_real?: number;
  count_soso?: number;
  count_bad?: number;
  kakao_place_id?: number;
}

export interface KakaoPlace {
  id?: number;
  name: string;
  location: string;
  link: string;
  type: PlaceType;
  latitude: number;
  longitude: number;
  kakao_place_id: string;
}

export interface PlaceCardProps {
  place?: Place | null;
  isCard?: boolean;
  mapType?: MapType;
  isInSelectedPlaceDetail?: boolean;
  handleClickLike?: () => void;
  isLiked?: boolean;
  //  handleClickLike?: (placeId: number) => void;
}
