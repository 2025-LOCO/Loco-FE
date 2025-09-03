import styled from "styled-components";

export const PlacePanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PanelTitleContainer = styled.div<{ $isSearch?: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 40px 20px 40px;
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

export const PlaceSection = styled.div`
  background-color: var(--color-mint200);
  width: calc(100% - 45px);
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding-left: 45px;
`;

export const PlaceListTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 25px;
`;

export const PlaceListTypeImg = styled.img`
  width: 17px;
`;

export const PlaceListTypeTitle = styled.div`
  color: var(--color-navy);
  font-size: 15px;
  font-weight: 700;
`;

export const PlaceContainer = styled.div`
  position: relative;
  margin-top: 15px;
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

export const PlaceItem = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 15px 0;
  margin-right: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-sub300);
  }
`;

export const PlaceImgWrapper = styled.div`
  width: 75px;
  height: 55px;

  border-radius: 8px;
  border: 1px solid var(--color-sub300);
  background-color: white;
`;

export const PlaceContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlaceTitle = styled.div`
  color: var(--color-navy);
  font-size: 13px;
  font-weight: 700;
`;

export const PlaceType = styled.div`
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
