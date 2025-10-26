import BestGuideIcon from "@/assets/images/explore_bestloco.svg";
import * as S from "./styles";
import { NoCommentPosts, Posts } from "@/data/dummy/postList";
import { useNavigate } from "react-router";

export default function LocoTalkPage() {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/loco-talk/${id}`);
  };
  return (
    <>
      <S.Section>
        {/* 섹션 제목 */}
        <S.TitleContainer>
          <S.SubTitle>
            <img src={BestGuideIcon} alt="베스트장소아이콘" width={25} /> 답변을
            기다리고 있어요
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

            {NoCommentPosts.map((post, i) => (
              <S.ListRow
                key={post.post_id}
                onClick={() => handleRowClick(post.post_id)} // ✅ 클릭 이벤트
              >
                <span>{i + 1}</span>
                <S.PostTitle>{post.title}</S.PostTitle>
                <span>0</span>
                <span>{post.views}</span>
                <span>{post.created_at}</span>
              </S.ListRow>
            ))}
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
            <img src={BestGuideIcon} alt="베스트장소아이콘" width={25} /> 답변을
            확인하세요!
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

            {Posts.map((post, i) => (
              <S.ListRow
                key={post.post_id}
                onClick={() => handleRowClick(post.post_id)} // ✅ 클릭 이벤트
              >
                <span>{i + 1}</span>
                <S.PostTitle>{post.title}</S.PostTitle>
                <span>{post.comments ? post.comments.length : 0}</span>
                <span>{post.views}</span>
                <span>{post.created_at}</span>
              </S.ListRow>
            ))}
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
