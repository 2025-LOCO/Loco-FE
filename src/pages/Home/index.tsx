import * as S from "./styles";
import LogoIcon from "@/assets/images/logo_home.svg";
import CircleIcon from "@/assets/images/yellow_eclipse.svg";
import FindIcon from "@/assets/images/find_travel.svg";
import DecidedIcon from "@/assets/images/decided_travel.svg";

export default function HomePage() {

  return (
    <>
      <S.MainSection>
        <S.MainContainer>
          <img src={LogoIcon} alt="logo" />
          <S.Subtitle>광고에 지친 당신을 위한, 진짜 여행 정보</S.Subtitle>
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


    </>
  );
}
