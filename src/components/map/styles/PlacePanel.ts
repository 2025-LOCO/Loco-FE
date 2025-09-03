import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Back = styled.span`
  color: var(--color-navy);
  font-size: 10px;
  font-weight: 600;
  padding-left: 5px;
`;

export const PanelTitleContainer = styled.button<{ $isSearch?: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 40px;
  cursor: ${({ $isSearch }) => ($isSearch ? "pointer" : "")};
`;

export const PanelTitleImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const PanelTitle = styled.div`
  color: var(--color-navy);
  font-size: 20px;
  font-weight: 700;
`;

export const Section = styled.div`
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
  margin-top: 20px;
  width: 200px;
  height: 400px;
  overflow-y: auto;

  padding-right: 25px;

  /* 스크롤바*/
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 */
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-main500);
    border-radius: 9999px;
  }

  /* 스크롤바 배경*/
  &::-webkit-scrollbar-track {
    background-color: var(--color-gray);
    border-radius: 9999px;
  }

  /* 장소 리스트 아래 50px만 흐리게 */
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black calc(100% - 50px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black calc(100% - 50px),
    transparent 100%
  );
`;

export const ItemContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
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
`;

export const SearchPlaceContentsContainer = styled.div<{
  $isSelected?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: ${({ $isSelected }) => ($isSelected ? "10px" : "0")};
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

export const PlaceLocation = styled.div`
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

export const AddPlaceBtn = styled.button`
  display: flex;
  gap: 5px;
  padding-left: 60px;
  padding-top: 15px;
  cursor: pointer;

  color: var(--color-navy);
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;
