import * as S from "./styles/Header";
import LogoIcon from "@/assets/images/logo_header.svg";
import MyIcon from "@/assets/images/profile_small.svg";
import { useAuthStore } from "@/stores/authStore";

export default function Header() {
  const { isLoggedIn, setLogout } = useAuthStore();

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      setLogout();
      alert("로그아웃 되었습니다.");
      window.location.href = "/"; // 홈으로 리다이렉트
    }
  };
  return (
    <>
      <S.HeaderContainer>
        <S.Logo to="/">
          <img src={LogoIcon} alt="Logo" />
        </S.Logo>

        <S.MenuContainer>
          <S.MenuItem to="/">홈</S.MenuItem>
          <S.MenuItem to="custom-trip">맞춤여정</S.MenuItem>
          <S.MenuItem to="explore">로코탐색</S.MenuItem>
          <S.MenuItem to="loco-talk">로코톡톡</S.MenuItem>
        </S.MenuContainer>

        {isLoggedIn ? (
          <S.MyContainer>
            <img
              src={MyIcon}
              alt="마이아이콘"
              style={{ paddingRight: "10px" }}
            />
            <S.MyItem to="my-page">마이</S.MyItem>
            <S.MyItem to="my-loco-map">로코지도</S.MyItem>
            <S.MyItem to="my-travel-map">여행지도</S.MyItem>
            <S.LogoutButton type="button" onClick={handleLogout}>
              로그아웃
            </S.LogoutButton>
          </S.MyContainer>
        ) : (
          <S.LoginContainer>
            <S.LoginButton to="login">로그인</S.LoginButton>
            <S.SignUpButton to="sign-up">회원가입</S.SignUpButton>
          </S.LoginContainer>
        )}
      </S.HeaderContainer>
    </>
  );
}
