import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 20px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 170px;
  height: 250px;
  cursor: pointer;
`;

export const Title = styled.div`
  color: var(--color-navy);
  font-size: 17px;
  font-weight: 700;
`;

export const Intro = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 300;
`;
