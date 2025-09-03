import styled from "styled-components";

export const SearchBar = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 15px;
  border: 1px solid var(--color-sub400);
  border-radius: 9999px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  background: transparent;
  width: 100%;

  color: var(--color-navy);
  font-size: 15px;
  font-weight: 500;

  &::placeholder {
    color: var(--color-sub400);
    font-size: 15px;
    font-weight: 400;
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  align-self: center;
`;
