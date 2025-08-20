import { Link } from "react-router";
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormTitle = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 600;
`;

export const FormFieldRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FormFieldLabel = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  max-width: 120px;
  padding: 10px 0;
`;

export const FormFieldInput = styled.input`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 400;
  padding: 10px 0;
  width: 100%;

  &::placeholder {
    color: var(--color-sub300);
    font-size: 15px;
    font-weight: 400;
    padding: 10px 0;
    width: 100%;
  }
`;

export const DupCheckButton = styled.button`
  border-radius: 5px;
  border: 1px solid var(--color-sub300);
  flex: 1 0 94px;
  height: 30px;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;

  color: var(--color-sub300);
  text-align: center;
  font-size: 13px;
  font-weight: 400;
`;

export const MarketingAgreementContainer = styled.div`
  display: flex;
  gap: 25px;
  color: var(--color-sub300);
  font-size: 15px;
  font-weight: 400;
  padding: 10px 0;
`;

export const MarketingAgreementCheckCircle = styled.div`
  width: 18px;
  height: 18px;

  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid var(--color-sub300);
  // background-color: var(--color-navy);
`;

export const MarketingOptionContainer = styled.div`
  display: inline-flex;
  gap: 10px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  padding-top: 45px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const commonButtonStyles = `
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 10px;
color: var(--color-navy);
text-align: center;
font-size: 20px;
font-weight: 600;
cursor: pointer;
flex: 0 1 150px;
height: 50px;
`;

export const SubmitButton = styled.button`
  ${commonButtonStyles}
  background-color: var(--color-mint300);
`;

export const CancelButton = styled(Link)`
  ${commonButtonStyles}
  border: 1px solid var(--color-sub300);
`;
