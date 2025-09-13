import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import CheckIcon from "@/assets/images/circle_check.svg";
import * as S from "./styles/PlacePanel";
import LikedIcon from "@/assets/images/explore_liked.svg";
import SearchIcon from "@/assets/images/search_places.svg";
import SmallCheckIcon from "@/assets/images/check circle_17.svg";
import FilledMarkIcon from "@/assets/images/bookmark_filled_17.svg";
import AddPlaceIcon from "@/assets/images/add_place.svg";
import BackIcon from "@/assets/images/back.svg";
import { bestPlaces } from "@/data/dummy/explorePlaces";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import type { Place } from "@/types/place";
import PlaceDetailsKakao from "../place/PlaceDetailsKakao";
import PlaceDetailsUser from "../place/PlaceDetailsUser";
import { placeDetails } from "@/data/dummy/placeDetail";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;

  // states
  const [isSearchTabOpened, setIsSearchTabOpened] = useState<boolean>(false);
  // const [placeSearchText, setPlaceSearchText] = useState<string>("");
  const [selectedSearchPlace, setSelectedSearchPlace] = useState<Place | null>(
    null
  );
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [placeDetail, setPlaceDetail] = useState<Place | null>(null);

  // computed values
  const hasSelectedSearchPlace = selectedSearchPlace !== null;
  const hasSelectedPlace = selectedPlace !== null;

  // handlers
  function handleToggleSearchPlace() {
    setIsSearchTabOpened((prev) => !prev);
  }

  function handleSelectSearchPlace(place: Place) {
    setSelectedSearchPlace((prev) => (prev?.id === place.id ? null : place));
  }

  function handleSelectPlace(place: Place) {
    setSelectedPlace((prev) => (prev?.id === place.id ? null : place));
  }

  function handleClickBack() {
    setSelectedPlace(null);
  }

  function handleClickLike() {
    setIsLiked((prev) => !prev);
  }

  // effects
  useEffect(() => {
    if (selectedPlace?.id !== null) {
      const place = placeDetails.find(
        (place) => place.id === selectedPlace?.id
      );
      setPlaceDetail(place ?? null);
    }
  }, [selectedPlace]);

  // function handleClickSearchBtn() {

  // }

  return (
    <>
      <S.Panel>
        {hasSelectedPlace ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "35px",
              paddingTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleClickBack}
          >
            <img src={BackIcon} width="12" alt="뒤로가기아이콘" />
            <S.Back>장소 목록으로 돌아가기</S.Back>
          </div>
        ) : (
          <>
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
          </>
        )}
        {/* 탐색창이 열린 경우 */}
        {isSearchTabOpened ? (
          <S.Section>
            <div style={{ paddingRight: "45px", paddingTop: "15px" }}></div>
            {hasSelectedSearchPlace ? (
              <>
                <S.ItemContainer
                  key={selectedSearchPlace.id}
                  $isSelected={true}
                  onClick={() => {
                    handleSelectSearchPlace(selectedSearchPlace);
                  }}
                >
                  <S.SearchPlaceContentsContainer $isSelected={true}>
                    <S.ItemTitle>{selectedSearchPlace.name}</S.ItemTitle>
                    <S.PlaceLocation>장소 위치</S.PlaceLocation>
                  </S.SearchPlaceContentsContainer>
                </S.ItemContainer>
                <S.AddPlaceBtn>
                  <div>장소 추가하기</div>
                  <img src={AddPlaceIcon} alt="장소추가아이콘" />
                </S.AddPlaceBtn>
                <PlaceDetailsKakao isCard={false}></PlaceDetailsKakao>
              </>
            ) : (
              <>
                {/* 장소 검색 결과 리스트 - 추후 데이터 변경 필요  */}
                <SearchBar width="170px" />
                <S.ItemListContainer>
                  {bestPlaces.map((place) => (
                    <S.ItemContainer
                      key={place.id}
                      onClick={() => {
                        handleSelectSearchPlace(place);
                      }}
                    >
                      <S.SearchPlaceContentsContainer>
                        <S.ItemTitle>{place.name}</S.ItemTitle>
                        <S.PlaceLocation>장소 위치</S.PlaceLocation>
                      </S.SearchPlaceContentsContainer>
                    </S.ItemContainer>
                  ))}
                </S.ItemListContainer>
              </>
            )}
          </S.Section>
        ) : (
          // 탐색창이 닫힌 경우
          <S.Section>
            {hasSelectedPlace ? (
              <>
                <PlaceDetailsKakao
                  isCard={false}
                  isInSelectedPlaceDetail={true}
                  place={placeDetail}
                />

                <PlaceDetailsUser
                  isCard={false}
                  mapType={mapType}
                  handleClickLike={handleClickLike}
                  isLiked={isLiked}
                  place={placeDetail}
                />
              </>
            ) : (
              <>
                {mapType === "public" ? (
                  ""
                ) : mapType === "loco" ? (
                  <S.ItemListTypeContainer>
                    <S.ItemListTypeImg
                      src={SmallCheckIcon}
                      alt="작은체크아이콘"
                    />
                    <S.ItemListTypeTitle>인증 장소</S.ItemListTypeTitle>
                  </S.ItemListTypeContainer>
                ) : (
                  <S.ItemListTypeContainer>
                    <S.ItemListTypeImg
                      src={FilledMarkIcon}
                      alt="담아요아이콘"
                    />
                    <S.ItemListTypeTitle>담은 장소</S.ItemListTypeTitle>
                  </S.ItemListTypeContainer>
                )}
                {/* 장소 리스트 - 추후 데이터 변경 필요  */}
                <S.ItemListContainer>
                  {bestPlaces.map((place) => (
                    <S.ItemContainer
                      key={place.id}
                      onClick={() => {
                        handleSelectPlace(place);
                      }}
                    >
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
              </>
            )}
          </S.Section>
        )}
      </S.Panel>
      {/* <div>{mapType} 장소패널</div> */}
    </>
  );
}
