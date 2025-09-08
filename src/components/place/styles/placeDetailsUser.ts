import type { MapType } from "@/types/map";
import styled from "styled-components";

export const PlaceDetailUser = styled.div<{ $isCard: boolean }>`
  width: ${(props) => (props.$isCard ? "58%" : "calc(100% - 20px)")};
  margin-left: ${(props) => (props.$isCard ? "0" : "-20px")};
  height: 100%;
  background-color: var(--color-mint200);
  /* background-color: #ffeb80; */
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div<{ $isCard: boolean }>`
  width: ${(props) => (props.$isCard ? "170px" : "100%")};
  padding-top: 46px;
`;

export const DetailListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding-bottom: 20px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DetailTitle = styled.div`
  color: var(--color-navy);
  font-size: 9px;
  font-weight: 700;
`;

export const DetailSubTiltle = styled.div`
  color: var(--color-navy);
  font-size: 9px;
  font-weight: 300;
`;

export const DetailContent = styled.div`
  background-color: white;
  padding: 9px 13px;
  color: var(--color-navy);
  border-radius: 5px;
  font-size: 8px;
  font-weight: 700;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-top: 15px;
`;

export const BtnWrapper = styled.div`
  cursor: pointer;
`;

export const LikeContainer = styled.div<{ $isLiked?: boolean }>`
  cursor: pointer;
  position: absolute;
  padding-left: 2px;
  top: 0;
  right: 0;
  transform: translateY(-50%);
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
  z-index: 105;
`;
