import type { MapType } from "@/types/map";
import { Outlet, useLocation } from "react-router";

import * as S from "./mapLayout.style";
import ArrowLeftIcon from "@/assets/images/arrow_left.svg";
import ArrowRightIcon from "@/assets/images/arrow_right.svg";
import ArrowDownIcon from "@/assets/images/arrow_down.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import DeleteIcon from "@/assets/images/delete.svg";
import EditIcon from "@/assets/images/edit.svg";

import { useState } from "react";
import PlaceCard from "@/components/place/placeCard";
import VoteBar from "@/components/VoteBar";
import RouteTimeline from "@/components/route/RouteTimeLine";
import { bestPlaces } from "@/data/dummy/explorePlaces";
import MapCanvas from "@/components/map/MapCanvas";
// import { buildDays } from "@/utils/buildDays";

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
  const [isRPanelOpen, setIsRPanelOpen] = useState(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isRouteDetailOpen, setIsRouteDetailOpen] = useState(true);
  const [isRouteRecommendOpen, setIsRouteRecommendOpen] = useState(false);

  // handler
  function handleToggleLPanelOpen() {
    setIsLPanelOpen((prev) => !prev);
  }

  function handleCloseRPanel() {
    setIsRPanelOpen(false);
  }

  function handleClickLike() {
    setIsLiked((prev) => !prev);
  }

  function handleToggleRouteDetail() {
    setIsRouteDetailOpen((prev) => !prev);
  }

  function handleToggleRouteRecommend() {
    setIsRouteRecommendOpen((prev) => !prev);
  }

  return (
    <>
      <S.MapLayoutRoot>
        <S.MapSection>
          <MapCanvas />
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
                onClick={handleToggleLPanelOpen}
                $isOpen={isLPanelOpen}
                aria-label="패널 접기/펼치기"
              >
                <S.LeftArrowIcon src={ArrowLeftIcon} alt="왼쪽화살표아이콘" />
              </S.LeftPanelToggleBtn>

              <S.LeftPanelBody>
                <Outlet context={{ mapType }} />
              </S.LeftPanelBody>
            </S.LeftPanelContainer>
            {/* <PlaceCard handleClickLike={handleClickLike} isLiked={isLiked} /> */}
            {/* 현재 탭이 루트인 경우만 우측패널 표시 */}
            <S.RightPanelContainer
              $isOpen={isRPanelOpen}
              $showRightPanel={showRightPanel}
            >
              <S.PanelTitleContainer onClick={handleCloseRPanel}>
                <S.PanelTitleImg
                  src={ArrowRightIcon}
                  alt="오른쪽화살표아이콘"
                />
                <S.PanelTitle>루트 소개</S.PanelTitle>
              </S.PanelTitleContainer>
              <S.RouteInfoSection>
                <S.RouteTitle>해피 경주 여행</S.RouteTitle>
                <S.RouteIntro>
                  루트소개글입니다루트소개글입니다루트소개글입니다루트소개글입니다루트소개글입니다루트소개글입니다
                </S.RouteIntro>
                <S.RouteTagContainer>
                  <S.RouteTag># 걸어서</S.RouteTag>
                  <S.RouteTag># 1박2일</S.RouteTag>
                  <S.RouteTag># 조용한</S.RouteTag>
                </S.RouteTagContainer>
                <VoteBar counts={[60, 30, 10]} />
              </S.RouteInfoSection>
              <S.ToggleSection>
                <S.ToggleTitleContainer onClick={handleToggleRouteDetail}>
                  <S.ToggleIconWrapper $isOpen={isRouteDetailOpen}>
                    <img src={ArrowDownIcon} alt="아래화살표아이콘" />
                  </S.ToggleIconWrapper>
                  <S.ToggleRouteDetail>루트 보기</S.ToggleRouteDetail>
                </S.ToggleTitleContainer>
                <S.ToggleContentContainer $isOpen={isRouteDetailOpen}>
                  <RouteTimeline />
                </S.ToggleContentContainer>
              </S.ToggleSection>
              <S.ToggleSection>
                <S.ToggleTitleContainer onClick={handleToggleRouteRecommend}>
                  <S.ToggleIconWrapper $isOpen={isRouteRecommendOpen}>
                    <img src={ArrowDownIcon} alt="아래화살표아이콘" />
                  </S.ToggleIconWrapper>
                  <S.ToggleRouteDetail>추가 장소 추천</S.ToggleRouteDetail>
                </S.ToggleTitleContainer>

                <S.ToggleContentContainer $isOpen={isRouteRecommendOpen}>
                  {/* 추후 장소 리스트 컴포넌트화 */}
                  <S.ItemListContainer>
                    {bestPlaces.map((place) => (
                      <S.ItemContainer key={place.id}>
                        <S.ItemImgWrapper></S.ItemImgWrapper>
                        <S.ItemContentsContainer>
                          <S.ItemTitle>{place.name}</S.ItemTitle>
                          <S.ItemType>{place.type}</S.ItemType>
                          <S.LikedContainer>
                            <img src={LikedIcon} alt="담아요아이콘" />
                            <S.LikedNum>{place.liked}</S.LikedNum>
                          </S.LikedContainer>
                        </S.ItemContentsContainer>
                      </S.ItemContainer>
                    ))}
                  </S.ItemListContainer>
                </S.ToggleContentContainer>
              </S.ToggleSection>
              {mapType !== "public" && (
                <S.BtnContainer>
                  <S.BtnWrapper>
                    <img src={EditIcon} alt="수정아이콘" />
                  </S.BtnWrapper>
                  <S.BtnWrapper>
                    <img src={DeleteIcon} alt="삭제아이콘" />
                  </S.BtnWrapper>
                </S.BtnContainer>
              )}
              <S.LocationBadge>경기 수원시 권선구</S.LocationBadge>
            </S.RightPanelContainer>
          </S.PanelSection>
        </S.OverlaySection>
      </S.MapLayoutRoot>
    </>
  );
}
