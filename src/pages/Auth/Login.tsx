import { loginUser } from "@/apis/auth/login";
import Divider from "@/components/Divider";
import * as S from "@/pages/Auth/styles";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setLoggedIn = useAuthStore((s) => s.setLoggedIn);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser({ username: id, password });

      localStorage.setItem("accessToken", data.access_token);
      setLoggedIn(true);
      alert("로그인 되었습니다.");
      navigate("/");
    } catch (error) {
      alert("로그인 실패. 아이디나 비밀번호를 확인해주세요.");
      console.error(error);
    }
  };
  return (
    <>
      <S.Common.BodySection>
        <S.Common.Title>로그인</S.Common.Title>
        <Divider />
        <S.LoginContainer>
          <S.LoginFieldInput
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <S.LoginFieldInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
          <S.SignUpButton to="/sign-up">회원가입</S.SignUpButton>
        </S.LoginContainer>
        <div style={{ paddingTop: "100px" }} />
      </S.Common.BodySection>
    </>
  );
}
