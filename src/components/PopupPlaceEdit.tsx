import { useState } from "react";
import * as S from "./PopupPlaceEdit.style";
import type { Place } from "@/types/place";
import { createPortal } from "react-dom";

interface PopupPlaceEditProps {
  place: Place | null;
  onClose: () => void;
  onSubmit: (form: {
    atmosphere: string;
    pros: string;
    cons: string;
    image_url: string;
  }) => void;
}

export default function PopupPlaceEdit({
  place,
  onClose,
  onSubmit,
}: PopupPlaceEditProps) {
  const [form, setForm] = useState({
    atmosphere: "",
    pros: "",
    cons: "",
    image_url: "",
  });

  if (!place) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  // Portal을 통해 body 아래로 렌더링
  return createPortal(
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.CardWrapper>
          {/* 카드 1 */}
          <S.Card>
            <S.SectionTitle>{place.name}</S.SectionTitle>

            <S.InputRow>
              <S.Label>분위기</S.Label>
              <S.InputBox
                name="atmosphere"
                value={form.atmosphere}
                onChange={handleChange}
                placeholder="장소의 분위기를 입력해주세요."
              />
            </S.InputRow>

            <S.InputRow>
              <S.Label>추천해요</S.Label>
              <S.InputBox
                name="pros"
                value={form.pros}
                onChange={handleChange}
                placeholder="추천하고 싶은 이유를 입력해주세요."
              />
            </S.InputRow>

            <S.InputRow>
              <S.Label>알려드려요</S.Label>
              <S.InputBox
                name="cons"
                value={form.cons}
                onChange={handleChange}
                placeholder="주의해야 할 점을 입력해주세요."
              />
            </S.InputRow>
          </S.Card>

          {/* 카드 2 */}
          <S.Card>
            <S.SectionTitle>장소 대표사진 첨부</S.SectionTitle>
            <S.PhotoUpload>사진 첨부하기</S.PhotoUpload>
          </S.Card>
        </S.CardWrapper>

        <S.Button onClick={handleSubmit}>완료하기</S.Button>
      </S.Container>
    </S.Overlay>,
    document.body
  );
}
