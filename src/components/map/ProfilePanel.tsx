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

  // constants
  const stats = [
    {
      iconSrc: BookMarkIcon,
      iconAlt: "담아요아이콘",
      title: "담아요",
      value: "105",
    },
    {
      iconSrc: RankIcon,
      iconAlt: "등급아이콘",
      title: "등급",
      value: "GOLD",
    },
    {
      iconSrc: CertifiacteIcon,
      iconAlt: "방문인증아이콘",
      title: "방문인증",
      value: "21",
    },
  ];

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
          {stats.map((stat) => (
            <S.StatContainer key={stat.title}>
              <S.StatTitle>
                <img src={stat.iconSrc} alt={stat.iconAlt} />
                <div>{stat.title}</div>
              </S.StatTitle>
              <S.StatValue>{stat.value}</S.StatValue>
            </S.StatContainer>
          ))}
        </S.StatsCard>
        <div style={{ padding: "5px 0" }} />

        {/* 투표결과 바 */}
        <VoteBar counts={[60, 10, 30]} />
      </S.ProfilePanel>
      {/* <div>{mapType} 프로필패널</div> */}
    </>
  );
}
