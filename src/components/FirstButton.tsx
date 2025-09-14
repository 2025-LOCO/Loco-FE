import { type NavLinkProps } from "react-router";
import * as S from "./FirstButton.style";

interface FirstButtonProps extends NavLinkProps {
  children: React.ReactNode;
  isRecommendBtn?: boolean;
  condition?: boolean; // 조건부 이동
  onConditionFail?: () => void; // 조건 불충족 시 실행
}

export default function FirstButton({
  children,
  isRecommendBtn = false,
  condition = true,
  onConditionFail,
  ...props
}: FirstButtonProps) {
  return (
    <S.FirstButton
      {...props}
      $isRecommendBtn={isRecommendBtn}
      onClick={(e) => {
        if (!condition) {
          e.preventDefault(); // 이동 막기
          onConditionFail?.();
        }
        props.onClick?.(e);
      }}
    >
      {children}
    </S.FirstButton>
  );
}
