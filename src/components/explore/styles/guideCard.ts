import styled from "styled-components";

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImgWrapper = styled.div<{ $hasImg: boolean }>`
  position: relative;
  width: 130px;
  height: 130px;
  margin-top: 20px;
  align-self: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
`;

export const LocationBadge = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: var(--color-mint300);
  padding: 6px 13px;
  color: #414141;
  width: max-content;

  text-align: center;
  font-size: 10px;
  font-weight: 700;
`;

export const StatsListContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const StatContainer = styled.div`
  display: inline-flex;
  gap: 5px;
`;

export const StatValue = styled.div`
  color: #484f56;
  font-size: 13px;
  font-weight: 600;
`;
