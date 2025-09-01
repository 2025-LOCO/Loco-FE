import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestRouteIcon from "@/assets/images/explore_best.svg";
import NewRouteIcon from "@/assets/images/explore_new.svg";

import * as D from "@/data/dummy/exploreRoutes";
import type { LocoRoute } from "@/types/locoRoute";
import RouteCard from "@/components/explore/RouteCard";

export default function LocoRoutePage() {
  return (
    <>
      <ExploreCardShelf<LocoRoute>
        title="루트 랭킹"
        icon={<img src={BestRouteIcon} alt="베스트루트아이콘" width={25} />}
        cardDataItems={D.bestRoutes}
        exploreCard={(cardDataItem) => <RouteCard data={cardDataItem} />}
      />
      <ExploreCardShelf<LocoRoute>
        title="신규 루트"
        icon={<img src={NewRouteIcon} alt="신규루트아이콘" width={25} />}
        cardDataItems={D.newRoutes}
        exploreCard={(cardDataItem) => <RouteCard data={cardDataItem} />}
      />
    </>
  );
}
