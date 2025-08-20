interface RegisterInfosType {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  hasDupCheckButton: boolean;
}

export const registerInfos: RegisterInfosType[] = [
  {
    name: "user_id",
    label: "아이디 (이메일)",
    placeholder: "이메일 주소",
    type: "email",
    hasDupCheckButton: true,
  },
  {
    name: "user_nickname",
    label: "닉네임",
    placeholder: "별명을 입력하세요",
    type: "text",
    hasDupCheckButton: true,
  },
  {
    name: "user_password",
    label: "비밀번호",
    placeholder: "비밀번호",
    type: "text",
    hasDupCheckButton: false,
  },
  {
    name: "user_password_check",
    label: "비밀번호 확인",
    placeholder: "비밀번호 확인",
    type: "text",
    hasDupCheckButton: false,
  },
  {
    name: "user_birth",
    label: "생년월일",
    placeholder: "8자리 입력",
    type: "text",
    hasDupCheckButton: false,
  },
];
