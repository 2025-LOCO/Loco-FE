import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import * as Common from "./styles/common"; // 추후 S.Common으로 변경 (index 사용)
import * as S from "./styles/RoutePanel";
import RouteIcon from "@/assets/images/recommend_route.svg";
import DownIcon from "@/assets/images/down_20.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import { bestRoutes } from "@/data/dummy/exploreRoutes";
import {
  TRANSPORTATION_ICON_SRC,
  type TransportationName,
} from "@/constants/transportationIcons";
import { useState } from "react";
import type { LocoRoute } from "@/types/locoRoute";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;

  // state
  const [selectedRoute, setSelectedRoute] = useState<LocoRoute | null>(null);

  // handler
  function handleSelectRoute(route: LocoRoute) {
    setSelectedRoute((prev) => (prev?.id === route.id ? null : route));
  }

  return (
    <>
      <Common.Panel>
        {mapType == "travel" ? (
          <>
            <Common.PanelTitleContainer>
              <Common.PanelTitleImg src={DownIcon} alt="루트아이콘" />
              <Common.PanelTitle>만든 여행 루트</Common.PanelTitle>
            </Common.PanelTitleContainer>
            <Common.PanelTitleContainer>
              <Common.PanelTitleImg src={DownIcon} alt="루트아이콘" />
              <Common.PanelTitle>담은 여행 루트</Common.PanelTitle>
            </Common.PanelTitleContainer>
          </>
        ) : (
          <>
            <Common.PanelTitleContainer>
              <Common.PanelTitleImg src={RouteIcon} alt="루트아이콘" />
              <Common.PanelTitle>추천 루트</Common.PanelTitle>
            </Common.PanelTitleContainer>
            <Common.Section>
              <Common.ItemListContainer>
                {bestRoutes.map((route) => (
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
            </Common.Section>
          </>
        )}
      </Common.Panel>
    </>
  );
}
