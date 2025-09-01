import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestGuideIcon from "@/assets/images/explore_bestloco.svg";
import NewGuideIcon from "@/assets/images/explore_new.svg";

import * as D from "@/data/dummy/exploreGuides";
import type { Guide } from "@/types/guide";
import GuideCard from "@/components/explore/GuideCard";

export default function LocoGuidePage() {
  return (
    <>
      <ExploreCardShelf<Guide>
        title="BEST 로코지기"
        icon={<img src={BestGuideIcon} alt="베스트장소아이콘" width={25} />}
        cardDataItems={D.bestGuides}
        exploreCard={(cardDataItem) => <GuideCard data={cardDataItem} />}
      />
      <ExploreCardShelf<Guide>
        title="신규 로코지기"
        icon={<img src={NewGuideIcon} alt="신규장소아이콘" width={25} />}
        cardDataItems={D.newGuides}
        exploreCard={(cardDataItem) => <GuideCard data={cardDataItem} />}
      />
    </>
  );
}
