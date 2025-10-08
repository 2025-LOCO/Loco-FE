import type { MapType } from "@/types/map";
import { Outlet, useLocation } from "react-router";

import * as S from "./mapLayout.style";
import ArrowLeftIcon from "@/assets/images/arrow_left.svg";
import ArrowRightIcon from "@/assets/images/arrow_right.svg";
import ArrowDownIcon from "@/assets/images/arrow_down.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import DeleteIcon from "@/assets/images/delete.svg";
import EditIcon from "@/assets/images/edit.svg";

import { useEffect, useRef, useState } from "react";
// import PlaceCard from "@/components/place/placeCard";
import VoteBar from "@/components/VoteBar";
import RouteTimeline from "@/components/route/RouteTimeLine";
import MapCanvas, { type MapCanvasRef } from "@/components/map/MapCanvas";
import { bestPlaces } from "@/data/dummy/explorePlaces";
import { bestRoutes } from "@/data/dummy/exploreRoutes";
import PopupPlaceEdit from "@/components/PopupPlaceEdit";

export default function MapLayout({ mapType }: { mapType: MapType }) {
  // constants
  const TAB_MENUS = [
    { name: "프로필", to: "profile" },
    { name: "장소", to: "place" },
    { name: "루트", to: "route" },
  ];

  // 현재 탭이 루트인지 확인
  const location = useLocation();
  const panel = location.pathname.split("/").pop();
  const showRightPanel = panel === "route";

  // states
  const [isLPanelOpen, setIsLPanelOpen] = useState(true);
  const [isRPanelOpen, setIsRPanelOpen] = useState(true);
  // const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isRouteDetailOpen, setIsRouteDetailOpen] = useState(true);
  const [isRouteRecommendOpen, setIsRouteRecommendOpen] = useState(false);
  // api 사용 시 변경
  // const [places, setPlaces] = useState(bestPlaces);
  // const [routes, setRoutes] = useState(bestRoutes);
  const places = bestPlaces;
  const routes = bestRoutes;
  const [selectedRouteId, setSelectedRouteId] = useState<number | null>(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  // refs
  const mapCanvasRef = useRef<MapCanvasRef>(null);

  // 탭 변경 시 선택된 상태 초기화
  useEffect(() => {
    setSelectedPlaceId(null);
    setSelectedRouteId(null);
  }, [panel]);

  // 현재 루트 데이터
  const selectedRoute = routes.find((r) => r.id === selectedRouteId);

  // handlers
  function handleToggleLPanelOpen() {
    setIsLPanelOpen((prev) => !prev);
  }

  function handleCloseRPanel() {
    setIsRPanelOpen(false);
  }

  // function handleClickLike() {
  //   setIsLiked((prev) => !prev);
  // }

  function handleToggleRouteDetail() {
    setIsRouteDetailOpen((prev) => !prev);
  }

  function handleToggleRouteRecommend() {
    setIsRouteRecommendOpen((prev) => !prev);
  }

  function handlePlaceClick(placeId: number | null) {
    setSelectedPlaceId((prev) => (prev === placeId ? null : placeId));
  }

  function handleRouteClick(routeId: number | null) {
    setSelectedRouteId((prev) => (prev === routeId ? null : routeId));
  }

  // effects
  // 나중에 API로 교체
  // useEffect(() => {
  //   fetch("/api/places").then(...).then(setPlaces);
  //   fetch("/api/routes").then(...).then(setRoutes);
  // }, []);

  return (
    <>
      <S.MapLayoutRoot>
        <PopupPlaceEdit />
        <S.MapSection>
          <MapCanvas
            ref={mapCanvasRef}
            mapType={mapType}
            places={places}
            routes={routes}
            selectedPlaceId={selectedPlaceId}
            selectedRouteId={selectedRouteId}
            selectedRoutePlaces={selectedRoute?.places ?? []}
            onPlaceClick={handlePlaceClick}
            onRouteClick={handleRouteClick}
          />
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
                <Outlet
                  context={{
                    mapType,
                    places,
                    routes,
                    setSelectedRouteId,
                    setSelectedPlaceId,
                    selectedPlaceId,
                    selectedRouteId,
                    kakaoMap: mapCanvasRef.current?.kakaoMap,
                    fitBounds: mapCanvasRef.current?.fitBounds,
                  }}
                />
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
              {selectedRoute ? (
                <>
                  <S.RouteInfoSection>
                    <S.RouteTitle>{selectedRoute.name}</S.RouteTitle>
                    <S.RouteIntro>{selectedRoute.intro}</S.RouteIntro>
                    <S.RouteTagContainer>
                      {selectedRoute.tags.map((tag) => (
                        <S.RouteTag key={tag.id}># {tag.name}</S.RouteTag>
                      ))}
                    </S.RouteTagContainer>
                    <VoteBar
                      counts={[
                        selectedRoute.count_real ?? 0,
                        selectedRoute.count_soso ?? 0,
                        selectedRoute.count_bad ?? 0,
                      ]}
                    />
                  </S.RouteInfoSection>
                  <S.ToggleSection>
                    <S.ToggleTitleContainer onClick={handleToggleRouteDetail}>
                      <S.ToggleIconWrapper $isOpen={isRouteDetailOpen}>
                        <img src={ArrowDownIcon} alt="아래화살표아이콘" />
                      </S.ToggleIconWrapper>
                      <S.ToggleRouteDetail>루트 보기</S.ToggleRouteDetail>
                    </S.ToggleTitleContainer>
                    <S.ToggleContentContainer $isOpen={isRouteDetailOpen}>
                      <RouteTimeline
                        places={selectedRoute.places}
                        transportations={selectedRoute.transportations}
                      />
                    </S.ToggleContentContainer>
                  </S.ToggleSection>
                  <S.ToggleSection>
                    <S.ToggleTitleContainer
                      onClick={handleToggleRouteRecommend}
                    >
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
                </>
              ) : (
                <S.RouteInfoSection>
                  <S.RouteTitle>루트를 선택해주세요</S.RouteTitle>
                </S.RouteInfoSection>
              )}

              <S.LocationBadge>수원시 권선구</S.LocationBadge>
            </S.RightPanelContainer>
          </S.PanelSection>
        </S.OverlaySection>
      </S.MapLayoutRoot>
    </>
  );
}
