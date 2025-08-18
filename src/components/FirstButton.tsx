import * as S from "./FirstButton.style";

interface FirstButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isRecommendBtn?: boolean;
}

export default function FirstButton({
  children,
  isRecommendBtn = false,
}: FirstButtonProps) {
  return (
    <S.FirstButton $isRecommendBtn={isRecommendBtn}>{children}</S.FirstButton>
  );
}
