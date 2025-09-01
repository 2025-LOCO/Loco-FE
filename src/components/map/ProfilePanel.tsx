import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import * as S from "./styles/ProfilePanel";
import AvatarImg from "@/assets/images/avatar1.svg";
import BookMarkIcon from "@/assets/images/mini_bookmark.svg";
import RankIcon from "@/assets/images/mini_rank.svg";
import CertifiacteIcon from "@/assets/images/mini_certificate.svg";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  return (
    <>
      <S.ProfilePanel>
        <S.ProfileImg src={AvatarImg} alt="프로필이미지" />
        <div>
          <S.Nickname>닉네임</S.Nickname>
          <S.Intro>한 줄 소개 또는 상태 메시지</S.Intro>
        </div>
        <S.StatsCard>
          <S.StatContainer>
            <S.StatTitle>
              <img src={BookMarkIcon} alt="담아요아이콘" />
              <div>담아요</div>
            </S.StatTitle>
            <S.StatValue>105</S.StatValue>
          </S.StatContainer>
          <S.StatContainer>
            <S.StatTitle>
              <img src={RankIcon} alt="등급아이콘" />
              <div>등급</div>
            </S.StatTitle>
            <S.StatValue>GOLD</S.StatValue>
          </S.StatContainer>
          <S.StatContainer>
            <S.StatTitle>
              <img src={CertifiacteIcon} alt="방문인증아이콘" />
              <div>방문인증</div>
            </S.StatTitle>
            <S.StatValue>21</S.StatValue>
          </S.StatContainer>
        </S.StatsCard>
        <S.VoteContainer>
          <S.VoteTitleContainer>
            <S.VoteTitle>다른 사용자들의 의견</S.VoteTitle>
            <S.VoteNum>답변 716</S.VoteNum>
          </S.VoteTitleContainer>
        </S.VoteContainer>
      </S.ProfilePanel>
      <div>{mapType} 프로필패널</div>
    </>
  );
}
