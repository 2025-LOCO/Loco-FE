import styled from "styled-components";

export const CustomTripSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%; /* 부모 컨테이너 기준으로 줄어들도록 */
  max-width: 426px;
`;

export const DestInput = styled.input`
  border: 1px solid #2d334a;
  border-radius: 30px;
  padding: 12px 25px;
  margin-top: 55px;

  &::placeholder {
    color: #8189b1;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  }
`;

export const SelectDesc = styled.div`
  margin-top: 119px;
  margin-bottom: 42px;
  padding: 13px;
  color: #a1a7c4;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 26px;
  width: 100%;
`;

export const SelectRegion = styled.div<{ $backgroundColor: string }>`
  border-radius: 9px;
  background: ${(props) => props.$backgroundColor};
  padding: 13px 17px;
  cursor: pointer;

  &:hover {
    background-color: #ccd2d5;
  }
`;

export const RouteExploreSection = styled.div`
  display: flex;
  flex-direction: column;
`;
