import type { MapType } from "@/types/map";
import { Outlet, useLocation } from "react-router";

import * as S from "./mapLayout.style";

export default function MapLayout({ mapType }: { mapType: MapType }) {
  const TAB_MENUS = [
    { name: "프로필", to: "profile" },
    { name: "장소", to: "place" },
    { name: "루트", to: "route" },
  ];

  // 현재 탭이 루트인지 확인
  const location = useLocation();
  const lastSeg = location.pathname.split("/").pop();
  const showRightPanel = lastSeg === "route";

  return (
    <>
      <S.MapLayoutRoot>
        <S.MapSection>
          배경지도
          <S.MapCanvas />
        </S.MapSection>

        <S.OverlaySection>
          <S.PanelSection>
            <S.LeftPanelContainer>
              {/* 프로필, 장소, 루트 메뉴 탭 */}
              <S.TabContainer>
                {TAB_MENUS.map((tabMenu) => (
                  <S.TabItem to={tabMenu.to} key={tabMenu.name}>
                    {tabMenu.name}
                  </S.TabItem>
                ))}
              </S.TabContainer>

              <S.LeftPanelBody>
                <Outlet context={{ mapType }} />
              </S.LeftPanelBody>
            </S.LeftPanelContainer>

            {/* 현재 탭이 루트인 경우만 우측패널 표시 */}
            {showRightPanel && (
              <S.RightPanelContainer>우측패널</S.RightPanelContainer>
            )}
          </S.PanelSection>
        </S.OverlaySection>
      </S.MapLayoutRoot>
    </>
  );
}
