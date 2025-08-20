import Divider from "@/components/Divider";
import * as S from "@/pages/Auth/styles";

export default function LoginPage() {
  return (
    <>
      <S.Common.BodySection>
        <S.Common.Title>로그인</S.Common.Title>
        <Divider />
        <S.SignUpButton to="/sign-up">회원가입</S.SignUpButton>
      </S.Common.BodySection>
    </>
  );
}
