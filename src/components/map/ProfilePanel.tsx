import type { MapOutletContext } from "@/types/map";
import { useOutletContext } from "react-router";
import * as S from "./styles/ProfilePanel";
import AvatarImg from "@/assets/images/avatar1.svg";
import BookMarkIcon from "@/assets/images/mini_bookmark.svg";
import RankIcon from "@/assets/images/mini_rank.svg";
import CertifiacteIcon from "@/assets/images/mini_certificate.svg";
import VoteBar from "@/components/VoteBar";
import EditIcon from "@/assets/images/edit_profile.svg";

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  return (
    <>
      <S.ProfilePanel>
        {/* 프로필 */}
        <S.ProfileImgContainer>
          <S.ProfileImg src={AvatarImg} alt="프로필이미지" />

          {/* 마이 지도에서만 마이프로필로 이동 및 프로필 수정 가능 */}
          {mapType !== "public" && (
            <S.EditWrapper to="/my-page">
              <img src={EditIcon} alt="수정아이콘" />
            </S.EditWrapper>
          )}
        </S.ProfileImgContainer>
        <div>
          <S.Nickname>닉네임</S.Nickname>
          <S.Intro>한 줄 소개 또는 상태 메시지</S.Intro>
        </div>

        {/* 사용자를 표현하는 수치들 */}
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
        <div style={{ padding: "5px 0" }} />
        <VoteBar counts={[60, 10, 30]} />
      </S.ProfilePanel>
      {/* <div>{mapType} 프로필패널</div> */}
    </>
  );
}
