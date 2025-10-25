import styled from "styled-components";

export const CustomTripContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const Progress = styled.div`
  height: 5px;
  background: var(--color-gray);
  border-radius: 999px;
  overflow: hidden;
`;
export const ProgressFill = styled.div`
  height: 100%;
  background: var(--color-main350);
  transition: width 0.25s ease;
`;

export const Description = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 300;
  padding: 23px 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  width: 100%;
  max-width: 900px;
  flex-shrink: 1;
`;

export const QuestionHighlight = styled.span`
  color: var(--color-navy);
  font-size: 30px;
  font-weight: 600;
`;

export const Question = styled.div`
  color: var(--color-navy);
  font-size: 30px;
  font-weight: 300;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const selectButtonCommon = `
  height: 60px;
  background-color: var(--color-mint200);
  border-radius: 10px;
  font-size: 20px;
  font-weight: 300;
  position: relative;
`;

export const SelectButtonLarge = styled.button`
  ${selectButtonCommon}
  flex: 0 1 200px;
`;

export const SelectButtonMedium = styled.button<{ $isSelected?: boolean }>`
  border: ${({ $isSelected }) => $isSelected && "2px solid var(--color-navy)"};
  ${selectButtonCommon}
  flex: 0 1 180px;
`;

export const SelectButtonSmall = styled.button<{ $isSelected?: boolean }>`
  border: ${({ $isSelected }) => $isSelected && "2px solid var(--color-navy)"};
  ${selectButtonCommon}
  flex: 0 1 142px;
  cursor: pointer;
`;

export const CheckIcon = styled.img`
  position: absolute;
  width: 17px;
  height: 17px;
  top: 8px;
  right: 8px;
`;

export const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const PassButton = styled.button`
  border-radius: 28.5px;
  background-color: var(--color-gray);
  padding: 17px 29px;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-sub400);
  cursor: pointer;
`;

export const SelectButton = styled.button`
  border-radius: 28.5px;
  background-color: var(--color-navy);
  padding: 17px 81px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
