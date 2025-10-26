import styled from "styled-components";

export const EditContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;

export const InputTitle = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  border: none;
  outline: none;
  margin-bottom: 8px;
  color: var(--color-navy);
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e6e6e6;
  margin-bottom: 12px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  border: none;
  outline: none;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 32px;
  bottom: 24px;
  background-color: #E3F6F5; 
  color: var(--color-navy);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  &:active {
    transform: scale(0.98); /* 클릭시 살짝 눌림 효과 */
  }
`;
