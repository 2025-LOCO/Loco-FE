import * as S from "./VoteBar.style";

type VoteBarProps = {
  counts: number[] | null; // 각 선택의 투표 수
};

export default function VoteBar({ counts }: VoteBarProps) {
  const colors = ["var(--color-main500)", "#A8B2B8", "var(--color-navy)"];
  const leftLabel = "진짜예요";
  const rightLabel = "아쉬워요";
  const title = "로코지기들의 의견";

  // counts 합계
  const total = counts?.reduce((sum, n) => sum + n, 0) ?? 0;

  // 합계가 0인 경우 — UI 분기
  if (!total || total === 0) {
    return (
      <S.VoteContainer>
        <S.VoteTitleContainer>
          <S.VoteTitle>{title}</S.VoteTitle>
          <S.VoteNum>답변 0</S.VoteNum>
        </S.VoteTitleContainer>
        <S.EmptyMessage>아직 답변이 없습니다.</S.EmptyMessage>
      </S.VoteContainer>
    );
  }

  // 안전한 분모 계산
  const safeTotal = Math.max(1, total);

  // 퍼센트 계산
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
