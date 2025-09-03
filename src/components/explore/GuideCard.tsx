import type { Guide } from "@/types/guide";
import * as S from "./styles";
import RankIcon from "@/assets/images/explore_rank.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import ProfileAvatarImg from "@/assets/images/avatar2.svg";

export default function GuideCard({ data }: { data: Guide }) {
  return (
    <S.Common.Card>
      <S.Guide.CardContentContainer>
        <S.Guide.ImgWrapper $hasImg={data.imageUrl ? true : false}>
          <S.Guide.LocationBadge>{data.location}</S.Guide.LocationBadge>
          {data.imageUrl ? (
            <S.Guide.ProfileImg src={data.imageUrl} alt="프로필이미지" />
          ) : (
            <S.Guide.ProfileImg src={ProfileAvatarImg} alt="프로필이미지" />
          )}
        </S.Guide.ImgWrapper>
        <div>
          <S.Common.Title>{data.name}</S.Common.Title>
          <div style={{ paddingTop: "5px" }} />
          <S.Common.Intro>{data.intro}</S.Common.Intro>
        </div>
      </S.Guide.CardContentContainer>
      <S.Guide.StatsListContainer>
        <S.Guide.StatContainer>
          <img src={RankIcon} alt="랭킹아이콘" />
          <S.Guide.StatValue>{data.liked}</S.Guide.StatValue>
        </S.Guide.StatContainer>
        <S.Guide.StatContainer>
          <img src={LikedIcon} alt="담아요아이콘" />
          <S.Guide.StatValue>{data.liked}</S.Guide.StatValue>
        </S.Guide.StatContainer>
      </S.Guide.StatsListContainer>
    </S.Common.Card>
  );
}
