export interface LocoRoute {
  id: number;
  name: string;
  imageUrl: string | null;
  location: string;
  intro: string;
  period: string;
  tags: HashTag[];
  places: Place[];
  transportations: Transportation[];
}

interface HashTag {
  id: number;
  name: string;
}

// 순서는 day, order로 정렬된 상태로 백엔드에서 받아야 함
interface Place {
  id: number;
  name: string;
}

// 순서는 day,order로 정렬된 상태로 백엔드에서 받아야 함
interface Transportation {
  id: number;
  name: string;
}
