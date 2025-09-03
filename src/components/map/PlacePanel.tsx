import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import CheckIcon from "@/assets/images/circle_check.svg";
import * as S from "./styles/PlacePanel";
import LikedIcon from "@/assets/images/explore_liked.svg";
import SearchIcon from "@/assets/images/search_places.svg";
import SmallCheckIcon from "@/assets/images/check circle_17.svg";
import FilledMarkIcon from "@/assets/images/bookmark_filled_17.svg";
import AddPlaceIcon from "@/assets/images/add_place.svg";
import { bestPlaces } from "@/data/dummy/explorePlaces";
import { useState } from "react";
import SearchBar from "../SearchBar";
import type { Place } from "@/types/place";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;

  // state
  const [isSearchTabOpened, setIsSearchTabOpened] = useState<boolean>(false);
  // const [placeSearchText, setPlaceSearchText] = useState<string>("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // boolean
  const hasSelectedPlace = selectedPlace !== null;

  // handler
  function handleToggleSearchPlace() {
    setIsSearchTabOpened((prev) => !prev);
  }

  function handleSelectPlace(place: Place) {
    setSelectedPlace((prev) => (prev?.id === place.id ? null : place));
  }

  // function handleClickSearchBtn() {

  // }

  return (
    <>
      <S.PlacePanel>
        {mapType == "public" ? (
          <S.PanelTitleContainer>
            <S.PanelTitleImg src={CheckIcon} alt="체크아이콘" />
            <S.PanelTitle>인증 장소</S.PanelTitle>
          </S.PanelTitleContainer>
        ) : (
          // 장소 검색 토글
          <S.PanelTitleContainer $isSearch={true}>
            <S.PanelTitleImg src={SearchIcon} alt="검색아이콘" />
            <S.PanelTitle onClick={handleToggleSearchPlace}>
              {isSearchTabOpened ? "탐색창 닫기" : "장소 탐색하기"}
            </S.PanelTitle>
          </S.PanelTitleContainer>
        )}
        {/* 탐색창이 열린 경우 */}
        {isSearchTabOpened ? (
          <S.PlaceSection>
            <div style={{ paddingRight: "45px", paddingTop: "15px" }}></div>
            {hasSelectedPlace ? (
              <>
                <S.PlaceItem
                  key={selectedPlace.id}
                  $isSelected={true}
                  onClick={() => {
                    handleSelectPlace(selectedPlace);
                  }}
                >
                  <S.PlaceImgWrapper $isSelected={true}></S.PlaceImgWrapper>
                  <S.SearchPlaceContentsContainer>
                    <S.PlaceTitle>{selectedPlace.name}</S.PlaceTitle>
                    <S.PlaceLocation>장소 위치</S.PlaceLocation>
                  </S.SearchPlaceContentsContainer>
                </S.PlaceItem>
                <S.AddPlaceBtn>
                  <div>장소 추가하기</div>
                  <img src={AddPlaceIcon} alt="장소추가아이콘" />
                </S.AddPlaceBtn>{" "}
              </>
            ) : (
              <>
                {/* 장소 검색 결과 리스트 - 추후 데이터 변경 필요  */}
                <SearchBar width="170px" />
                <S.PlaceContainer>
                  {bestPlaces.map((place) => (
                    <S.PlaceItem
                      key={place.id}
                      onClick={() => {
                        handleSelectPlace(place);
                      }}
                    >
                      <S.PlaceImgWrapper></S.PlaceImgWrapper>
                      <S.SearchPlaceContentsContainer>
                        <S.PlaceTitle>{place.name}</S.PlaceTitle>
                        <S.PlaceLocation>장소 위치</S.PlaceLocation>
                      </S.SearchPlaceContentsContainer>
                    </S.PlaceItem>
                  ))}
                </S.PlaceContainer>
              </>
            )}
          </S.PlaceSection>
        ) : (
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
            {/* 장소 리스트  - 추후 데이터 변경 필요 */}
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
            </S.PlaceContainer>
          </S.PlaceSection>
        )}
      </S.PlacePanel>
      {/* <div>{mapType} 장소패널</div> */}
    </>
  );
}
