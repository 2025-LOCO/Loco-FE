import { NavLink } from "react-router";
import styled from "styled-components";

export const ExploreSection = styled.div`
  padding: 60px 87px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LocationIntroduce = styled.span`
  color: var(--color-sub400);
  font-size: 15px;
  font-weight: 300;
  padding-left: 20px;
`;

export const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 700;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 50px;
`;

export const TabItem = styled(NavLink)`
  border: 1px solid var(--color-sub300);
  border-radius: 8px;
  padding: 6px 9px;

  color: var(--color-sub300);
  font-size: 14px;
  font-weight: 400;

  cursor: pointer;

  &.active {
    color: white;
    background-color: var(--color-darknavy);
    border: 1px solid var(--color-darknavy);
  }
`;

export const LocalEventSection = styled.div`
  width: 100%;
  background-color: var(--color-mint200);
`;
