import LocationDropDown from "@/components/LocationDropDown";
import { Outlet } from "react-router";
import * as S from "./styles/layout";
import Divider from "@/components/Divider";

export default function ExploreLayout() {
  const TAB_MENUS = [
    { name: "로코지기", to: "loco-guide" },
    { name: "로코장소", to: "loco-place" },
    { name: "로코루트", to: "loco-route" },
    { name: "로코문답", to: "/loco-talk" },
  ];
  return (
    <>
      {/* 탐색 섹션 */}
      <S.ExploreSection>
        <div>
          <LocationDropDown />
          <S.LocationIntroduce>궁금한 지역을 선택해보세요</S.LocationIntroduce>
        </div>
        <S.Title>로코 탐색</S.Title>

        {/* 로코지기, 로코장소, 로코루트, 로코문답 탐색 메뉴 탭 */}
        <S.TabContainer>
          {TAB_MENUS.map((tabMenu) => (
            <S.TabItem to={tabMenu.to} key={tabMenu.name}>
              {tabMenu.name}
            </S.TabItem>
          ))}
        </S.TabContainer>

        <Divider
          height="1px"
          backgroundColor="color-mix(in srgb, var(--color-navy) 30%, white);"
          maxWidth="100%"
        />
        <Outlet />
      </S.ExploreSection>

      {/* 지역 행사 섹션 */}
      <S.LocalEventSection>
        지역행사리스트를 불러오고 있습니다 ..
      </S.LocalEventSection>
    </>
  );
}
