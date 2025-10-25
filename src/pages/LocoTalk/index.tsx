import BestGuideIcon from "@/assets/images/explore_bestloco.svg";
import * as S from "./styles";

export default function LocoTalkPage() {
  return (
    <>
    <S.Section>
      {/* 섹션 제목 */}
      <S.TitleContainer>
        <S.SubTitle>
          <img src={BestGuideIcon} alt="베스트장소아이콘" width={25} />{" "}
          답변을 기다리고 있어요
        </S.SubTitle>
      </S.TitleContainer>

      {/* 테이블 영역 */}
      <S.ContentArea>
        <S.TableContainer>
          <S.ListHeader>
            <span>No.</span>
            <span>제목</span>
            <span>답변</span>
            <span>조회수</span>
            <span>작성일</span>
          </S.ListHeader>

          <S.ListRow>
            <span>1</span>
            <S.PostLink to="/loco-talk/1">
              퇴근후 세영쌤과 쉬어갈만한 조용한 공원이 있을까요?
            </S.PostLink>
            <span>3</span>
            <span>5</span>
            <span>2025.08.10</span>
          </S.ListRow>

          <S.ListRow>
            <span>2</span>
            <S.PostLink to="/loco-talk/2">
              조세영쌤 빨리 집에가세요!!!
            </S.PostLink>
            <span>0</span>
            <span>3</span>
            <span>2025.08.10</span>
          </S.ListRow>
        </S.TableContainer>

        {/* 페이지네이션 */}
        <S.Pagination>
          <S.PageButton disabled>이전</S.PageButton>
          <S.PageNumber className="active">1</S.PageNumber>
          <S.PageNumber>2</S.PageNumber>
          <S.PageNumber>3</S.PageNumber>
          <span>...</span>
          <S.PageNumber>7</S.PageNumber>
          <S.PageNumber>8</S.PageNumber>
          <S.PageButton>다음</S.PageButton>
        </S.Pagination>
      </S.ContentArea>
</S.Section>

<S.Section>
      {/* 두 번째 섹션 */}
      <S.TitleContainer>
        <S.SubTitle>
          <img src={BestGuideIcon} alt="베스트장소아이콘" width={25} />{" "}
          답변을 확인하세요!
        </S.SubTitle>
      </S.TitleContainer>

      <S.ContentArea_1>
        <S.TableContainer>
          <S.ListHeader>
            <span>No.</span>
            <span>제목</span>
            <span>답변</span>
            <span>조회수</span>
            <span>작성일</span>
          </S.ListHeader>

          <S.ListRow>
            <span>1</span>
            <S.PostLink to="/loco-talk/3">
              홍천에 부모님과 갈만한 조용한 공원이 있을까요?
            </S.PostLink>
            <span>3</span>
            <span>5</span>
            <span>2025.08.10</span>
          </S.ListRow>

          <S.ListRow>
            <span>2</span>
            <S.PostLink to="/loco-talk/4">
              파주에 영어마을형 임진각을 가고 싶은데 차가 없는데
              어떻게 이동하는게 좋을까요?
            </S.PostLink>
            <span>0</span>
            <span>3</span>
            <span>2025.08.10</span>
          </S.ListRow>
        </S.TableContainer>

        <S.Pagination>
          <S.PageButton disabled>이전</S.PageButton>
          <S.PageNumber className="active">1</S.PageNumber>
          <S.PageNumber>2</S.PageNumber>
          <S.PageNumber>3</S.PageNumber>
          <span>...</span>
          <S.PageNumber>7</S.PageNumber>
          <S.PageNumber>8</S.PageNumber>
          <S.PageButton>다음</S.PageButton>
        </S.Pagination>
      </S.ContentArea_1>
    </S.Section>
    </>
  );
}
