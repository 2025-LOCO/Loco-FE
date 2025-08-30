import * as S from "./styles";
import ProfileImg from "@/assets/images/avatar1.svg";
import PlusIcon from "@/assets/images/plus_icon.svg";
import RankIcon from "@/assets/images/rank.svg";
import GradeIcon from "@/assets/images/grade.svg";
import PointIcon from "@/assets/images/point.svg";

export default function MyPage() {
  return (
    <>
      <S.MypageContainer>
        <S.ProfileInfoSection>
          <S.ProfileContainer>
            <S.ProfileImgWrapper>
              <S.ProfileImg src={ProfileImg} alt="프로필이미지" />
              <S.PlusIcon src={PlusIcon} alt="플러스아이콘" />
            </S.ProfileImgWrapper>
            <div>
              <S.NickName>
                닉네임
                <span
                  style={{ color: "var(--color-sub300)", paddingLeft: "6px" }}
                >
                  수원 왕갈비
                </span>
              </S.NickName>
              <S.Introduce>
                한 줄 소개
                <span
                  style={{ color: "var(--color-sub300)", paddingLeft: "6px" }}
                >
                  한 줄 소개 또는 상태메시지
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
                12
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
              <S.FigureItemNum>B</S.FigureItemNum>
            </S.FigureItem>
            <S.FigureItem>
              <img src={PointIcon} alt="포인트아이콘" />
              <S.FigureItemName>포인트</S.FigureItemName>
              <S.FigureItemNum>100,000</S.FigureItemNum>
            </S.FigureItem>
          </S.FigureListContainer>
        </S.ProfileInfoSection>
        <S.MypageTitle>내 장소</S.MypageTitle>
      </S.MypageContainer>
    </>
  );
}
