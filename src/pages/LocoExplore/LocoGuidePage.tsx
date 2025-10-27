import { useEffect, useState } from "react";
import ExploreCardShelf from "@/components/explore/ExploreCardShelf";
import BestGuideIcon from "@/assets/images/explore_bestloco.svg";
import NewGuideIcon from "@/assets/images/explore_new.svg";
import GuideCard from "@/components/explore/GuideCard";
import {
  getExploreMembers,
  type ExploreMemberItem,
} from "@/apis/explore/getExploreMembers";

export default function LocoGuidePage() {
  const [bestGuides, setBestGuides] = useState<ExploreMemberItem[]>([]);
  const [newGuides, setNewGuides] = useState<ExploreMemberItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExploreMembers() {
      try {
        const data = await getExploreMembers();
        setBestGuides(data.best_users);
        setNewGuides(data.new_local_users);
      } catch (error) {
        console.error("로코지기 탐색 API 요청 실패:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchExploreMembers();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>로코지기를 불러오는 중입니다...</div>
    );
  }

  return (
    <>
      <ExploreCardShelf<ExploreMemberItem>
        title="BEST 로코지기"
        icon={<img src={BestGuideIcon} alt="베스트로코아이콘" width={25} />}
        cardDataItems={bestGuides}
        exploreCard={(cardDataItem) => <GuideCard data={cardDataItem as any} />}
      />

      <ExploreCardShelf<ExploreMemberItem>
        title="신규 로코지기"
        icon={<img src={NewGuideIcon} alt="신규로코아이콘" width={25} />}
        cardDataItems={newGuides}
        exploreCard={(cardDataItem) => <GuideCard data={cardDataItem as any} />}
      />
    </>
  );
}
