import styled, { css } from "styled-components";

export const PlaceDetailKakao = styled.div<{ $isCard: boolean }>`
  width: ${(props) => (props.$isCard ? "42%" : "calc(100% + 45px)")};
  margin-left: ${(props) => (props.$isCard ? "0" : "-45px")};
  display: flex;
  justify-content: center;
  background-color: white;
  /* margin-top: auto; */
`;

export const Content = styled.div<{
  $isCard: boolean;
  $isInSelectedPlaceDetail?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.$isCard ? "column" : "row")};
  gap: 2px;
  width: ${(props) => (props.$isCard ? "114px" : "100%")};
  padding: ${(props) => (props.$isCard ? "30px 0 0 0" : "50px 20px 50px 25px")};
  ${({ $isInSelectedPlaceDetail }) =>
    $isInSelectedPlaceDetail &&
    css`
      padding-top: 40px;
    `}

  z-index: 100;
`;

export const PlaceTitle = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 700;
`;

export const PlaceType = styled.div`
  color: var(--color-sub300);
  font-size: 12px;
  font-weight: 700;
`;

export const ImgWrapper = styled.div<{ $isCard: boolean }>`
  width: 114px;
  height: 84px;

  margin: 3px 0;
  margin-top: ${(props) => (props.$isCard ? "3px" : "10px")};
  border-radius: 8px;
  border: 2px solid var(--color-sub300);
  background-color: white;
`;

export const DetailListContainer = styled.div<{ $isCard: boolean }>`
  padding-top: ${(props) => (props.$isCard ? "0" : "45px")};
  padding-left: ${(props) => (props.$isCard ? "0" : "13px")};
`;

export const DetailContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
  padding-top: 3px;
`;

export const DetailIcon = styled.img`
  width: 10px;
`;

export const DetailTitle = styled.div`
  color: var(--color-navy);
  font-size: 9px;
  font-weight: 700;
  padding-top: 20px;
`;

export const DetailDescription = styled.div`
  font-size: 9px;
  font-weight: 300;
  overflow-wrap: anywhere;
`;
