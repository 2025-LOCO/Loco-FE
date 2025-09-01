import styled from "styled-components";
import { ReactNode } from "react";

type VoteBarProps = {
  counts: number[]; // 각 선택의 투표 수
  colors?: string[]; // 분할 색상 (counts 길이만큼)
  leftLabel?: ReactNode; // 왼쪽 라벨
  rightLabel?: ReactNode; // 오른쪽 라벨
  title?: ReactNode; // 상단 타이틀
  height?: number; // 바 높이(px)
};

export default function VoteBar({
  counts,
  colors = ["#F2C94C", "#B9C0C9", "var(--color-navy)"], // 노랑, 회색, 남색
  leftLabel = "진짜예요",
  rightLabel = "아쉬워요",
  title = "다른 사용자들의 의견",
  height = 12,
}: VoteBarProps) {
  const total = Math.max(
    1,
    counts.reduce((a, b) => a + b, 0)
  );
  const parts = counts.map((n) => +((n / total) * 100).toFixed(2));

  return (
    <Wrap>
      <Head>
        <span>{title}</span>
        <Total>답변 {total.toLocaleString()}</Total>
      </Head>

      <Track $height={height} role="meter" aria-label="의견 분포">
        {parts.map((pct, i) => (
          <Seg
            key={i}
            $pct={pct}
            $color={colors[i] ?? colors[colors.length - 1]}
            aria-hidden
          />
        ))}
      </Track>

      <Labels>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </Labels>
    </Wrap>
  );
}

/* styles */
const Wrap = styled.div`
  width: 100%;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 700;
  color: var(--color-navy);
`;

const Total = styled.span`
  color: var(--color-sub300);
  font-weight: 700;
`;

const Track = styled.div<{ $height: number }>`
  width: 100%;
  height: ${(p) => p.$height}px;
  background: #eef2f6; /* 바 바탕색 */
  border-radius: 9999px; /* 알약 모양 */
  overflow: hidden; /* 안쪽 조각을 둥글게 자르기 */
  display: flex;
`;

const Seg = styled.div<{ $pct: number; $color: string }>`
  width: ${(p) => p.$pct}%;
  background: ${(p) => p.$color};
  /* 양 끝만 둥글게 (가운데 조각은 직선) */
  &:first-child {
    border-radius: 9999px 0 0 9999px;
  }
  &:last-child {
    border-radius: 0 9999px 9999px 0;
  }
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  color: var(--color-sub300);
  font-size: 14px;
`;
