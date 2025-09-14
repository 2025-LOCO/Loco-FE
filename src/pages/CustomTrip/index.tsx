import * as S from "./styles";
import CheckIcon from "@/assets/images/check_small.svg";
import { useState } from "react";
import { useAnswerStore } from "@/stores/answerStore";
import { questions } from "@/data/questions";
import { useNavigate } from "react-router";
export default function CustomTripPage() {
  const [step, setStep] = useState(0);
  const { answers, setAnswer } = useAnswerStore();
  const navigate = useNavigate();

  const current = questions[step];
  const selected = answers[current.id];
  const handleNext = () => {
    // 현재 질문 답변이 없을 때는 "전체"로 저장
    if (!selected) {
      setAnswer(current.id, "전체");
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      console.log("최종 답변:", answers);
      navigate("/explore/loco-route", { state: { answers } });
    }
  };

  return (
    <>
      <S.CustomTripContainer>
        <S.ProgressBarContainer>
          <S.Progress>
            <S.ProgressFill
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </S.Progress>
          <S.Description>맞춤 여행을 추천해드릴게요 !</S.Description>
        </S.ProgressBarContainer>
        <S.ContentContainer>
          <S.Question>
            <S.QuestionHighlight>{current.highlighted}</S.QuestionHighlight>
            {current.title}
          </S.Question>
          <S.AnswerContainer>
            {current.options.map((opt) => (
              <S.SelectButtonSmall
                key={opt.toString()}
                $isSelected={selected === opt}
                onClick={() => setAnswer(current.id, opt)}
              >
                {opt}
                {selected === opt && (
                  <S.CheckIcon src={CheckIcon} alt="체크아이콘" />
                )}
              </S.SelectButtonSmall>
            ))}
          </S.AnswerContainer>
          <S.NextButtonContainer>
            <S.PassButton
              onClick={() => {
                setAnswer(current.id, "전체"); // '상관없어요' → 전체로 저장
                handleNext();
              }}
            >
              상관없어요!
            </S.PassButton>
            <S.SelectButton onClick={handleNext}>선택하기 {">"}</S.SelectButton>
          </S.NextButtonContainer>
        </S.ContentContainer>
      </S.CustomTripContainer>
      <div style={{ height: "40px", width: "100%" }} />
    </>
  );
}
