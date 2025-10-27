import { useEffect, useState } from "react";
import type { MapOutletContext } from "@/types/map";
import { useOutletContext, useParams } from "react-router";
import * as S from "./styles/ProfilePanel";
import AvatarImg from "@/assets/images/avatar1.svg";
import BookMarkIcon from "@/assets/images/mini_bookmark.svg";
import RankIcon from "@/assets/images/mini_rank.svg";
import CertifiacteIcon from "@/assets/images/mini_certificate.svg";
import VoteBar from "@/components/VoteBar";
import EditIcon from "@/assets/images/edit_profile.svg";
import { useAuthStore } from "@/stores/authStore";
import { getUserProfile } from "@/apis/auth/getUserProfile";

interface UserProfile {
  id: number;
  nickname: string;
  city_name: string;
  intro: string;
  avatar_url: string;
  created_at: string;
  ranking: number;
  points: number;
  grade: string;
  ranking_percentile: number;
  liked: number;
}

export default function ProfilePanel() {
  const context = useOutletContext<MapOutletContext>();
  const { mapType } = context;
  const { user_id } = useParams();
  const myId = useAuthStore((s) => s.userId);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const isMyProfile = mapType !== "public" || Number(user_id) === Number(myId);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const id = isMyProfile ? myId : Number(user_id);
        if (!id) return;
        const data = await getUserProfile(id);
        setProfile(data);
      } catch (err) {
        console.error("프로필 정보 불러오기 실패:", err);
      }
    }
    fetchProfile();
  }, [user_id, isMyProfile, myId]);

  if (!profile) return <div>프로필 정보를 불러오는 중입니다...</div>;

  const stats = [
    {
      iconSrc: BookMarkIcon,
      iconAlt: "담아요아이콘",
      title: "담아요",
      value: profile.liked,
    },
    {
      iconSrc: RankIcon,
      iconAlt: "등급아이콘",
      title: "등급",
      value: profile.grade,
    },
    {
      iconSrc: CertifiacteIcon,
      iconAlt: "포인트아이콘",
      title: "포인트",
      value: profile.points,
    },
  ];

  return (
    <S.ProfilePanel>
      <S.ProfileImgContainer>
        <S.ProfileImg
          src={profile.avatar_url || AvatarImg}
          alt="프로필이미지"
        />
        {isMyProfile && (
          <S.EditWrapper to="/my-page">
            <img src={EditIcon} alt="수정아이콘" />
          </S.EditWrapper>
        )}
      </S.ProfileImgContainer>

      <div>
        <S.Nickname>{profile.nickname}</S.Nickname>
        <S.Intro>{profile.intro || "한 줄 소개가 없습니다."}</S.Intro>
      </div>

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
      <VoteBar counts={[32, 52, 10]} />
    </S.ProfilePanel>
  );
}
