import * as S from "./styles";
import LogoIcon from "@/assets/images/logo_home.svg";
import CircleIcon from "@/assets/images/yellow_eclipse.svg";
import FindIcon from "@/assets/images/find_travel.svg";
import DecidedIcon from "@/assets/images/decided_travel.svg";
import AvatarImg from "@/assets/images/avatar2.svg";
import StarIcon from "@/assets/images/star.svg";
import PlusIcon from "@/assets/images/plus.svg";
import { useState } from "react";

const dummyUserData = [
  {
    id: 1,
    userName: "여행러버",
    userIntroduction: "맛집 탐방과 숨겨진 명소를 좋아해요!",
    userImg: AvatarImg,
  },
  {
    id: 2,
    userName: "로컬가이드",
    userIntroduction: "서울 골목 구석구석을 소개합니다.",
    userImg: AvatarImg,
  },
  {
    id: 3,
    userName: "바다소년",
    userIntroduction: "바다만 보면 행복한 해변 덕후",
    userImg: AvatarImg,
  },
  {
    id: 4,
    userName: "산악인",
    userIntroduction: "등산은 나의 삶, 전국 산 정복 중!",
    userImg: AvatarImg,
  },
  {
    id: 5,
    userName: "여행초보",
    userIntroduction: "이제 막 여행 시작한 초보",
    userImg: AvatarImg,
  },
  {
    id: 6,
    userName: "맛집헌터",
    userIntroduction: "전국 맛집 탐방 중!",
    userImg: AvatarImg,
  },
  {
    id: 7,
    userName: "캠핑러",
    userIntroduction: "자연 속 캠핑이 최고!",
    userImg: AvatarImg,
  },
  {
    id: 8,
    userName: "문화러버",
    userIntroduction: "전시회와 공연 덕후",
    userImg: AvatarImg,
  },
  {
    id: 9,
    userName: "도시인",
    userIntroduction: "도시 속 새로운 핫플레이스 발굴",
    userImg: AvatarImg,
  },
  {
    id: 10,
    userName: "사진가",
    userIntroduction: "여행 사진 찍는 게 취미",
    userImg: AvatarImg,
  },
];

export default function HomePage() {
  const [startUserIndex, setStartUserIndex] = useState(0);

  const handleNext = () => {
    setStartUserIndex((prev) => (prev + 1) % dummyUserData.length);
  };

  return (
    <>
      <S.MainSection>
        <S.MainContainer>
          <img src={LogoIcon} alt="logo" />
          <S.Subtitle>부제목이나 슬로건</S.Subtitle>
          <S.EmailContainer>
            <S.EmailTextInput placeholder="이메일주소@naver.com" />
            <S.EmailSubmitButton>Submit</S.EmailSubmitButton>
          </S.EmailContainer>
        </S.MainContainer>
      </S.MainSection>

      <S.DescriptSection>
        <img src={CircleIcon} alt="circle" />
        <S.DescriptText>
          '취향 맞춤형' 현지인 루트
          <span style={{ fontWeight: 300 }}>를 보여드려요 !</span>
        </S.DescriptText>
      </S.DescriptSection>

      <S.SelectSection>
        <S.SelectContainer>
          <S.SelectText>
            그려둔 여행지
            <span style={{ fontWeight: 300 }}>
              가<br /> 있으신가요?
            </span>
          </S.SelectText>
          <img src={DecidedIcon} alt="img" />
        </S.SelectContainer>
        <S.SelectContainer>
          <S.SelectText>
            설레는 여행지
            <span style={{ fontWeight: 300 }}>
              를<br /> 찾고 계신가요?
            </span>
          </S.SelectText>
          <img src={FindIcon} alt="img" />
        </S.SelectContainer>
      </S.SelectSection>

      <S.UnderLine />

      <S.BestLocoSection>
        <S.BestLocoTitle>Best 로코</S.BestLocoTitle>
        <S.BestUserListContainer>
          {/* 현재 인덱스 기준 3개 렌더링 */}
          {Array.from({ length: 3 }).map((_, i) => {
            // 길이가 3인 빈 배열 생성 -> [0,1,2]

            // index i를 사용해 dummyUserData에서 유저 가져오기
            const user =
              dummyUserData[(startUserIndex + i) % dummyUserData.length];
            return (
              <S.BestUserCard key={user.id}>
                <S.ProfileImgWrapper>
                  <S.ProfileImg src={user.userImg} alt="프로필이미지" />
                  <S.Badge src={StarIcon} alt="뱃지" />
                </S.ProfileImgWrapper>
                <S.ProfileName>{user.userName}</S.ProfileName>
                <S.ProfileIntroduction>
                  {user.userIntroduction}
                </S.ProfileIntroduction>
              </S.BestUserCard>
            );
          })}
          <S.MoreProfileListStack>
            {/* 현재 인덱스 기준 다음 3개 렌더링 */}
            {Array.from({ length: 3 }).map((_, i) => {
              const user =
                dummyUserData[(startUserIndex + 3 + i) % dummyUserData.length];
              return (
                <S.MoreProfileImg key={user.id} src={user.userImg} index={i} />
              );
            })}
            <S.MoreButton onClick={handleNext}>
              <img src={PlusIcon} alt="plus" />
            </S.MoreButton>
          </S.MoreProfileListStack>
        </S.BestUserListContainer>
      </S.BestLocoSection>
    </>
  );
}
