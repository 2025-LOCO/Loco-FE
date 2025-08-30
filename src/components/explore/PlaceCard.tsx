import type { Place } from "@/types/place";
import * as S from "./styles";
import LikedIcon from "@/assets/images/explore_liked.svg";

export default function PlaceCard({ data }: { data: Place }) {
  return (
    <S.Common.Card>
      <S.Place.CardContentContainer>
        <S.Place.ImgWrapper $hasImg={data.imageUrl ? true : false}>
          <S.Place.LocationBadge>{data.location}</S.Place.LocationBadge>
          {data.imageUrl && <img src={data.imageUrl} alt="장소이미지" />}
        </S.Place.ImgWrapper>

        <S.Common.Title>{data.name}</S.Common.Title>
        <S.Common.Intro>{data.intro}</S.Common.Intro>
      </S.Place.CardContentContainer>
      <S.Place.LikedContainer>
        <img src={LikedIcon} alt="담아요아이콘" />
        <S.Place.LikedNum>{data.liked}</S.Place.LikedNum>
      </S.Place.LikedContainer>
    </S.Common.Card>
  );
}
