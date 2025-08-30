import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 20px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  max-width: 170px;
  min-height: 240px;
`;

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
  border: 2px solid var(--color-sub200);
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

export const PlaceTitle = styled.div`
  color: var(--color-navy);
  /* font-size: 20px; */
  font-size: 17px;
  font-weight: 700;
`;
export const PlaceContent = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 300;
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
