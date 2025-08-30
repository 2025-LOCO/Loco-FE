import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestPlaceIcon from "@/assets/images/explore_best.svg";
import NewPlaceIcon from "@/assets/images/explore_new.svg";

import * as D from "@/data/dummy/explorePlaces";
import type { Place } from "@/types/place";
import PlaceCard from "@/components/explore/PlaceCard";

export default function LocoPlacePage() {
  return (
    <>
      <ExploreCardShelf<Place>
        title="장소 랭킹"
        icon={<img src={BestPlaceIcon} alt="베스트장소아이콘" width={25} />}
        cardDataItems={D.bestPlaces}
        exploreCard={(cardDataItem) => <PlaceCard data={cardDataItem} />}
      />
      <ExploreCardShelf<Place>
        title="신규 장소"
        icon={<img src={NewPlaceIcon} alt="신규장소아이콘" width={25} />}
        cardDataItems={D.newPlaces}
        exploreCard={(cardDataItem) => <PlaceCard data={cardDataItem} />}
      />
    </>
  );
}
