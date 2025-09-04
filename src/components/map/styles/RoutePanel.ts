import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  color: #484f56;
  font-size: 10px;
  font-weight: 300;
`;

export const ItemHeaderContentsContainer = styled.div`
  display: flex;
  gap: 10px;
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

export const PlaceTag = styled.div<{ $isSelected?: boolean }>`
  border-radius: 12px;
  background: ${(props) =>
    props.$isSelected ? "var(--color-main350)" : "var(--color-navy)"};
  padding: 4px 8px;

  color: ${(props) => (props.$isSelected ? "var(--color-navy)" : "white")};
  border: ${(props) =>
    props.$isSelected
      ? "2px solid var(--color-navy)"
      : "2px solid var(--color-navy)"};
  text-align: center;
  font-size: 9px;
  font-weight: 500;
`;

export const TransportContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 10px;
`;

export const TransportSvg = styled.div<{ $isSelected?: boolean }>`
  width: 13px;
  height: 13px;

  color: ${(props) => (props.$isSelected ? "var(--color-navy)" : "")};
`;

export const RouteSection = styled.div``;

export const RouteListSection = styled.div<{ $isOpened?: boolean }>`
  width: calc(100% - 45px);
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding-left: 45px;
  display: ${(props) => (props.$isOpened ? "" : "none")};
`;
