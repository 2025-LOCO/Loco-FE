import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #e3f6f5;
  padding: 119px 503px;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  padding: 33px 47px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Subtitle = styled.div`
  display: flex;
  height: 58px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;

  color: #4e567e;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
`;

export const EmailContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const EmailTextInput = styled.input`
  background-color: #fff;
  border-radius: 9px;
  width: 250px;
  height: 40px;
  /* line-height: 1; */
  padding: 0px 15px;
  display: flex;
  align-items: center;
`;

export const EmailSubmitButton = styled.button`
  background-color: #bae8e8;
  border-radius: 9px;
  display: flex;
  width: 79px;
  height: 40px;
  padding: 0px 13px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: #2d334a;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
`;

export const DescriptSection = styled.div`
  height: 311px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const DescriptText = styled.div`
  color: #2d334a;

  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SelectSection = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
`;

export const SelectContainer = styled.div`
  padding: 76px 63px;
  background-color: #e3f6f5;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  cursor: pointer;

  display: flex;
  gap: 40px;
  align-items: center;
`;

export const SelectText = styled.div`
  color: #2d334a;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UnderLine = styled.div`
  margin: 155px 60px 0px 60px;
  border-bottom: 3px solid #2d334a;
`;

export const BestLocoSection = styled.div`
  padding-bottom: 14px;
  padding-left: 60px;
  padding-right: 60px;
`;

export const BestLocoTitle = styled.div`
  padding: 20px 0px;

  color: #2d334a;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BestUserListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
`;

export const BestUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfileImgWrapper = styled.div`
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const Badge = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 43px;
  height: 43px;
`;

export const ProfileName = styled.div`
  padding-top: 27px;
  color: #2d334a;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
export const ProfileIntroduction = styled.div`
  color: #2d334a;

  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  max-width: 130px;
`;

export const MoreProfileListStack = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const MoreProfileImg = styled.img<{ index: number }>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: relative;
  z-index: ${({ index }) => 10 - index}; // index가 증가할수록 z-index 감소
  margin-left: ${({ index }) =>
    index === 0 ? 0 : "-30px"}; // 이미지가 겹치도록 음수 마진
`;

export const MoreButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e3f6f5;
  margin-left: 20px;
  cursor: pointer;
`;
