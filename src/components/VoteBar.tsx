import * as S from "./VoteBar.style";

type VoteBarProps = {
  counts: number[] | null; // 각 선택의 투표 수
};

export default function VoteBar({ counts }: VoteBarProps) {
  // constants

  // 진짜예요: 노랑, 무난해요: 회색, 아쉬워요: 남색
  const colors = ["var(--color-main500)", "#A8B2B8", "var(--color-navy)"];
  const leftLabel = "진짜예요";
  const rightLabel = "아쉬워요";
  const title = "로코지기들의 의견";

  // counts의 모든 값을 더한 합계
  const total = counts?.reduce((sum, n) => sum + n, 0) || 1;

  // 분모에 0이 들어가는 경우 방지
  const safeTotal = Math.max(1, total);

  // 투표항목별 퍼센트
  const partsPct = counts?.map(
    (partCount) => +((partCount / safeTotal) * 100).toFixed(2)
  );

  return (
    <S.VoteContainer>
      <S.VoteTitleContainer>
        <S.VoteTitle>{title}</S.VoteTitle>
        <S.VoteNum>답변 {total}</S.VoteNum>
      </S.VoteTitleContainer>

      <S.Bar aria-label="의견 분포">
        {partsPct?.map((pct, i) => (
          <S.Segment key={i} $pct={pct} $color={colors[i]} aria-hidden />
        ))}
      </S.Bar>

      <S.Label>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </S.Label>
    </S.VoteContainer>
  );
}
