import { NavLink } from "react-router";
// import { Link, NavLink } from "react-router";
import styled from "styled-components";

export const TalkSection = styled.div`
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

export const ContentArea = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const ContentArea_1 = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const FilterBar = styled.div`
  position: relative;  /* 기준 잡기 */
  display: flex;
  justify-content: flex-end; /* SortSelect는 오른쪽으로 */
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: #E0E2EB;
  border-radius: 8px;
`;

export const FilterBar_1 = styled.div`
  position: relative;  /* 기준 잡기 */
  display: flex;
  justify-content: flex-end; /* SortSelect는 오른쪽으로 */
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: #E3F6F5;
  border-radius: 8px;
`;

export const FilterTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* 정확히 중앙 */
  color: #2D334A;
  font-family: Pretendard;
  font-size: 18px;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  margin-right: 10px; 
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
`;

export const TableContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 120px;
  padding: 12px 20px;
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
  text-align: center;
  
  span:nth-child(2) {
    text-align: left;
  }
`;

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px 80px 120px;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const PostTitle = styled.span`
  text-align: left;
  color: #333;
  cursor: pointer;
  
  &:hover {
    color: var(--color-navy);
    text-decoration: underline;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 11px;

  &:disabled {
    background-color: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: #f0f0f0;
  }
`;

export const PageNumber = styled.span`
  padding: 3px 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 11px;
  
  &.active {
    background-color: #333;
    color: white;
  }
  
  &:hover:not(.active) {
    background-color: #f0f0f0;
  }
`;
