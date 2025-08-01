import styled from "styled-components";

export const Svg = styled.svg`
  width: 600px;
  height: 600px;
`;

export const RegionPath = styled.path<{ $fill: string }>`
  fill: ${(props) => props.$fill};
  cursor: pointer;
  transition: fill 0.3s;

  &:hover {
    fill: #ffd803;
  }
`;
