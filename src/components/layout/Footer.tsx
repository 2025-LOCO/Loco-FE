import * as S from "./styles/Footer";
import LogoIcon from "@/assets/images/logo_footer.svg";
import XLogo from "@/assets/images/footer_logo_x.svg";
import InstaLogo from "@/assets/images/footer_logo_instagram.svg";
import YouTubeLogo from "@/assets/images/footer_logo_youtube.svg";
import LinkedInLogo from "@/assets/images/footer_logo_linkedin.svg";
export default function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterContents>
          <img src={LogoIcon} alt="푸터로고" width={80} height={32} />
          <S.Divider />
          <S.SocialLogoContainer>
            <img src={XLogo} alt="X로고" />
            <img src={InstaLogo} alt="인스타그램로고" />
            <img src={YouTubeLogo} alt="유튜브로고" />
            <img src={LinkedInLogo} alt="링크드인로고" />
          </S.SocialLogoContainer>
        </S.FooterContents>
      </S.FooterContainer>
    </>
  );
}
