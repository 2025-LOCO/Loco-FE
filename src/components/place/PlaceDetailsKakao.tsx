import type { PlaceCardProps } from "@/types/place";
import * as S from "./styles/PlaceDetailsKakao";

import LocationIcon from "@/assets/images/place_location.svg";
import PhoneIcon from "@/assets/images/place_phone.svg";
import LinkIcon from "@/assets/images/place_link.svg";

export default function PlaceDetailsKakao({
  isInSelectedPlaceDetail,
  isCard = true,
  place,
}: PlaceCardProps) {
  return (
    <S.PlaceDetailKakao $isCard={isCard}>
      <S.Content
        $isCard={isCard}
        $isInSelectedPlaceDetail={isInSelectedPlaceDetail}
      >
        <div>
          <S.PlaceTitle>{place?.name}</S.PlaceTitle>
          <S.PlaceType>{place?.type}</S.PlaceType>
          <S.ImgWrapper $isCard={isCard}></S.ImgWrapper>
        </div>
        <div style={{ paddingTop: "4px" }} />
        <S.DetailListContainer $isCard={isCard}>
          <S.DetailContainer>
            <S.DetailIcon src={LocationIcon} alt="위치아이콘" />
            <S.DetailDescription>{place?.location}</S.DetailDescription>
          </S.DetailContainer>
          <S.DetailContainer>
            <S.DetailIcon src={PhoneIcon} alt="번호아이콘" />
            <S.DetailDescription>031-5173-4300</S.DetailDescription>
          </S.DetailContainer>
          <S.DetailTitle>상세 정보 보기</S.DetailTitle>
          <S.DetailContainer>
            <S.DetailIcon src={LinkIcon} alt="링크아이콘" />
            <a href="https://www.naver.com/" style={{ color: "#0063E4" }}>
              <S.DetailDescription>https://www.naver.com/</S.DetailDescription>
            </a>
          </S.DetailContainer>
        </S.DetailListContainer>
      </S.Content>
    </S.PlaceDetailKakao>
  );
}
