import * as S from "./styles";
import RankIcon from "@/assets/images/explore_rank.svg";
import LikedIcon from "@/assets/images/explore_liked.svg";
import ProfileAvatarImg from "@/assets/images/avatar2.svg";
import type { ExploreMemberItem } from "@/apis/explore/getExploreMembers";

export default function GuideCard({ data }: { data: ExploreMemberItem }) {
  // 닉네임 기반 동적 라우팅
  const link = `/u/${data.id}/map/profile`;
  return (
    <S.Common.Card to={link}>
      <S.Guide.CardContentContainer>
        <S.Guide.ImgWrapper $hasImg={data.avatar_url ? true : false}>
          <S.Guide.LocationBadge>{data.city_name}</S.Guide.LocationBadge>
          {data.avatar_url ? (
            <S.Guide.ProfileImg src={data.avatar_url} alt="프로필이미지" />
          ) : (
            <S.Guide.ProfileImg src={ProfileAvatarImg} alt="프로필이미지" />
          )}
        </S.Guide.ImgWrapper>
        <div>
          <S.Common.Title>{data.nickname}</S.Common.Title>
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
