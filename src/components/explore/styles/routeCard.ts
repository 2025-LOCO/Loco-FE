import { Link } from "react-router";
import styled from "styled-components";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 20px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 180px;
  min-height: 350px;
  cursor: pointer;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ImgWrapper = styled.div<{ $hasImg: boolean }>`
  position: relative;
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

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: var(--color-navy);
  font-size: 10px;
  font-weight: 600;
`;

export const PlaceTransportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const PlaceTag = styled.div`
  border-radius: 12px;
  background: var(--color-mint200);
  padding: 4px 8px;

  color: rgba(72, 79, 86, 0.8);
  text-align: center;
  font-size: 10px;
  font-weight: 600;
`;

export const TransportContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 10px;
`;

export const TransportImg = styled.img`
  width: 13px;
  height: 13px;
`;

export const LikedContainer = styled.div`
  display: inline-flex;
  gap: 5px;
`;

export const LikedNum = styled.div`
  color: #484f56;
  font-size: 13px;
  font-weight: 600;
`;
