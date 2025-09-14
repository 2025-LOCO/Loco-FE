import { NavLink } from "react-router";
import styled from "styled-components";

export const FirstButton = styled(NavLink)<{ $isRecommendBtn?: boolean }>`
  color: var(--color-darknavy);
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ $isRecommendBtn }) =>
    $isRecommendBtn
      ? "color-mix(in srgb, var(--color-main350) 85%, transparent)"
      : "var(--color-mint200)"};
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

  height: 50px;
  width: 100%;
  max-width: 250px;
  margin-top: auto;
  margin-bottom: 40px;

  cursor: pointer;
`;
