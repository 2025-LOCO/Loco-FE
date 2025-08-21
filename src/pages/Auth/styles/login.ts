import { Link } from "react-router";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 40px;
`;

export const LoginFieldInput = styled.input`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 400;
  border: 1px solid var(--color-sub300);
  width: 100%;
  max-width: 450px;
  height: 64px;
  border-radius: 10px;
  padding: 0 25px;

  &::placeholder {
    color: var(--color-sub300);
    font-size: 15px;
    font-weight: 400;
  }
`;

const commonButtonStyles = `
color: var(--color-navy);
text-align: center;
font-size: 18px;
font-weight: 600;

width: 100%;
max-width: 500px;
height: 64px;
border-radius: 10px;
cursor: pointer;
`;

export const LoginButton = styled.button`
  ${commonButtonStyles}
  background-color: var(--color-mint300);
  margin-top: 20px;
`;

export const SignUpButton = styled(Link)`
  ${commonButtonStyles}
  display: inline-flex; /* Link는 기본적으로 inline 이므로 적용 필요 */
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-sub300);
`;

export const KakaoLoginContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

export const KakaoLoginButton = styled.button`
  color: var(--color-navy);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 2px;

  border-bottom: 3px solid var(--color-sub600);
  cursor: pointer;
`;
