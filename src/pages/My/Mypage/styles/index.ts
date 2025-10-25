import styled from "styled-components";

export const MypageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1145px;
`;
export const MypageTitle = styled.div`
  color: var(--color-navy);
  font-size: 20px;
  font-weight: 700;
`;

export const TownCertifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--color-navy);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ProfileInfoSection = styled.div`
  display: grid;
  grid-template-columns: 445fr 700fr; /* 왼쪽:오른쪽 = 445:700 */
  border: 2px solid var(--color-navy);
  border-radius: 12px;
  overflow: hidden; /* 왼쪽 배경을 둥근 모서리에 맞게 잘라줌 */
  background: #fff;
`;

export const ProfileContainer = styled.div`
  background-color: var(--color-navy);
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProfileImgWrapper = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  margin-left: 44px;
  margin-right: 20px;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
`;

export const PlusIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 27px;
  height: 27px;
`;
export const FigureListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const FigureItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-sub300);
  font-size: 20px;
  font-weight: 600;

  border-right: 2px solid var(--color-sub300);
  padding-right: 60px;
  margin: 48px 0;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;
export const FigureItemName = styled.div`
  padding-top: 7px;
  padding-bottom: 12px;
`;
export const FigureItemNum = styled.div`
  color: var(--color-navy);
  text-align: center;
  font-size: 35px;
  font-weight: 700;
`;
export const NickName = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 15px;
`;
export const Introduce = styled.div`
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`;

export const StatCardSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const StatCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 7.618px;
  background: rgba(224, 226, 235, 0.5);
  width: 260px;
  padding: 35px;
`;

export const StatContainer = styled.div`
  display: flex;
  color: #4e567e;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
`;

export const StatValue = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
