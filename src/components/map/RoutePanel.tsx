import type { MapOutletContext } from "@/types/map";
import { useOutletContext, useParams } from "react-router";
import * as Common from "./styles/common"; // 추후 S.Common으로 변경 (index 사용)
import * as S from "./styles/RoutePanel"; // 추후 S.Route로 변경 (index 사용)
import RouteIcon from "@/assets/images/recommend_route.svg";
import DownIcon from "@/assets/images/down_20.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import AddIcon from "@/assets/images/add.svg";
import {
  TRANSPORTATION_ICON_SRC,
  transportationNameMap,
  type TransportationName,
} from "@/constants/transportationIcons";
import { useEffect, useState } from "react";
import {
  getRouteListByUser,
  type RouteItem,
} from "@/apis/routes/getRouteListByUser";
import { toKoreanValue } from "@/lib/mapping";

export default function RoutePanel() {
  const context = useOutletContext<MapOutletContext>();
  const {
    mapType,
    routes: contextRoutes,
    setSelectedRouteId,
    selectedRouteId,
  } = context;
  const { user_id } = useParams<{ user_id: string }>();
  // state
  // const [selectedRoute, setSelectedRoute] = useState<LocoRoute | null>(null);
  const [routes, setRoutes] = useState<RouteItem[]>([]);
  const [isMyRouteOpened, setIsMyRouteOpened] = useState<boolean>(true);
  const [isLikedRouteOpened, setIsLikedRouteOpened] = useState<boolean>(false);

  useEffect(() => {
    if (mapType === "public" && user_id) {
      (async () => {
        try {
          const data = await getRouteListByUser(Number(user_id));
          setRoutes(data);
        } catch (err) {
          console.error("공개 루트 불러오기 실패:", err);
        }
      })();
    } else {
      // 내 지도에서는 context 데이터 사용
      setRoutes([]);
    }
  }, [mapType, user_id, contextRoutes]);

  // computed
  const selectedRoute = routes.find((r) => r.id === selectedRouteId) ?? null;

  // handler
  function handleSelectRoute(route: RouteItem) {
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
                        {Object.entries(route.tags).map(([key, value], idx) => {
                          const koreanTag = toKoreanValue(key, value);
                          return <div key={idx}># {koreanTag}</div>;
                        })}
                      </S.TagContainer>
                      <S.ItemHeaderContentsContainer>
                        <Common.ItemImgWrapper>
                          {route.imageUrl && (
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                borderRadius: "8px",
                              }}
                            >
                              <img
                                src={route.imageUrl}
                                alt="루트이미지"
                                width={75}
                                height={56}
                              />
                            </div>
                          )}
                        </Common.ItemImgWrapper>

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
                          {route.transportations.map((by) => {
                            const mappedName =
                              transportationNameMap[by.name] ?? by.name;
                            const Icon =
                              TRANSPORTATION_ICON_SRC[
                                mappedName as TransportationName
                              ];

                            if (!Icon) {
                              // console.warn(
                              //   "Unknown transportation name:",
                              //   by.name
                              // );
                              return null; // undefined 컴포넌트 렌더링 방지
                            }

                            return (
                              <S.TransportSvg
                                key={by.id}
                                $isSelected={route.id === selectedRouteId}
                              >
                                <Icon />
                              </S.TransportSvg>
                            );
                          })}
                        </S.PlaceContainer>
                        <S.TransportContainer>
                          {route.transportations.map((by) => {
                            // 한글/영문 섞인 데이터 매핑 처리
                            const mappedName =
                              transportationNameMap[by.name] ?? by.name;

                            const Icon =
                              TRANSPORTATION_ICON_SRC[
                                mappedName as TransportationName
                              ];
                            if (!Icon) {
                              // console.warn(
                              //   "Unknown transportation name:",
                              //   by.name
                              // );
                              return null;
                            }

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
                        {Object.entries(route.tags).map(([key, value], idx) => {
                          const koreanTag = toKoreanValue(key, value);
                          return <div key={idx}># {koreanTag}</div>;
                        })}
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
                            const mappedName =
                              transportationNameMap[by.name] ?? by.name;
                            const Icon =
                              TRANSPORTATION_ICON_SRC[
                                mappedName as TransportationName
                              ];

                            if (!Icon) {
                              return null; // undefined 렌더링 방지
                            }

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
                      {Object.entries(route.tags).map(([key, value], idx) => {
                        const koreanTag = toKoreanValue(key, value);
                        return <div key={idx}># {koreanTag}</div>;
                      })}
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
