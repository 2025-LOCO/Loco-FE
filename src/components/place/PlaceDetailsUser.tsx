import type { PlaceCardProps } from "@/types/place";
import * as S from "./styles/placeDetailsUser";
import VoteBar from "../VoteBar";
import DeleteIcon from "@/assets/images/delete.svg";
import EditIcon from "@/assets/images/edit.svg";
import FilledMarkIcon from "@/assets/images/bookmark_filled_8.svg";
import EmptyMarkIcon from "@/assets/images/bookmark_empty_8.svg";

export default function PlaceDetailsUser({
  place,
  mapType,
  isCard = true,
  handleClickLike,
  isLiked,
}: PlaceCardProps) {
  return (
    <S.PlaceDetailUser $isCard={isCard}>
      {mapType !== "loco" && !isCard && (
        <>
          <S.LikeContainer onClick={handleClickLike} $isLiked={isLiked}>
            <div>담아요</div>
            {isLiked ? (
              <img src={FilledMarkIcon} alt="" />
            ) : (
              <img src={EmptyMarkIcon} alt="" />
            )}
          </S.LikeContainer>
        </>
      )}
      <S.Content $isCard={isCard}>
        <S.DetailListContainer>
          <S.DetailContainer>
            <div style={{ display: "inline-flex" }}>
              <S.DetailTitle>분위기는</S.DetailTitle>
              <S.DetailSubTiltle> ㅣ 장소의 분위기</S.DetailSubTiltle>
            </div>
            <S.DetailContent>조용해요</S.DetailContent>
          </S.DetailContainer>
          <S.DetailContainer>
            <div style={{ display: "inline-flex" }}>
              <S.DetailTitle>추천해요</S.DetailTitle>
              <S.DetailSubTiltle> ㅣ 장소를 추천하는 이유</S.DetailSubTiltle>
            </div>
            <S.DetailContent>
              잔잔한 음악과 함께 휴식하고 싶은 분들
            </S.DetailContent>
          </S.DetailContainer>
          <S.DetailContainer>
            <div style={{ display: "inline-flex" }}>
              <S.DetailTitle>알려드려요</S.DetailTitle>
              <S.DetailSubTiltle> ㅣ 장소에 대한 아쉬운 부분</S.DetailSubTiltle>
            </div>
            <S.DetailContent>반려동물 출입 가능해요</S.DetailContent>
          </S.DetailContainer>
        </S.DetailListContainer>
        <VoteBar counts={[60, 10, 30]} />
        {!isCard && mapType == "loco" && (
          <S.BtnContainer>
            <S.BtnWrapper>
              <img src={EditIcon} alt="수정아이콘" />
            </S.BtnWrapper>
            <S.BtnWrapper>
              <img src={DeleteIcon} alt="삭제아이콘" />
            </S.BtnWrapper>
          </S.BtnContainer>
        )}
      </S.Content>
    </S.PlaceDetailUser>
  );
}
