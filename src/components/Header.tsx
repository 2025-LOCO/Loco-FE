import {
  HeaderContainer,
  LoginButton,
  LoginContainer,
  Logo,
  MenuContainer,
  MenuItem,
  SignUpButton,
} from "../styles/componentStyles/HeaderStyle";
import LogoIcon from "../assets/images/logo_header.svg";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <img src={LogoIcon} alt="Logo" />
        </Logo>

        <MenuContainer>
          <MenuItem to="/">홈</MenuItem>
          <MenuItem to="/custom-trip">맞춤여정</MenuItem>
          <MenuItem to="loco-explore">로코탐색</MenuItem>
          <MenuItem to="loco-talk">로코톡톡</MenuItem>
          <MenuItem to="map-maker">지도제작</MenuItem>
          <MenuItem to="guide">이용안내</MenuItem>
        </MenuContainer>

        <LoginContainer>
          <LoginButton>로그인</LoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </LoginContainer>
      </HeaderContainer>
    </>
  );
}
