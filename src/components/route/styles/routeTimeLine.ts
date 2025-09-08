// Timeline.styles.ts
import styled from "styled-components";

export const Wrap = styled.div``;

export const DayGroup = styled.div`
  display: block;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 65px 28px 1fr; /* Day | 세로선 | 내용 */
  column-gap: 20px;
  align-items: start;
  margin: 18px 0;
`;

export const DayLabel = styled.div`
  justify-self: end;
  padding-top: 10px;
  color: var(--color-sub300);
  font-size: 13px;
  font-weight: 600;
`;

export const LineCell = styled.div`
  position: relative;
  min-height: 48px;
  align-self: stretch;

  /* 세로 점선 */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -8px;
    bottom: -8px;
    transform: translateX(-50%);
    border-left: 3px dashed var(--color-sub300);
    pointer-events: none;
  }
`;

export const Dot = styled.span`
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--color-main500);
  box-shadow: 0 0 0 4px #fff; /* 점 테두리를 흰색으로(라인과 분리) */
`;

export const Content = styled.div`
  padding-right: 12px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PlaceTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const PlaceCategory = styled.span`
  font-weight: 300;
`;

export const Transportation = styled.div`
  font-size: 10px;
  font-weight: 300;
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;
