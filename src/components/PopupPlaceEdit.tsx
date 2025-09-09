import { useState } from "react";
import * as S from "./PopupPlaceEdit.style";

export default function PopupPlaceEdit() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={() => setOpen(false)}>×</S.CloseButton>

        <S.CardWrapper>
          {/* 카드 1 */}
          <S.Card>
            <S.SectionTitle>내용 입력하기</S.SectionTitle>
            <S.InputRow>
              <S.Label>분위기</S.Label>
              <S.InputBox placeholder="장소의 분위기를 입력해주세요." />
            </S.InputRow>
            <S.InputRow>
              <S.Label>추천해요</S.Label>
              <S.InputBox placeholder="추천하고 싶은 이유를 입력해주세요." />
            </S.InputRow>
            <S.InputRow>
              <S.Label>알려드려요</S.Label>
              <S.InputBox placeholder="주의해야할 점을 입력해주세요." />
            </S.InputRow>
          </S.Card>

          {/* 카드 2 */}
          <S.Card>
            <S.SectionTitle>장소 대표사진 첨부</S.SectionTitle>
            <S.PhotoUpload>사진 첨부하기</S.PhotoUpload>
          </S.Card>

          {/* 카드 3 */}
          <S.Card>
            <S.SectionTitle>방문 인증사진 첨부</S.SectionTitle>
            <S.PhotoUpload>사진 첨부하기</S.PhotoUpload>
          </S.Card>
        </S.CardWrapper>

        <S.Button>완료하기</S.Button>
      </S.Container>
    </S.Overlay>
  );
}
