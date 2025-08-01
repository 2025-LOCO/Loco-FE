import * as S from "./styles/Header";
import LogoIcon from "../../assets/images/logo_header.svg";

export default function Header() {
  return (
    <>
      <S.HeaderContainer>
        <S.Logo>
          <img src={LogoIcon} alt="Logo" />
        </S.Logo>

        <S.MenuContainer>
          <S.MenuItem to="/">홈</S.MenuItem>
          <S.MenuItem to="/custom-trip">맞춤여정</S.MenuItem>
          <S.MenuItem to="loco-explore">로코탐색</S.MenuItem>
          <S.MenuItem to="loco-talk">로코톡톡</S.MenuItem>
          <S.MenuItem to="map-maker">지도제작</S.MenuItem>
          <S.MenuItem to="guide">이용안내</S.MenuItem>
        </S.MenuContainer>

        <S.LoginContainer>
          <S.LoginButton>로그인</S.LoginButton>
          <S.SignUpButton>회원가입</S.SignUpButton>
        </S.LoginContainer>
      </S.HeaderContainer>
    </>
  );
}
