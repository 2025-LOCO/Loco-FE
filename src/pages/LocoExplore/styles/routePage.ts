import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
  position: relative;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.div`
  background-color: var(--color-sub100);
  border-radius: 10px;
  display: inline-flex;
  padding: 7px 10px 7px 15px;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  color: black;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  min-width: 180px;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: white;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 6px;
  width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: var(--color-sub100);
  }
`;
