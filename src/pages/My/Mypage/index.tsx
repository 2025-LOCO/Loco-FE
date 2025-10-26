import * as S from "./styles";
import ProfileImg from "@/assets/images/avatar1.svg";
import PlusIcon from "@/assets/images/plus_icon.svg";
import RankIcon from "@/assets/images/rank.svg";
import GradeIcon from "@/assets/images/grade.svg";
import PointIcon from "@/assets/images/point.svg";
import ArrowRightIcon from "@/assets/images/arrow_right.svg";
import VoteBar from "@/components/VoteBar";
import {
  getMyInformation,
  type GetMyInformationResponse,
} from "@/apis/auth/getMyInformation";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [user, setUser] = useState<GetMyInformationResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyInformation();
        setUser(data);
      } catch (err) {
        console.error("[MyPage] 유저 정보 불러오기 실패:", err);
      }
    };
    fetchData();
  }, []);

  if (!user) return <div style={{ padding: "40px" }}>로딩 중...</div>;
  return (
    <>
      <S.MypageContainer>
        <S.TownCertifyButton>
          <div>동네인증</div>
          <img src={ArrowRightIcon} alt="바로가기 아이콘" />
        </S.TownCertifyButton>
        <S.ProfileInfoSection>
          <S.ProfileContainer>
            <S.ProfileImgWrapper>
              <S.ProfileImg src={ProfileImg} alt="프로필이미지" />
              <S.PlusIcon src={PlusIcon} alt="플러스아이콘" />
            </S.ProfileImgWrapper>
            <div style={{ paddingLeft: 10 }}>
              <S.NickName>
                닉네임
                <span
                  style={{ color: "var(--color-sub300)", paddingLeft: "6px" }}
                >
                  {user.nickname || "수원왕갈비"}
                </span>
              </S.NickName>
              <S.Introduce>
                한 줄 소개
                <span
                  style={{ color: "var(--color-sub300)", paddingLeft: "6px" }}
                >
                  {user.intro || "한 줄 소개 또는 상태메시지"}
                </span>
              </S.Introduce>
            </div>
          </S.ProfileContainer>

          <S.FigureListContainer>
            <S.FigureItem>
              <img src={RankIcon} alt="랭킹아이콘" />
              <S.FigureItemName>지역랭킹</S.FigureItemName>
              <S.FigureItemNum>
                <span
                  style={{
                    color: "var(--color-navy)",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  상위
                </span>
                {user.ranking || 98}
                <span
                  style={{
                    color: "var(--color-navy)",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  %
                </span>
              </S.FigureItemNum>
            </S.FigureItem>
            <S.FigureItem>
              <img src={GradeIcon} alt="등급아이콘" />
              <S.FigureItemName>등급</S.FigureItemName>
              <S.FigureItemNum>{user.grade || "B"}</S.FigureItemNum>
            </S.FigureItem>
            <S.FigureItem>
              <img src={PointIcon} alt="포인트아이콘" />
              <S.FigureItemName>포인트</S.FigureItemName>
              <S.FigureItemNum>
                {" "}
                {user.points.toLocaleString() || "0"}
              </S.FigureItemNum>
            </S.FigureItem>
          </S.FigureListContainer>
        </S.ProfileInfoSection>
        <S.StatCardSection>
          <S.StatCardContainer>
            <S.MypageTitle>내 장소</S.MypageTitle>
            <S.StatContainer>
              <S.StatValue>
                {user.my_places_count}
                <S.StatLabel>개</S.StatLabel>
              </S.StatValue>
              <div
                style={{
                  height: "30px",
                  width: "2px",
                  backgroundColor: "var(--color-sub300)",
                  margin: "0 15px",
                }}
              ></div>
              <S.StatValue>
                <S.StatLabel>담아요 </S.StatLabel>
                {user.my_places_liked_count}
              </S.StatValue>
            </S.StatContainer>
            <VoteBar counts={[30, 40, 10]} />
          </S.StatCardContainer>
          <S.StatCardContainer>
            <S.MypageTitle>내 루트</S.MypageTitle>
            <S.StatContainer>
              <S.StatValue>
                {user.my_routes_count}
                <S.StatLabel>개</S.StatLabel>
              </S.StatValue>
              <div
                style={{
                  height: "30px",
                  width: "2px",
                  backgroundColor: "var(--color-sub300)",
                  margin: "0 15px",
                }}
              ></div>
              <S.StatValue>
                <S.StatLabel>담아요 </S.StatLabel>
                {user.my_routes_liked_count}
              </S.StatValue>
            </S.StatContainer>
            <VoteBar counts={[96, 52, 10]} />
          </S.StatCardContainer>
          <S.StatCardContainer>
            <S.MypageTitle>내 답변</S.MypageTitle>
            <S.StatContainer>
              <S.StatValue>
                {user.my_answers_count} <S.StatLabel>개</S.StatLabel>
              </S.StatValue>

              {/* <S.StatValue>
                <S.StatLabel>담아요 </S.StatLabel>1,251
              </S.StatValue> */}
            </S.StatContainer>
            <VoteBar counts={[12, 5, 1]} />
          </S.StatCardContainer>
        </S.StatCardSection>
      </S.MypageContainer>
      <div style={{ padding: "40px" }}></div>
    </>
  );
}
