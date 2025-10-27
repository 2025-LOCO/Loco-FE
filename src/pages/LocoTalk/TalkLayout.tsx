import LocationDropDown from "@/components/LocationDropDown";
import { Outlet } from "react-router";
import * as S from "./styles"; // LocoTalk의 스타일 파일 import
import Divider from "@/components/Divider";

export default function TalkLayout() {
  const TAB_MENUS = [
    { name: "로코지기", to: "/explore/loco-guide" },
    { name: "로코장소", to: "/explore/loco-place" },
    { name: "로코루트", to: "/explore/loco-route" },
    { name: "로코문답", to: "/loco-talk" },
  ];

  return (
    <>
      {/* 문답 섹션 */}
      <S.TalkSection>
        <div>
          <LocationDropDown />
          <S.LocationIntroduce>궁금한 지역을 선택해보세요</S.LocationIntroduce>
        </div>
        <S.Title>로코 문답</S.Title>

        {/* 탭 메뉴 + 질문하기 버튼 */}
        <S.TabContainer>
          {TAB_MENUS.map((tab) => (
            <S.TabItem to={tab.to} key={tab.name}>
              {tab.name}
            </S.TabItem>
          ))}

          <S.VerticalBar />
          <S.AskButton to="/loco-talk/edit">+ 질문하기</S.AskButton>
        </S.TabContainer>

        <Divider
          height="1px"
          backgroundColor="color-mix(in srgb, var(--color-navy) 30%, white);"
          maxWidth="100%"
        />

        {/* 하위 페이지 표시 영역 */}
        <Outlet />
      </S.TalkSection>
    </>
  );
}
