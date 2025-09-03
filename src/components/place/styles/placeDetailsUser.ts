import styled from "styled-components";

export const PlaceDetailUser = styled.div`
  width: 58%;
  height: 100%;
  background-color: var(--color-mint200);
  /* background-color: #ffeb80; */
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 170px;
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
