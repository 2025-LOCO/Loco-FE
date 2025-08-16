import styled, { keyframes } from "styled-components";

// ------------------- 메인 섹션 ---------------------
export const MainSection = styled.div`
  background-color: var(--color-mint100);
  padding: 130px 355px;
  display: flex;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 94px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const Subtitle = styled.div`
  color: var(--color-navy);
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 119.604%;
  padding-top: 20px;
`;

export const SubDescription = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
`;

export const DescriptSection = styled.div`
  padding-top: 57px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const DescriptText = styled.div`
  color: var(--color-navy);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ExploreNavigator = styled.div`
  color: var(--color-navy);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExploreItemWrapper = styled.div`
  display: inline-flex;
`;

export const ExploreItem = styled.div`
  color: var(--color-navy);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  padding: 15px 80px;
  cursor: pointer;
`;

export const Divider = styled.span`
  color: var(--color-navy);
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  margin: 15px 0;
`;

/* 아래로 내리기 버튼 - 위 아래 움직이는 애니메이션 */
const CYCLE_SEC = 1.2; // 한 사이클 시간
const PLAY_FOR_SEC = 3.6; // 총 재생 시간
const LOOPS = Math.max(1, Math.ceil(PLAY_FOR_SEC / CYCLE_SEC));

const move = keyframes`
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const moveHover = keyframes`
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(0, -7px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const DownButton = styled.img`
  display: block;
  will-change: transform;

  /* 초기: LOOPS 회 재생 후 정지 */
  animation-name: ${move};
  animation-duration: ${CYCLE_SEC}s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: ${LOOPS};
  animation-fill-mode: both;
  /* hover 시: 같은 길이만큼 다시 재생 */
  &:hover {
    animation-name: ${moveHover};
    animation-duration: ${CYCLE_SEC}s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: ${LOOPS};
    animation-fill-mode: both;
  }
`;

export const UnderLine = styled.div`
  margin: 155px 60px 0px 60px;
  border-bottom: 3px solid var(--color-navy);
`;

// ------------------- 지도 섹션 ---------------------
export const MapSelectSection = styled.div`
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
