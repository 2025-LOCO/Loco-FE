import { NavLink } from "react-router";
import styled from "styled-components";

export const MapLayoutRoot = styled.div`
  position: relative;
  width: 100dvw;
  height: calc(100dvh - 86px); /*  전체 - 헤더 높이 */
  overflow: hidden;
`;

export const MapSection = styled.div`
  position: absolute;
  z-index: 0;
  background-color: var(--color-gray);
  color: white;
  width: 100%;
  height: 100%;
`;

export const MapCanvas = styled.div``;

export const OverlaySection = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
  pointer-events: none; // 오버레이는 클릭되지 않고 지도만 클릭 가능하도록
`;

export const PanelSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const LeftPanelContainer = styled.div<{ $isOpen: boolean }>`
  position: relative;
  background-color: white;
  pointer-events: auto;

  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: ${({ $isOpen }) => ($isOpen ? "hidden" : "")};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "calc(-100%)")});

  @media (max-width: 800px) {
    display: none;
  }
`;
export const TabContainer = styled.div`
  padding: 35px 40px 0 40px;
  font-size: 16px;
  font-weight: 700;
`;

export const TabItemContainer = styled.div`
  display: inline-flex;
  &:not(:last-child)::after {
    content: "ㅣ";
    margin: 0 5px;
    color: var(--color-sub300);
    pointer-events: none;
    user-select: none;
  }
`;

export const TabItem = styled(NavLink)`
  color: var(--color-sub300);

  &.active {
    color: var(--color-navy);
  }
`;

export const LeftPanelToggleBtn = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  width: 90px;
  height: 90px;
  border-radius: 50%; /* 원 */
  background: white;
  filter: drop-shadow(-3px 0 4px rgba(0, 0, 0, 0.1));
  display: inline-flex;
  cursor: pointer;
  z-index: 2;

  transform: rotate(${({ $isOpen }) => ($isOpen ? "0deg" : "180deg")});
  right: -45px; /* 반지름 */
`;

export const LeftArrowIcon = styled.img`
  width: 50px;
`;

export const LeftPanelBody = styled.div`
  height: 100%;
`;
export const RightPanelContainer = styled.div<{
  $showRightPanel: boolean;
  $isOpen: boolean;
}>`
  background-color: white;
  position: relative;
  width: 300px;
  pointer-events: auto;

  transform: translateX(
    ${(props) => (props.$showRightPanel && props.$isOpen ? "0" : "calc(100%)")}
  );

  overflow-y: auto;

  /* 스크롤바*/
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 */
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-sub200);
    border-radius: 9999px;
  }

  /* 스크롤바 배경*/
  &::-webkit-scrollbar-track {
    background-color: var(--color-gray);
    border-radius: 9999px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LocationBadge = styled.div`
  position: absolute;
  top: 30px;
  right: 330px;
  border-radius: 10px;
  background: var(--color-navy);
  padding: 11px 25px;
  width: max-content;

  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

export const PanelTitleContainer = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  cursor: pointer;
`;

export const PanelTitleImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const PanelTitle = styled.div`
  color: var(--color-navy);
  font-size: 20px;
  font-weight: 700;
`;

export const RouteInfoSection = styled.div`
  height: 285px;
  background-color: #f0faf9;
  padding: 30px 35px 25px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const RouteTitle = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
`;

export const RouteIntro = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 300;
  min-height: 80px;
`;
export const RouteTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RouteTag = styled.div`
  color: var(--color-sub300);
  font-size: 11px;
  font-weight: 400;
  line-height: 120%;
`;

export const ToggleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToggleTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f0faf9;
  padding: 15px 0;
  width: 100%;
`;

export const ToggleIconWrapper = styled.div<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? "0deg" : "180deg")});
`;

export const ToggleContentContainer = styled.div<{ $isOpen: boolean }>`
  padding: 10px 0;
  display: ${(props) => (props.$isOpen ? "" : "none")};
`;

export const ToggleRouteDetail = styled.div`
  color: black;
  font-size: 13px;
  font-weight: 600;
`;

export const PlaceTitle = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 600;
`;

export const PlaceType = styled.span`
  color: black;
  font-size: 12px;
  font-weight: 300;
`;

export const TransportationTitle = styled.div`
  color: black;
  text-align: center;
  font-size: 8px;
  font-weight: 300;
`;

// 추후 장소리스트 컴포넌트화
export const ItemListContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 200px;
  height: 300px;
  overflow-y: auto;

  padding-right: 25px;

  /* 스크롤바*/
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 */
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-main500);
    border-radius: 9999px;
  }

  /* 스크롤바 배경*/
  &::-webkit-scrollbar-track {
    background-color: var(--color-gray);
    border-radius: 9999px;
  }

  /* 장소 리스트 아래 50px만 흐리게 */
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black calc(100% - 50px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black calc(100% - 50px),
    transparent 100%
  );
`;

export const ItemContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  max-height: fit-content;
  flex: 1 1 auto;
  gap: 10px;
  cursor: pointer;
  padding: 15px 0;
  margin-right: ${({ $isSelected }) => ($isSelected ? "45px" : "10px")};
  border-radius: ${({ $isSelected }) => ($isSelected ? "12px" : "0px")};

  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--color-mint300)" : "transparent"};

  &:not(:last-child) {
    border-bottom: ${({ $isSelected }) =>
      $isSelected ? "none" : "1px solid var(--color-sub300);"};
  }
`;

export const ItemImgWrapper = styled.div`
  width: 75px;
  height: 55px;

  border-radius: 8px;
  border: 1px solid var(--color-sub300);
  background-color: white;
`;

export const ItemContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchPlaceContentsContainer = styled.div<{
  $isSelected?: boolean;
}>`
  display: flex;

  flex-direction: column;
  gap: 5px;
  padding-left: ${({ $isSelected }) => ($isSelected ? "10px" : "0")};
`;

export const ItemTitle = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 700;
`;

export const ItemType = styled.div`
  color: var(--color-navy);
  font-size: 12px;
  font-weight: 300;
`;

export const PlaceLocation = styled.div`
  color: var(--color-navy);
  font-size: 12px;
  font-weight: 300;
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

//

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  gap: 5px;
  padding-top: 15px;
`;

export const BtnWrapper = styled.div`
  cursor: pointer;
`;
