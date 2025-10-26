import styled from "styled-components";

export const VoteContainer = styled.div``;

export const VoteTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VoteTitle = styled.div`
  color: var(--color-navy);
  font-size: 10px;
  font-weight: 700;
`;

export const VoteNum = styled.div`
  color: var(--color-sub500);
  font-size: 10px;
  font-weight: 700;
`;

export const Bar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 9999px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 6px;
`;

export const Segment = styled.div<{ $pct: number; $color: string }>`
  width: ${(props) => props.$pct}%;
  background: ${(props) => props.$color};

  /* 양 끝만 둥글게 - 가운데 조각은 직선 */
  &:first-child {
    border-radius: 9999px 0 0 9999px;
  }
  &:last-child {
    border-radius: 0 9999px 9999px 0;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;

  color: #484f56;
  font-size: 9px;
  font-weight: 400;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: var(--color-sub300);
  font-size: 13px;
  margin-top: 10px;
`;
