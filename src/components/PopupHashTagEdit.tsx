import { useState } from "react";
import * as S from "./PopupPlaceEdit.style"; // 스타일 재사용
import CustomDropdown from "./CustomDropdown";

export default function PopupHashTagEdit() {
  const [open, setOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null); //

  if (!open) return null;

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={() => setOpen(false)}>×</S.CloseButton>

        <S.CardWrapper>
          {/* 카드 1: 해시태그 수정 */}
          <S.TagCard>
            <S.SectionTitle>해시태그 수정하기</S.SectionTitle>

            <S.Inputtag>
              <S.Label>여행기간</S.Label>
              <CustomDropdown
                index={0}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={["당일치기", "2박3일", "3박4일", "장기여행"]}
              />
            </S.Inputtag>

            <S.Inputtag>
              <S.Label>여행장소</S.Label>
              <CustomDropdown
                index={1}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={["바다", "산", "도시", "농촌"]}
              />
            </S.Inputtag>

            <S.Inputtag>
              <S.Label>동행자</S.Label>
              <CustomDropdown
                index={2}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={["혼자", "친구", "연인", "가족", "반려동물"]}
              />
            </S.Inputtag>

            <S.Inputtag>
              <S.Label>이동수단</S.Label>
              <CustomDropdown
                index={3}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={["걸어서", "자전거", "자동차", "기차", "버스"]}
              />
            </S.Inputtag>

            <S.Inputtag>
              <S.Label>분위기</S.Label>
              <CustomDropdown
                index={5}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={[
                  "잔잔하고 조용한",
                  "신나는 액티비티",
                  "다채로운 경험",
                  "맛있는 여행",
                  "아늑하고 로맨틱한",
                ]}
              />
            </S.Inputtag>

            <S.Inputtag>
              <S.Label>방문지수</S.Label>
              <CustomDropdown
                index={5}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                options={["1", "2", "3", "4", "5"]}
              />
            </S.Inputtag>
          </S.TagCard>

          {/* 카드 2: 루트 대표사진 첨부 */}
          <S.Card>
            <S.SectionTitle>루트 대표사진 첨부</S.SectionTitle>
            <S.PhotoUpload>사진 첨부하기</S.PhotoUpload>
          </S.Card>

          {/* 카드 3: 내용 수정 */}
          <S.Card>
            <S.SectionTitle>내용 수정하기</S.SectionTitle>
            <S.Input_1 placeholder="제목을 입력해 주세요" />
            <S.TextArea placeholder="내용을 입력해 주세요" />
          </S.Card>
        </S.CardWrapper>

        <S.Button>완료하기</S.Button>
      </S.Container>
    </S.Overlay>
  );
}
