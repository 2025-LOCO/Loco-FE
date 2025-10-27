// src/pages/LocoTalk/index.tsx
import BestGuideIcon from "@/assets/images/explore_bestloco.svg";
import * as S from "./styles";
import { useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { getQnaQuestions } from "@/apis/qna/questions";
import type { QnaQuestion } from "@/apis/qna/questions";

export default function LocoTalkPage() {
  const navigate = useNavigate();

  const [items, setItems] = useState<QnaQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRowClick = (id: number) => {
    navigate(`/loco-talk/${id}`);
  };

  // 날짜 간단 포맷 (YYYY-MM-DD)
  const formatDate = (iso?: string) => (iso ? iso.slice(0, 10) : "");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await getQnaQuestions();
        // 최신 글 먼저
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        if (mounted) setItems(sorted);
      } catch (e) {
        console.error(e);
        if (mounted) setError("QnA 목록을 불러오지 못했어요.");
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // 안전하게 숫자로 비교 (문자/undefined 대비)
  const toCount = (v: unknown) => (typeof v === "number" ? v : Number(v) || 0);

  const unanswered = useMemo(
    () => items.filter((q) => toCount(q.answer_count) === 0),
    [items]
  );
  const answered = useMemo(
    () => items.filter((q) => toCount(q.answer_count) > 0),
    [items]
  );

  const goAnswered = () => {
    document.getElementById("answered-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

        <S.ContentArea>
          {isLoading && <div style={{ padding: 12 }}>불러오는 중…</div>}
          {error && (
            <div style={{ padding: 12, color: "crimson" }}>{error}</div>
          )}

          {/* 빈 상태 처리*/}
          {!isLoading && !error && unanswered.length === 0 ? (
            <EmptyState>
              <div className="emoji">🕊️</div>
              <h3>지금은 답변을 기다리는 질문이 없어요</h3>
              <p>
                새 질문이 등록되면 이곳에 표시돼요. 아래에서 최근 질문을 확인해
                보세요.
              </p>
              <div className="actions">
                <GhostButton onClick={goAnswered}>최근 질문 보기</GhostButton>
              </div>
            </EmptyState>
          ) : (
            <>
              <S.TableContainer>
                <S.ListHeader>
                  <span>No.</span>
                  <span>제목</span>
                  <span>답변</span>
                  <span>조회수</span>
                  <span>작성일</span>
                </S.ListHeader>

                {!isLoading &&
                  !error &&
                  unanswered.map((q, i) => (
                    <S.ListRow
                      key={q.question_id}
                      onClick={() => handleRowClick(q.question_id)}
                    >
                      <span>{i + 1}</span>
                      <S.PostTitle>{q.title}</S.PostTitle>
                      <span>{toCount(q.answer_count)}</span>
                      <span>{toCount(q.view_count)}</span>
                      <span>{formatDate(q.created_at)}</span>
                    </S.ListRow>
                  ))}
              </S.TableContainer>

              {/* 페이지네이션 (API 파라미터 연동 전까지는 더미 유지) */}
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
            </>
          )}
        </S.ContentArea>
      </S.Section>

      <S.Section id="answered-section">
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

            {isLoading && <div style={{ padding: 12 }}>불러오는 중…</div>}
            {error && (
              <div style={{ padding: 12, color: "crimson" }}>{error}</div>
            )}

            {!isLoading &&
              !error &&
              answered.map((q, i) => (
                <S.ListRow
                  key={q.question_id}
                  onClick={() => handleRowClick(q.question_id)}
                >
                  <span>{i + 1}</span>
                  <S.PostTitle>{q.title}</S.PostTitle>
                  <span>{toCount(q.answer_count)}</span>
                  <span>{toCount(q.view_count)}</span>
                  <span>{formatDate(q.created_at)}</span>
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

/* ---------------- Empty UI 전용 스타일 (이 파일 안에 정의) ---------------- */
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 48px 16px;
  border: 1px dashed #e6e6e6;
  border-radius: 12px;
  background: #fafafa;
  text-align: center;

  .emoji {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 6px;
  }
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #222;
  }
  p {
    margin: 0;
    color: #666;
  }
  .actions {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
`;

const GhostButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  color: #444;
`;
