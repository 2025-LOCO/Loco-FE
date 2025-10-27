import Divider from "@/components/Divider";
import { registerInfos } from "@/data/registerInfo";
import * as S from "@/pages/Auth/styles";
import { useState } from "react";
import { registerUser } from "@/apis/auth/register";
import { useNavigate } from "react-router";

export default function SignUpPage() {
  const navigate = useNavigate();

  // 입력값 상태 (registerInfos 기반으로 관리)
  const [form, setForm] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 비밀번호 일치 검사
    if (form.user_password !== form.user_password_check) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    // 백엔드 요청 형태로 매핑
    const requestBody = {
      email: form.user_id, // user_id → email
      nickname: form.user_nickname, // user_nickname → nickname
      intro: form.user_intro, // user_intro → intro
      city_id: "11", // 지역 선택이 없으므로 기본값 임시
      password: form.user_password, // user_password → password
    };

    try {
      await registerUser(requestBody);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (err) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error("회원가입 오류:", err);
    }
  };

  return (
    <S.Common.BodySection>
      <S.Common.Title>회원가입</S.Common.Title>

      <S.FormContainer>
        <S.FormTitle>가입정보</S.FormTitle>
        <Divider />

        <form onSubmit={handleSubmit}>
          {registerInfos.map((registerInfo) => (
            <div key={registerInfo.name}>
              <S.FormFieldRow>
                <S.FormFieldLabel>{registerInfo.label}</S.FormFieldLabel>
                <S.FormFieldInput
                  type={registerInfo.type}
                  id={registerInfo.name}
                  name={registerInfo.name}
                  placeholder={registerInfo.placeholder}
                  value={form[registerInfo.name] || ""}
                  onChange={handleChange}
                />
                {/* {registerInfo.hasDupCheckButton && (
                  <S.DupCheckButton>중복확인</S.DupCheckButton>
                )} */}
              </S.FormFieldRow>
              <Divider height="1px" />
            </div>
          ))}

          <S.ButtonContainer>
            <S.CancelButton to="/login">취소</S.CancelButton>
            <S.SubmitButton type="submit">완료</S.SubmitButton>
          </S.ButtonContainer>
        </form>
      </S.FormContainer>
    </S.Common.BodySection>
  );
}
