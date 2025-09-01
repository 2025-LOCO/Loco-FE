import type { MapType } from "@/types/map";
import { Outlet, useLocation } from "react-router";

import * as S from "./mapLayout.style";
import ArrowIcon from "@/assets/images/arrow_left.svg";
import { useState } from "react";

export default function MapLayout({ mapType }: { mapType: MapType }) {
  // constant
  const TAB_MENUS = [
    { name: "프로필", to: "profile" },
    { name: "장소", to: "place" },
    { name: "루트", to: "route" },
  ];

  // 현재 탭이 루트인지 확인
  const location = useLocation();
  const lastSeg = location.pathname.split("/").pop();
  const showRightPanel = lastSeg === "route";

  // state
  const [isLPanelOpen, setIsLPanelOpen] = useState(true);

  // handler
  function handleToggleOpen() {
    setIsLPanelOpen((prev) => !prev);
  }

  return (
    <>
      <S.MapLayoutRoot>
        <S.MapSection>
          배경지도
          <S.MapCanvas />
        </S.MapSection>

        <S.OverlaySection>
          <S.PanelSection>
            <S.LeftPanelContainer $isOpen={isLPanelOpen} id="left-panel">
              {/* 프로필, 장소, 루트 메뉴 탭 */}
              <S.TabContainer>
                {TAB_MENUS.map((tabMenu) => (
                  <S.TabItemContainer key={tabMenu.name}>
                    <S.TabItem to={tabMenu.to}>{tabMenu.name}</S.TabItem>
                  </S.TabItemContainer>
                ))}
              </S.TabContainer>
              <S.LeftPanelToggleBtn
                onClick={handleToggleOpen}
                $isOpen={isLPanelOpen}
                aria-label="패널 접기/펼치기"
              >
                <S.LeftArrowIcon src={ArrowIcon} alt="화살표아이콘" />
              </S.LeftPanelToggleBtn>

              <S.LeftPanelBody>
                <Outlet context={{ mapType }} />
              </S.LeftPanelBody>
            </S.LeftPanelContainer>

            {/* 현재 탭이 루트인 경우만 우측패널 표시 */}
            <S.RightPanelContainer $showRightPanel={showRightPanel}>
              <div>우측패널</div>
              <S.LocationBadge>경기 수원시 권선구</S.LocationBadge>
            </S.RightPanelContainer>
          </S.PanelSection>
        </S.OverlaySection>
      </S.MapLayoutRoot>
    </>
  );
}
