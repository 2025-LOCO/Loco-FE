import styled from "styled-components";

export const PlaceDetailKakao = styled.div`
  width: 42%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 114px;
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

export const ImgWrapper = styled.div`
  width: 114px;
  height: 84px;

  margin: 3px 0;
  border-radius: 8px;
  border: 2px solid var(--color-sub300);
  background-color: white;
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
