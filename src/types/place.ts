import type { MapType } from "./map";

export interface Place {
  id: number;
  name: string;
  imageUrl: string | null;
  liked: number;
  short_location?: string;
  location?: string;
  intro: string;
  type: string;
  latitude: number;
  longitude: number;
  atmosphere?: string;
  recommend?: string;
  notice?: string;
  count_real?: number;
  count_soso?: number;
  count_bad?: number;
  kakao_place_id?: string;
  link?: string;
  phone?: string;
  member_id?: number;
}

export interface KakaoPlace {
  id?: number;
  name: string;
  location: string;
  link: string;
  type: string;
  latitude: number;
  longitude: number;
  kakao_place_id: string;
  phone: string;
}

export interface PlaceCardProps {
  place?: Place | null;
  isCard?: boolean;
  mapType?: MapType;
  isInSelectedPlaceDetail?: boolean;
  handleClickLike?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isLiked?: boolean;
  //  handleClickLike?: (placeId: number) => void;
}
