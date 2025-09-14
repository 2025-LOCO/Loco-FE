import * as S from "./styles";
import CheckIcon from "@/assets/images/check_small.svg";
export default function CustomTripPage() {
  return (
    <>
      <S.CustomTripContainer>
        <S.ProgressBarContainer>
          <S.Progress>
            <S.ProgressFill style={{ width: "50%" }} />
          </S.Progress>
          <S.Description>맞춤 여행을 추천해드릴게요 !</S.Description>
        </S.ProgressBarContainer>
        <S.ContentContainer>
          <S.Question>
            <S.QuestionHighlight>여행 기간</S.QuestionHighlight>은 어떻게
            되시나요?
          </S.Question>
          <S.AnswerContainer>
            {/* <S.SelectButtonLarge>1박 2일</S.SelectButtonLarge> */}
            <S.SelectButtonMedium $isSelected={true}>
              혼자서
              <S.CheckIcon src={CheckIcon} alt="체크아이콘" />
            </S.SelectButtonMedium>
            <S.SelectButtonMedium>가족과 함께</S.SelectButtonMedium>
            <S.SelectButtonMedium>연인과 함께</S.SelectButtonMedium>
            <S.SelectButtonMedium>친구와 함께</S.SelectButtonMedium>
            {/* <S.SelectButtonSmall>걷기 좋은</S.SelectButtonSmall> */}
          </S.AnswerContainer>
          <S.NextButtonContainer>
            <S.PassButton>상관없어요!</S.PassButton>
            <S.SelectButton>선택하기 {">"}</S.SelectButton>
          </S.NextButtonContainer>
        </S.ContentContainer>
      </S.CustomTripContainer>
      <div style={{ height: "40px", width: "100%" }} />
    </>
  );
}
