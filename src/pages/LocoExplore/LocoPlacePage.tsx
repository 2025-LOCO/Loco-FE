import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestPlaceIcon from "@/assets/images/explore_best.svg";
import NewPlaceIcon from "@/assets/images/explore_new.svg";

import type { Place } from "@/types/place";
import PlaceCard from "@/components/explore/PlaceCard";
import { useEffect, useState } from "react";
import {
  getExplorePlaceList,
  type ExplorePlaceItem,
  type GetExplorePlaceListResponse,
} from "@/apis/explore/getExplorePlaceList";

function convertToPlace(data: ExplorePlaceItem[]): Place[] {
  return data.map((item) => ({
    member_id: item.member_id,
    id: item.place_id,
    name: item.name,
    imageUrl: item.image_url ?? "",
    liked: item.liked,
    short_location: item.short_location,
    intro: item.intro,
    type: "공원",
    latitude: 0,
    longitude: 0,
  }));
}

export default function LocoPlacePage() {
  const [data, setData] = useState<GetExplorePlaceListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await getExplorePlaceList();
        setData(res);
      } catch (err) {
        console.error("장소 탐색 데이터 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  if (loading) return <div style={{ padding: "40px" }}>로딩 중...</div>;
  if (!data)
    return <div style={{ padding: "40px" }}>데이터를 불러오지 못했습니다.</div>;

  return (
    <>
      <ExploreCardShelf<Place>
        title="장소 랭킹"
        icon={<img src={BestPlaceIcon} alt="베스트장소아이콘" width={25} />}
        cardDataItems={convertToPlace(data.ranked_places)}
        exploreCard={(cardDataItem) => <PlaceCard data={cardDataItem} />}
      />
      <ExploreCardShelf<Place>
        title="신규 장소"
        icon={<img src={NewPlaceIcon} alt="신규장소아이콘" width={25} />}
        cardDataItems={convertToPlace(data.new_places)}
        exploreCard={(cardDataItem) => <PlaceCard data={cardDataItem} />}
      />
    </>
  );
}
