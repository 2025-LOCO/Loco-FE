import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import * as Common from "./styles/common"; // 추후 S.Common으로 변경 (index 사용)
import * as S from "./styles/RoutePanel"; // 추후 S.Route로 변경 (index 사용)
import RouteIcon from "@/assets/images/recommend_route.svg";
import DownIcon from "@/assets/images/down_20.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import AddIcon from "@/assets/images/add.svg";
import {
  TRANSPORTATION_ICON_SRC,
  type TransportationName,
} from "@/constants/transportationIcons";
import { useState } from "react";
import type { LocoRoute } from "@/types/locoRoute";

export default function RoutePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType, routes, setSelectedRouteId, selectedRouteId } = context;

  // state
  // const [selectedRoute, setSelectedRoute] = useState<LocoRoute | null>(null);
  const [isMyRouteOpened, setIsMyRouteOpened] = useState<boolean>(true);
  const [isLikedRouteOpened, setIsLikedRouteOpened] = useState<boolean>(false);

  // computed
  const selectedRoute = routes.find((r) => r.id === selectedRouteId) ?? null;

  // handler
  function handleSelectRoute(route: LocoRoute) {
    if (selectedRouteId === route.id) {
      setSelectedRouteId(null);
    } else {
      setSelectedRouteId(route.id);
    }
  }

  function handleToggleMyRoute() {
    setIsMyRouteOpened((prev) => !prev);
    setIsLikedRouteOpened(false);
  }

  function handleToggleLikedRoute() {
    setIsLikedRouteOpened((prev) => !prev);
    setIsMyRouteOpened(false);
  }

  return (
    <>
      <Common.Panel>
        {mapType == "travel" ? (
          <>
            <S.RouteSection>
              <Common.PanelTitleContainer
                $isTravelMap={true}
                onClick={handleToggleMyRoute}
              >
                <Common.PanelTitleImg
                  src={DownIcon}
                  alt="루트아이콘"
                  $isOpened={isMyRouteOpened}
                />
                <Common.PanelTitle>나의 여행 루트</Common.PanelTitle>
              </Common.PanelTitleContainer>
              <S.RouteListSection $isOpened={isMyRouteOpened}>
                <Common.ItemListContainer>
                  {routes.map((route) => (
                    <Common.ItemContainer
                      key={route.id}
                      onClick={() => {
                        handleSelectRoute(route);
                      }}
                    >
                      <S.TagContainer>
                        {route.tags.map((tag) => (
                          <div key={tag.id}># {tag.name}</div>
                        ))}
                      </S.TagContainer>
                      <S.ItemHeaderContentsContainer>
                        <Common.ItemImgWrapper></Common.ItemImgWrapper>

                        <Common.ItemContentsContainer>
                          <Common.ItemTitle>{route.name}</Common.ItemTitle>
                          <Common.LikedContainer>
                            <img src={LikedIcon} alt="담아요아이콘" />
                            <Common.LikedNum>{route.liked}</Common.LikedNum>
                          </Common.LikedContainer>
                        </Common.ItemContentsContainer>
                      </S.ItemHeaderContentsContainer>
                      <Common.ItemType>{route.intro}</Common.ItemType>
                      <S.PlaceTransportContainer>
                        <S.PlaceContainer>
                          {route.places.map((place) => (
                            <S.PlaceTag
                              key={place.id}
                              $isSelected={route.id === selectedRouteId}
                            >
                              {place.name}
                            </S.PlaceTag>
                          ))}
                        </S.PlaceContainer>
                        <S.TransportContainer>
                          {route.transportations.map((by) => {
                            const Icon =
                              TRANSPORTATION_ICON_SRC[
                                by.name as TransportationName
                              ];
                            return (
                              <S.TransportSvg
                                key={by.id}
                                $isSelected={route.id === selectedRouteId}
                              >
                                <Icon />
                              </S.TransportSvg>
                            );
                          })}
                        </S.TransportContainer>
                      </S.PlaceTransportContainer>
                    </Common.ItemContainer>
                  ))}
                </Common.ItemListContainer>
                <S.AddRouteIcon>
                  <img src={AddIcon} alt="추가아이콘" width={"31"} />
                </S.AddRouteIcon>
              </S.RouteListSection>
            </S.RouteSection>
            <S.RouteSection>
              <Common.PanelTitleContainer
                $isTravelMap={true}
                onClick={handleToggleLikedRoute}
              >
                <Common.PanelTitleImg
                  src={DownIcon}
                  alt="루트아이콘"
                  $isOpened={isLikedRouteOpened}
                />
                <Common.PanelTitle>담은 여행 루트</Common.PanelTitle>
              </Common.PanelTitleContainer>
              <S.RouteListSection $isOpened={isLikedRouteOpened}>
                <Common.ItemListContainer>
                  {routes.map((route) => (
                    <Common.ItemContainer
                      key={route.id}
                      onClick={() => {
                        handleSelectRoute(route);
                      }}
                    >
                      <S.TagContainer>
                        {route.tags.map((tag) => (
                          <div key={tag.id}># {tag.name}</div>
                        ))}
                      </S.TagContainer>
                      <S.ItemHeaderContentsContainer>
                        <Common.ItemImgWrapper></Common.ItemImgWrapper>

                        <Common.ItemContentsContainer>
                          <Common.ItemTitle>{route.name}</Common.ItemTitle>
                          <Common.LikedContainer>
                            <img src={LikedIcon} alt="담아요아이콘" />
                            <Common.LikedNum>{route.liked}</Common.LikedNum>
                          </Common.LikedContainer>
                        </Common.ItemContentsContainer>
                      </S.ItemHeaderContentsContainer>
                      <Common.ItemType>{route.intro}</Common.ItemType>
                      <S.PlaceTransportContainer>
                        <S.PlaceContainer>
                          {route.places.map((place) => (
                            <S.PlaceTag
                              key={place.id}
                              $isSelected={route.id === selectedRoute?.id}
                            >
                              {place.name}
                            </S.PlaceTag>
                          ))}
                        </S.PlaceContainer>
                        <S.TransportContainer>
                          {route.transportations.map((by) => {
                            const Icon =
                              TRANSPORTATION_ICON_SRC[
                                by.name as TransportationName
                              ];
                            return (
                              <S.TransportSvg
                                key={by.id}
                                $isSelected={route.id === selectedRoute?.id}
                              >
                                <Icon />
                              </S.TransportSvg>
                            );
                          })}
                        </S.TransportContainer>
                      </S.PlaceTransportContainer>
                    </Common.ItemContainer>
                  ))}
                </Common.ItemListContainer>
              </S.RouteListSection>
            </S.RouteSection>
          </>
        ) : (
          <>
            <Common.PanelTitleContainer>
              <Common.PanelTitleImg src={RouteIcon} alt="루트아이콘" />
              <Common.PanelTitle>추천 루트</Common.PanelTitle>
            </Common.PanelTitleContainer>

            <Common.ItemListSection>
              <div style={{ paddingTop: "40px" }} />
              <Common.ItemListContainer>
                {routes.map((route) => (
                  <Common.ItemContainer
                    key={route.id}
                    onClick={() => {
                      handleSelectRoute(route);
                    }}
                  >
                    <S.TagContainer>
                      {route.tags.map((tag) => (
                        <div key={tag.id}># {tag.name}</div>
                      ))}
                    </S.TagContainer>
                    <S.ItemHeaderContentsContainer>
                      <Common.ItemImgWrapper></Common.ItemImgWrapper>

                      <Common.ItemContentsContainer>
                        <Common.ItemTitle>{route.name}</Common.ItemTitle>
                        <Common.LikedContainer>
                          <img src={LikedIcon} alt="담아요아이콘" />
                          <Common.LikedNum>{route.liked}</Common.LikedNum>
                        </Common.LikedContainer>
                      </Common.ItemContentsContainer>
                    </S.ItemHeaderContentsContainer>
                    <Common.ItemType>{route.intro}</Common.ItemType>
                    <S.PlaceTransportContainer>
                      <S.PlaceContainer>
                        {route.places.map((place) => (
                          <S.PlaceTag
                            key={place.id}
                            $isSelected={route.id === selectedRoute?.id}
                          >
                            {place.name}
                          </S.PlaceTag>
                        ))}
                      </S.PlaceContainer>
                      <S.TransportContainer>
                        {route.transportations.map((by) => {
                          const Icon =
                            TRANSPORTATION_ICON_SRC[
                              by.name as TransportationName
                            ];
                          return (
                            <S.TransportSvg
                              key={by.id}
                              $isSelected={route.id === selectedRoute?.id}
                            >
                              <Icon />
                            </S.TransportSvg>
                          );
                        })}
                      </S.TransportContainer>
                    </S.PlaceTransportContainer>
                  </Common.ItemContainer>
                ))}
              </Common.ItemListContainer>
            </Common.ItemListSection>
          </>
        )}
      </Common.Panel>
    </>
  );
}
