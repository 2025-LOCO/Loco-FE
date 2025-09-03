import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import CheckIcon from "@/assets/images/circle_check.svg";
import * as S from "./styles/PlacePanel";
import LikedIcon from "@/assets/images/explore_liked.svg";
import SearchIcon from "@/assets/images/search_places.svg";
import SmallCheckIcon from "@/assets/images/check circle_17.svg";
import FilledMarkIcon from "@/assets/images/bookmark_filled_17.svg";
import { bestPlaces } from "@/data/dummy/explorePlaces";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  return (
    <>
      <S.PlacePanel>
        {mapType == "public" ? (
          <S.PanelTitleContainer>
            <S.PanelTitleImg src={CheckIcon} alt="체크아이콘" />
            <S.PanelTitle>인증 장소</S.PanelTitle>
          </S.PanelTitleContainer>
        ) : (
          <S.PanelTitleContainer $isSearch={true}>
            <S.PanelTitleImg src={SearchIcon} alt="검색아이콘" />
            <S.PanelTitle>장소 탐색하기</S.PanelTitle>
          </S.PanelTitleContainer>
        )}
        <S.PlaceSection>
          {mapType === "public" ? (
            ""
          ) : mapType === "loco" ? (
            <S.PlaceListTypeContainer>
              <S.PlaceListTypeImg src={SmallCheckIcon} alt="작은체크아이콘" />
              <S.PlaceListTypeTitle>인증 장소</S.PlaceListTypeTitle>
            </S.PlaceListTypeContainer>
          ) : (
            <S.PlaceListTypeContainer>
              <S.PlaceListTypeImg src={FilledMarkIcon} alt="담아요아이콘" />
              <S.PlaceListTypeTitle>담은 장소</S.PlaceListTypeTitle>
            </S.PlaceListTypeContainer>
          )}
          {/* 장소 리스트 */}
          <S.PlaceContainer>
            {bestPlaces.map((place) => (
              <S.PlaceItem key={place.id}>
                <S.PlaceImgWrapper></S.PlaceImgWrapper>
                <S.PlaceContentsContainer>
                  <S.PlaceTitle>{place.name}</S.PlaceTitle>
                  <S.PlaceType>{place.type}</S.PlaceType>
                  <S.LikedContainer>
                    <img src={LikedIcon} alt="담아요아이콘" />
                    <S.LikedNum>{place.liked}</S.LikedNum>
                  </S.LikedContainer>
                </S.PlaceContentsContainer>
              </S.PlaceItem>
            ))}
            <S.PlaceItem>
              <S.PlaceImgWrapper></S.PlaceImgWrapper>
              <S.PlaceContentsContainer>
                <S.PlaceTitle>장소 이름</S.PlaceTitle>
                <S.PlaceType>장소 유형</S.PlaceType>
                <S.LikedContainer>
                  <img src={LikedIcon} alt="담아요아이콘" />
                  <S.LikedNum>300</S.LikedNum>
                </S.LikedContainer>
              </S.PlaceContentsContainer>
            </S.PlaceItem>
          </S.PlaceContainer>
        </S.PlaceSection>
      </S.PlacePanel>
      {/* <div>{mapType} 장소패널</div> */}
    </>
  );
}
