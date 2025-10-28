import { Link, NavLink } from "react-router";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #fff;
  padding: 15px 60px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  padding: 10px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
`;

export const MenuItem = styled(NavLink)`
  color: #272343;
  padding: 8px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  &.active {
    background-color: #e0e2eb;
  }
`;

export const LoginContainer = styled.div`
  margin-left: 60px;
  display: flex;
  gap: 12px;
`;

export const LoginButton = styled(Link)`
  background-color: #bae8e8;
  color: #272343;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 650px) {
    padding: 8px 8px;
  }
`;

export const SignUpButton = styled(Link)`
  background-color: #2d334a;
  color: #f5f5f5;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 650px) {
    padding: 8px 8px;
  }
`;

export const MyContainer = styled.div`
  margin-left: 60px;
  display: flex;
`;

export const MyItem = styled(NavLink)`
  color: #7a7a7a;
  padding: 8px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  &.active {
    background-color: var(--color-sub100);
    color: #272343;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: var(--color-navy);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  transition: color 0.2s;

  &:hover {
    color: var(--color-blue);
  }
`;
