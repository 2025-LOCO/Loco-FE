import * as S from "./styles/header";
import LogoIcon from "@/assets/images/logo_header.svg";
import MyIcon from "@/assets/images/profile_small.svg";

export default function Header() {
  return (
    <>
      <S.HeaderContainer>
        <S.Logo>
          <img src={LogoIcon} alt="Logo" />
        </S.Logo>

        <S.MenuContainer>
          <S.MenuItem to="/">홈</S.MenuItem>
          <S.MenuItem to="custom-trip">맞춤여정</S.MenuItem>
          <S.MenuItem to="explore">로코탐색</S.MenuItem>
          <S.MenuItem to="loco-talk">로코톡톡</S.MenuItem>
          <S.MenuItem to="map-maker">지도제작</S.MenuItem>
          <S.MenuItem to="guide">이용안내</S.MenuItem>
        </S.MenuContainer>

        {/* <S.LoginContainer>
          <S.LoginButton to="login">로그인</S.LoginButton>
          <S.SignUpButton to="sign-up">회원가입</S.SignUpButton>
        </S.LoginContainer> */}

        <S.MyContainer>
          <img src={MyIcon} alt="마이아이콘" style={{ paddingRight: "10px" }} />
          <S.MyItem to="my-page">마이</S.MyItem>
          <S.MyItem to="loco-map">로코지도</S.MyItem>
          <S.MyItem to="travel-map">여행지도</S.MyItem>
        </S.MyContainer>
      </S.HeaderContainer>
    </>
  );
}
