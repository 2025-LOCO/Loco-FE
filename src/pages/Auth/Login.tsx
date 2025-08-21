import Divider from "@/components/Divider";
import * as S from "@/pages/Auth/styles";
import KakaoIcon from "@/assets/images/kakao_icon.svg";

export default function LoginPage() {
  return (
    <>
      <S.Common.BodySection>
        <S.Common.Title>로그인</S.Common.Title>
        <Divider />
        <S.LoginContainer>
          <S.LoginFieldInput placeholder="아이디" />
          <S.LoginFieldInput placeholder="비밀번호" />

          <S.LoginButton>로그인</S.LoginButton>
          <S.SignUpButton to="/sign-up">회원가입</S.SignUpButton>
        </S.LoginContainer>
        <S.KakaoLoginContainer>
          <img src={KakaoIcon} alt="카카오아이콘" />
          <S.KakaoLoginButton>카카오로 시작하기</S.KakaoLoginButton>
        </S.KakaoLoginContainer>
      </S.Common.BodySection>
    </>
  );
}
