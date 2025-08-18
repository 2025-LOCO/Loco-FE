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

export const YelloDot = styled.span`
  position: relative;
  display: inline-block;
  &::before {
    content: "";
    position: absolute;
    top: -0.55em; /* 현재 폰트 크기 기준 단위 (부모보다 위로 0.55em) */
    left: 50%; /* 가상요소의 왼쪽 모서리를 부모의 가로 중앙(50%)에 */
    transform: translate(
      -50%,
      0
    ); /*가상요소 자체의 가로 폭의 50%만큼 왼쪽으로*/
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-main350);
    opacity: 0.7;
  }
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
  margin-bottom: 50px;
  cursor: pointer;

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

// ------------------- 지역 선택 섹션 ---------------------
export const MapSelectSection = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  isolation: isolate; /* 이 박스 안에서만 z-index 비교 */
  justify-content: space-between;
  padding: 0 130px;
  min-height: 630px;
`;

// 지도: 절대배치
export const MapLayer = styled.div`
  position: absolute;
  z-index: 0;
  inset: 0; /* 부모 요소의 모든 면에 맞춤 */
  display: flex;
  justify-content: center;
  padding-left: 80px;
`;

export const DestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  z-index: 1;
`;

export const SelectTitle = styled.div`
  color: var(--color-sub300);
  font-size: 20px;
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
`;

export const SelectTitleHighlignt = styled.span`
  color: var(--color-navy);
  font-size: 25px;
  font-weight: 700;
`;

export const SelectDesc = styled.div`
  padding: 13px;
  color: var(--color-sub300);
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 115%;
`;

export const SelectContainer = styled.div<{ $isSelect?: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 17px 31px;
  width: 100%;
  min-width: 248px;
`;

export const SelectRegion = styled.div<{ $backgroundColor: string }>`
  border-radius: 9px;
  background: ${(props) => props.$backgroundColor};
  padding: 13px 17px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--color-navy);

  &:hover {
    background-color: var(--color-mint200);
  }
`;

export const RouteExploreSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VerticalLineAndCircle = styled.div`
  position: relative;
  top: 20px;
  --c: var(--color-main350);
  width: 2px;
  height: 350px;
  margin: 0 auto 50px;

  /* 아래로 갈수록 불투명해지는 선 */
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--c) 0%, transparent) 0%,
    color-mix(in srgb, var(--c) 25%, transparent) 20%,
    var(--c) 70%,
    var(--c) 100%
  );

  /* 아래 동그라미 */
  &::after {
    content: "";
    position: absolute;
    bottom: -6px; // 아래로 반지름만큼 이동
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--c);
    pointer-events: none;
  }
`;
