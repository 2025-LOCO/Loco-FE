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
import { useEffect, useRef, useState } from "react";
import SearchBar from "../SearchBar";
import type { KakaoPlace, Place } from "@/types/place";
import PlaceDetailsKakao from "../place/PlaceDetailsKakao";
import PlaceDetailsUser from "../place/PlaceDetailsUser";
import { getPlaceDetail } from "@/apis/favorite/getPlaceDetail";
import PopupPlaceEdit from "../PopupPlaceEdit";
import { addPlace } from "@/apis/places/postPlace";

export default function PlacePanel() {
  const context = useOutletContext<MapOutletContext>();
  const {
    mapType,
    places,
    setSelectedPlaceId,
    selectedPlaceId,
    kakaoMap,
    fitBounds,
  } = context;

  // states
  const [isSearchTabOpened, setIsSearchTabOpened] = useState<boolean>(false);
  // const [placeSearchText, setPlaceSearchText] = useState<string>("");
  const [selectedSearchPlace, setSelectedSearchPlace] = useState<Place | null>(
    null
  );
  const [searchPlaces, setSearchPlaces] = useState<any[]>([]); // 카카오 검색 결과
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [placeDetail, setPlaceDetail] = useState<Place | null>(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleOpenEditPopup = () => {
    if (!selectedSearchPlace) {
      alert("추가할 장소를 먼저 선택해주세요!");
      return;
    }
    setShowEditPopup(true);
  };

  // 팝업 닫기
  const handleCloseEditPopup = () => setShowEditPopup(false);

  // 팝업 완료 클릭 시 → 장소 추가 API
  const handleSubmitPlace = async (form: {
    atmosphere: string;
    pros: string;
    cons: string;
    image_url: string;
  }) => {
    if (!selectedSearchPlace) return;

    const requestBody = {
      name: selectedSearchPlace.name,
      type: selectedSearchPlace.type || "기타",
      is_frequent: false,
      atmosphere: form.atmosphere,
      pros: form.pros,
      cons: form.cons,
      image_url: form.image_url,
      latitude: selectedSearchPlace.latitude,
      longitude: selectedSearchPlace.longitude,
      kakao_place_id: selectedSearchPlace.kakao_place_id || "",
      intro: "",
      phone: selectedSearchPlace.phone || "",
      address_name: selectedSearchPlace.location || "",
      short_location: selectedSearchPlace.location?.split(" ")[0] || "",
      link: selectedSearchPlace.link || "",
    };

    try {
      await addPlace(requestBody);
      alert("장소가 성공적으로 등록되었습니다!");
      setShowEditPopup(false);
    } catch (err) {
      console.error("장소 추가 실패:", err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  // refs
  const infowindowRef = useRef<any>(null);
  const searchMarkersRef = useRef<any[]>([]);

  // computed values
  const hasSelectedSearchPlace = selectedSearchPlace !== null;
  const hasSelectedPlace = selectedPlaceId !== null;

  // handlers
  function handleToggleSearchPlace() {
    setIsSearchTabOpened((prev) => {
      const willClose = prev === true;

      if (willClose) {
        setSearchPlaces([]);
        setSelectedSearchPlace(null);

        // 검색 마커 제거
        searchMarkersRef.current.forEach((m) => m.setMap(null));
        searchMarkersRef.current = [];

        // infowindow 닫기
        if (infowindowRef.current) {
          infowindowRef.current.close();
        }

        // bounds 복원
        if (kakaoMap) {
          if (places.length > 0) {
            const bounds = new window.kakao.maps.LatLngBounds();
            places.forEach((p) => {
              bounds.extend(
                new window.kakao.maps.LatLng(p.latitude, p.longitude)
              );
            });
            kakaoMap.setBounds(bounds);
          } else {
            kakaoMap.setCenter(
              new window.kakao.maps.LatLng(37.566826, 126.9786567)
            );
            kakaoMap.setLevel(3);
          }
        }
      }

      return !prev;
    });
  }

  function handleSelectSearchPlace(place: Place) {
    setSelectedSearchPlace((prev) =>
      prev?.kakao_place_id === place.kakao_place_id ? null : place
    );
  }

  function handleSelectPlace(place: Place) {
    setSelectedPlaceId(place.id);
  }

  function handleClickBack() {
    setSelectedPlaceId(null);
  }

  function handleClickLike(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  }

  // effects
  useEffect(() => {
    if (selectedPlaceId !== null) {
      (async () => {
        try {
          const data = await getPlaceDetail(selectedPlaceId);
          // 백엔드 응답 필드를 프론트 구조에 맞게 변환
          const mappedPlace = {
            id: data.place_id,
            name: data.name,
            imageUrl: data.image_url,
            liked: data.liked,
            intro: data.intro,
            type: data.type,
            latitude: data.latitude,
            longitude: data.longitude,
            atmosphere: data.atmosphere,
            recommend: data.pros,
            notice: data.cons,
            count_real: data.count_real,
            count_soso: data.count_normal,
            count_bad: data.count_bad,
            kakao_place_id: data.kakao_place_id,
            link: data.link,
            phone: data.phone,
            member_id: data.user_id,
            short_location: data.city_name,
            location: data.address_name,
          };
          setPlaceDetail(mappedPlace);
        } catch (err) {
          console.error("장소 상세 불러오기 실패:", err);
        }
      })();
    }
  }, [selectedPlaceId]);

  // function handleClickSearchBtn() {

  // }

  // 검색 실행
  function handleSearchPlaces(keyword: string) {
    if (!keyword.trim()) return;

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 카카오 응답 -> 우리 Place 타입으로 변환
        const mapped = data.map((d: any, idx: number) => ({
          kakao_place_id: d.id ?? String(idx), // 카카오 id 없으면 fallback
          name: d.place_name,
          latitude: parseFloat(d.y),
          longitude: parseFloat(d.x),
          type: d.category_group_name,
          link: d.place_url,
          location: d.address_name,
          phone: d.phone,
        })) as KakaoPlace[];

        setSearchPlaces(mapped);
        displayMarkers(mapped);
      }
    });
  }

  // 마커 표시
  function displayMarkers(data: any[]) {
    if (!kakaoMap) return;

    // 기존 검색 마커 제거
    searchMarkersRef.current.forEach((m) => m.setMap(null));
    searchMarkersRef.current = [];

    if (!infowindowRef.current) {
      infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    }

    data.forEach((place) => {
      const position = new window.kakao.maps.LatLng(
        place.latitude,
        place.longitude
      );

      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        infowindowRef.current.setContent(
          `<div style="padding:5px;font-size:12px;color:black">${place.name}</div>`
        );
        infowindowRef.current.open(kakaoMap, marker);
        setSelectedSearchPlace(place);
      });

      searchMarkersRef.current.push(marker);
    });

    // 여기서 직접 kakaoMap.setBounds 안 쓰고 fitBounds 사용
    fitBounds?.(data);
  }

  return (
    <>
      <S.Panel>
        {hasSelectedPlace && !isSearchTabOpened ? (
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
                  key={selectedSearchPlace.kakao_place_id}
                  $isSelected={true}
                  onClick={() => {
                    handleSelectSearchPlace(selectedSearchPlace);
                  }}
                >
                  <S.SearchPlaceContentsContainer $isSelected={true}>
                    <S.ItemTitle>{selectedSearchPlace.name}</S.ItemTitle>
                    <S.PlaceLocation>
                      {selectedSearchPlace.location}
                    </S.PlaceLocation>
                  </S.SearchPlaceContentsContainer>
                </S.ItemContainer>
                {/* 장소 추가 버튼 클릭 시 팝업 열기 */}
                {hasSelectedSearchPlace && (
                  <S.AddPlaceBtn onClick={handleOpenEditPopup}>
                    <div>장소 추가하기</div>
                    <img src={AddPlaceIcon} alt="장소추가아이콘" />
                  </S.AddPlaceBtn>
                )}
                <PlaceDetailsKakao
                  isCard={false}
                  place={selectedSearchPlace}
                ></PlaceDetailsKakao>
              </>
            ) : (
              <>
                {/* 장소 검색 결과 리스트 - 추후 데이터 변경 필요  */}
                <SearchBar width="170px" onSearch={handleSearchPlaces} />
                <S.ItemListContainer>
                  {searchPlaces.map((place) => (
                    <S.ItemContainer
                      key={place.kakao_place_id}
                      onClick={() => {
                        handleSelectSearchPlace(place);
                      }}
                    >
                      <S.SearchPlaceContentsContainer>
                        <S.ItemTitle>{place.name}</S.ItemTitle>
                        <S.PlaceLocation>{place.location}</S.PlaceLocation>
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
                  {places.map((place) => (
                    <S.ItemContainer
                      key={place.id}
                      onClick={() => {
                        handleSelectPlace(place);
                      }}
                    >
                      <S.ItemImgWrapper $hasImg={place.imageUrl ? true : false}>
                        {place.imageUrl ? (
                          <img src={place.imageUrl} width={75} height={55} />
                        ) : (
                          <></>
                        )}
                      </S.ItemImgWrapper>
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

        {/* <div>{mapType} 장소패널</div> */}
        {showEditPopup && (
          <PopupPlaceEdit
            place={selectedSearchPlace}
            onClose={handleCloseEditPopup}
            onSubmit={handleSubmitPlace}
          />
        )}
      </S.Panel>
    </>
  );
}
