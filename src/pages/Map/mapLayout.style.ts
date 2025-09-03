import { NavLink } from "react-router";
import styled from "styled-components";

export const MapLayoutRoot = styled.div`
  position: relative;
  height: calc(100dvh - 90px);
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

  width: 300px;
  height: 100%;
  overflow: ${({ $isOpen }) => ($isOpen ? "hidden" : "")};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "calc(-100%)")});

  @media (max-width: 800px) {
    display: none;
  }
`;
export const TabContainer = styled.div`
  padding: 35px 40px 20px 40px;
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
export const RightPanelContainer = styled.div<{ $showRightPanel: boolean }>`
  background-color: white;
  position: relative;
  width: 300px;

  transform: translateX(
    ${({ $showRightPanel }) => ($showRightPanel ? "0" : "calc(100%)")}
  );

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LocationBadge = styled.div`
  position: absolute;
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
