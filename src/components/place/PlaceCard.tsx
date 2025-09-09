import type { PlaceCardProps } from "@/types/place";
import * as S from "./styles/placeCard";
import PlaceDetailsKakao from "./PlaceDetailsKakao";
import PlaceDetailsUser from "./PlaceDetailsUser";
import CloseIcon from "@/assets/images/close_card.svg";
import FilledMarkIcon from "@/assets/images/bookmark_filled_8.svg";
import EmptyMarkIcon from "@/assets/images/bookmark_empty_8.svg";

export default function PlaceCard({
  place,
  handleClickLike,
  isLiked,
}: PlaceCardProps) {
  return (
    <S.PlaceCard>
      <PlaceDetailsKakao place={place} />
      <PlaceDetailsUser place={place} />
      <S.CloseIconWrapper src={CloseIcon} alt="닫기아이콘" />
      <S.LikeContainer onClick={handleClickLike} $isLiked={isLiked}>
        <div>담아요</div>
        {isLiked ? (
          <img src={FilledMarkIcon} alt="" />
        ) : (
          <img src={EmptyMarkIcon} alt="" />
        )}
      </S.LikeContainer>
    </S.PlaceCard>
  );
}
