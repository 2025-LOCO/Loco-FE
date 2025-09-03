import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--color-navy);
  height: 170px;
  /* margin-top: 100px; */
  padding: 40px 60px;
`;

export const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 53px;
`;

export const Divider = styled.div`
  width: 100%;
  max-width: 990px;
  flex-shrink: 1;
  height: 3px;
  background-color: var(--color-mint200);
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`;
