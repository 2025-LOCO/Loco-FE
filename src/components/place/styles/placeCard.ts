import styled from "styled-components";

export const PlaceCard = styled.div`
  position: relative;
  width: 400px;
  height: 290px;
  z-index: 15;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CloseIconWrapper = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 18px;
  z-index: 16;
`;
export const LikeContainer = styled.div<{ $isLiked?: boolean }>`
  cursor: pointer;
  position: absolute;
  padding-left: 2px;
  top: 15px;
  right: 36px;
  display: flex;
  width: 48px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: ${(props) =>
    props.$isLiked ? "var(--color-main350)" : "white"};
  border-radius: 13px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);

  text-align: center;
  color: var(--color-navy);
  font-size: 8px;
  font-weight: 700;
`;
