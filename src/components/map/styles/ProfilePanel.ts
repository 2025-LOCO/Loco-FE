import { Link } from "react-router";
import styled from "styled-components";

export const ProfilePanel = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
  flex-direction: column;
`;

export const ProfileImg = styled.img``;

export const ProfileImgContainer = styled.div`
  position: relative;
  width: 135px;
  height: 135px;
`;

export const EditWrapper = styled(Link)`
  position: absolute;
  bottom: -8px;
  right: 0;

  cursor: pointer;
`;

export const Nickname = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const Intro = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 300;
`;

export const StatsCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 63px;

  border-radius: 10px;
  border: 1px solid white;
  background: var(--color-navy);
`;

export const StatContainer = styled.div`
  color: white;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
`;

export const StatTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const StatValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding-top: 5px;
`;
