import Divider from "@/components/Divider";
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
          <S.FormFieldRow>
            <S.FormFieldLabel>아이디 (이메일)</S.FormFieldLabel>
            <S.FormFieldInput
              type="text"
              id="user_id"
              name="user_id"
              placeholder="이메일 주소"
            />
            <S.DupCheckButton>중복확인</S.DupCheckButton>
          </S.FormFieldRow>

          <Divider height="1px" />

          <S.FormFieldRow>
            <S.FormFieldLabel>닉네임</S.FormFieldLabel>
            <S.FormFieldInput
              type="text"
              id="user_nickname"
              name="user_nickname"
              placeholder="별명을 입력하세요"
            />
            <S.DupCheckButton>중복확인</S.DupCheckButton>
          </S.FormFieldRow>

          <Divider height="1px" />

          <S.FormFieldRow>
            <S.FormFieldLabel>비밀번호</S.FormFieldLabel>
            <S.FormFieldInput
              type="text"
              id="user_password"
              name="user_password"
              placeholder="비밀번호"
            />
          </S.FormFieldRow>

          <Divider height="1px" />

          <S.FormFieldRow>
            <S.FormFieldLabel>비밀번호 확인</S.FormFieldLabel>
            <S.FormFieldInput
              type="text"
              id="user_password"
              name="user_password"
              placeholder="비밀번호 확인"
            />
          </S.FormFieldRow>

          <Divider height="1px" />

          <S.FormFieldRow>
            <S.FormFieldLabel>생년월일</S.FormFieldLabel>
            <S.FormFieldInput
              type="text"
              id="user_password"
              name="user_password"
              placeholder="8자리 입력"
            />
          </S.FormFieldRow>

          <Divider height="1px" />
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
