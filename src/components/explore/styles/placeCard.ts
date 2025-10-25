import styled from "styled-components";

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImgWrapper = styled.div<{ $hasImg: boolean }>`
  position: relative;
  width: 170px;
  height: 110px;
  border-radius: 8px;
  border: ${(props) =>
    props.$hasImg ? "none" : "2px solid var(--color-sub200)"};
  margin-bottom: 20px;
`;

export const LocationBadge = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  right: 7px;
  border-radius: 12px;
  background: var(--color-mint300);
  padding: 6px 13px;
  color: #414141;

  text-align: center;
  font-size: 10px;
  font-weight: 700;
`;

export const LikedContainer = styled.div`
  padding-top: 25px;
  display: inline-flex;
  gap: 5px;
`;

export const LikedNum = styled.div`
  color: #484f56;
  font-size: 13px;
  font-weight: 600;
`;
