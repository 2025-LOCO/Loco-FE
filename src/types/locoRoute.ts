export interface LocoRoute {
  id: number;
  name: string;
  imageUrl: string | null;
  location: string;
  intro: string;
  liked: number;
  tags: HashTag[];
  places: RoutePlace[];
  transportations: Transportation[];
  count_real?: number;
  count_soso?: number;
  count_bad?: number;
}

interface HashTag {
  id: number;
  name: string;
}

// 순서는 day, order로 정렬된 상태로 백엔드에서 받아야 함
export interface RoutePlace {
  id: number;
  name: string;
  category: string;
  day: number;
  order: number;
}

// 순서는 day,order로 중복없이 정렬된 상태로 백엔드에서 받아야 함
export interface Transportation {
  id: number;
  name: string;
  day: number;
  order: number;
}
