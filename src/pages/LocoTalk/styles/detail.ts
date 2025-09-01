import { NavLink } from "react-router";
import styled from "styled-components";

/* 기존 스타일들 그대로 */
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
  text-decoration: none;

  &.active {
    color: white;
    background-color: var(--color-darknavy);
    border: 1px solid var(--color-darknavy);
  }
`;

export const PostDetailContainer = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 40px;
  margin: 20px 87px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.4;
`;

export const PostContent = styled.div`
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 50px;

  p {
    margin-bottom: 8px;
  }
`;

export const CommentSection = styled.div`
  border-top: 1px solid #f0f0f0;
  padding-top: 30px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentCount = styled.div`
  background-color: #e8f4f4;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const SortSelect = styled.select`
  padding: 6px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  font-size: 13px;
  color: #666;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 20px; /* 스크롤바와 이모티콘 사이 여백 */

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffd23f;
    border-radius: 3px;
  }
`;

export const CommentItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const CommentNumber = styled.div`
  width: 30px;
  flex-shrink: 0;
  font-size: 14px;
  color: #999;
  margin-right: 20px;
`;

export const CommentContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* 작성자 + 날짜 */
export const CommentAuthorRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right:10px;
  margin-left: 5px;
`;

export const CommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: 8px;
`;

export const CommentBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 이모지를 항상 위쪽에 맞춤 */
  gap: 10px;
  margin-left: 5px;
  margin-right:10px;
`;

export const CommentText = styled.div`
  flex: 1; /* 남은 공간 다 차지 */
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-right: 12px; /* 이모지와 간격 */
  word-break: break-word; /* 긴 단어 줄바꿈 */
`;

export const HeartContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-start; /* 항상 위쪽에 고정 */
  flex-shrink: 0; /* 이모지 영역 줄어들지 않음 */
`;

/* 수정된 Emoji 스타일 */
export const Emoji = styled.img<{ $isSelected: boolean }>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* 브라우저 기본 포커스 제거 */
  outline: none;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  /* 선택 상태 */
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.5)};
  filter: ${({ $isSelected }) => ($isSelected ? "none" : "grayscale(100%)")};

  /* 선택된 이모지만 hover 확대 */
  ${({ $isSelected }) =>
    $isSelected &&
    `
    &:hover {
      transform: scale(1.1);
    }
  `}
`;
