import styled from "styled-components";

// 현재는 루트만 사용, props는 다 필요 없음

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PanelTitleContainer = styled.button<{ $isTravelMap?: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 40px;
  /* padding: 20px 40px 0; // 바뀜 */
  width: 100%;
  cursor: ${({ $isTravelMap }) => ($isTravelMap ? "pointer" : "")};
`;

export const PanelTitleImg = styled.img<{ $isOpened?: boolean }>`
  width: 20px;
  height: 20px;
  transform: ${({ $isOpened }) => ($isOpened ? "rotate(180deg)" : "")};
`;

export const PanelTitle = styled.div`
  color: var(--color-navy);
  font-size: 20px;
  font-weight: 700;
`;

export const ItemListSection = styled.div`
  background-color: var(--color-mint200);
  width: calc(100% - 45px);
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding-left: 45px;
`;

export const ItemListTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 25px;
`;

export const ItemListTypeImg = styled.img`
  width: 17px;
`;

export const ItemListTypeTitle = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 700;
`;

export const ItemListContainer = styled.div`
  position: relative;
  /* margin-top: 20px; */
  width: 200px;
  height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;

  padding-right: 25px;

  /* 스크롤바*/
  &::-webkit-scrollbar {
    width: 6px;
    height: 300px;
  }

  /* 스크롤바 막대 */
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-main500);
    border-radius: 9999px;
    height: 30%;
  }

  /* 스크롤바 배경*/
  &::-webkit-scrollbar-track {
    background-color: var(--color-gray);
    border-radius: 9999px;
  }

  /* 장소 리스트 아래 50px만 흐리게 */
  -webkit-mask-image: linear-gradient(
    to bottom,
    white 0%,
    white calc(100% - 50px),
    transparent 0%
  );
  mask-image: linear-gradient(
    to bottom,
    white 0%,
    white calc(100% - 50px),
    transparent 90%
  );
  // transparent 바뀜 100->90
`;

export const ItemContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: column; // 추가됨
  gap: 10px;
  cursor: pointer;
  padding: 15px 0;
  margin-right: ${({ $isSelected }) => ($isSelected ? "45px" : "10px")};
  border-radius: ${({ $isSelected }) => ($isSelected ? "12px" : "0px")};

  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--color-mint300)" : "transparent"};

  &:not(:last-child) {
    border-bottom: ${({ $isSelected }) =>
      $isSelected ? "none" : "1px solid var(--color-sub300);"};
  }
`;

export const ItemImgWrapper = styled.div`
  width: 75px;
  height: 55px;

  border-radius: 8px;
  border: 1px solid var(--color-sub300);
  background-color: white;
`;

export const ItemContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100px;
`;

export const ItemTitle = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 700;
`;

export const ItemType = styled.div`
  color: var(--color-navy);
  font-size: 12px;
  font-weight: 300;
`;

export const LikedContainer = styled.div`
  display: inline-flex;
  gap: 5px;
`;

export const LikedNum = styled.div`
  color: #484f56;
  font-size: 13px;
  font-weight: 600;
`;
