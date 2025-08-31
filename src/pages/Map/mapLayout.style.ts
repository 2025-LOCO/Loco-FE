import { NavLink } from "react-router";
import styled from "styled-components";

export const MapLayoutRoot = styled.div`
  position: relative;
  height: 100dvh;
`;

export const MapSection = styled.div`
  position: absolute;
  z-index: 0;
  background-color: var(--color-mint200);
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

export const LeftPanelContainer = styled.div`
  background-color: white;
  width: 300px;
`;
export const TabContainer = styled.div``;
export const TabItem = styled(NavLink)``;
export const LeftPanelBody = styled.div``;
export const RightPanelContainer = styled.div`
  background-color: white;
  width: 300px;
`;
