import styled from "styled-components";

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImgWrapper = styled.div<{ $hasImg: boolean }>`
  position: relative;
  width: 170px;
  height: 110px;
  border-radius: 8px;
  border: 2px solid var(--color-sub200);
  margin-bottom: 20px;
`;
