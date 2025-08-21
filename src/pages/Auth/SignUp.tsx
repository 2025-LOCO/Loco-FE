import Divider from "@/components/Divider";
import { registerInfos } from "@/data/registerInfo";
import * as S from "@/pages/Auth/styles";

export default function SignUpPage() {
  return (
    <>
      <S.Common.BodySection>
        <S.Common.Title>회원가입</S.Common.Title>

        {/* 가입정보 */}
        <S.FormContainer>
          <S.FormTitle>가입정보</S.FormTitle>
          <Divider />
          {registerInfos.map((registerInfo) => (
            <>
              <S.FormFieldRow>
                <S.FormFieldLabel>{registerInfo.label}</S.FormFieldLabel>
                <S.FormFieldInput
                  type={registerInfo.type}
                  id={registerInfo.name}
                  name={registerInfo.name}
                  placeholder={registerInfo.placeholder}
                />
                {registerInfo.hasDupCheckButton && (
                  <S.DupCheckButton>중복확인</S.DupCheckButton>
                )}
              </S.FormFieldRow>

              <Divider height="1px" />
            </>
          ))}
        </S.FormContainer>

        {/* 마케팅 수신 동의 */}
        <S.FormContainer>
          <S.FormTitle style={{ paddingTop: "45px" }}>
            마케팅 정보 수신 동의 (선택)
          </S.FormTitle>
          <Divider height="3px" />
          <S.MarketingAgreementContainer>
            <S.MarketingOptionContainer>
              <S.MarketingAgreementCheckCircle />
              <div>SMS</div>
            </S.MarketingOptionContainer>
            <S.MarketingOptionContainer>
              <S.MarketingAgreementCheckCircle />
              <div>이메일</div>
            </S.MarketingOptionContainer>
          </S.MarketingAgreementContainer>
        </S.FormContainer>

        {/* 취소 혹은 완료 */}
        <S.ButtonContainer>
          <S.CancelButton to="/login">취소</S.CancelButton>
          <S.SubmitButton>완료</S.SubmitButton>
        </S.ButtonContainer>
      </S.Common.BodySection>
    </>
  );
}
