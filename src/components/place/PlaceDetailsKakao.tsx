import type { PlaceCardProps } from "@/types/place";
import * as S from "./styles/PlaceDetailsKakao";

import LocationIcon from "@/assets/images/place_location.svg";
import PhoneIcon from "@/assets/images/place_phone.svg";
import LinkIcon from "@/assets/images/place_link.svg";

export default function PlaceDetailsKakao({ place }: PlaceCardProps) {
  return (
    <S.PlaceDetailKakao>
      <S.Content>
        <S.PlaceTitle>투썸 플레이스</S.PlaceTitle>
        <S.PlaceType>카페</S.PlaceType>
        <S.ImgWrapper></S.ImgWrapper>
        <div style={{ paddingTop: "4px" }} />
        <S.DetailContainer>
          <S.DetailIcon src={LocationIcon} alt="위치아이콘" />
          <S.DetailDescription>
            경기 고양시 덕양구 덕야대로 1955
          </S.DetailDescription>
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
      </S.Content>
    </S.PlaceDetailKakao>
  );
}
