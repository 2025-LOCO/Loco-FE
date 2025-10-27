import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from "./styles/detail";

import HeartFace from "@/assets/images/Heart-face.svg";
import SlightlyHappy from "@/assets/images/Slightly-happy.svg";
import Pleading from "@/assets/images/Pleading.svg";

import { getQnADetail } from "@/apis/qna/getQnaDetail";
import { postQnaAnswer } from "@/apis/qna/postQnaAnswer";

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [replies, setReplies] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState("최신순");
  const [selectedHearts, setSelectedHearts] = useState<Record<number, string>>(
    {}
  );
  const [newComment, setNewComment] = useState("");

  // 게시글 불러오기
  useEffect(() => {
    async function fetchQnADetail() {
      try {
        if (!id) return;
        setLoading(true);

        const data = await getQnADetail(Number(id));
        setPost(data);

        setReplies(
          data.answers?.map((ans: any, index: number) => ({
            id: ans.answer_id,
            author: ans.user_nickname || "익명",
            content: ans.content,
            createdAt: ans.created_at?.split("T")[0],
          })) ?? []
        );
      } catch (err) {
        console.error("❌ QnA 상세 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQnADetail();
  }, [id]);

  // 이모지 선택 핸들러
  const handleHeartClick = (commentId: number, emoji: string) => {
    setSelectedHearts((prev) => ({
      ...prev,
      [commentId]: emoji,
    }));
  };

  // 댓글 작성 핸들러 (서버 전송)
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !id) return;

    try {
      // 서버에 댓글 등록
      const newAnswer = await postQnaAnswer({
        question_id: Number(id),
        content: newComment.trim(),
        like: null,
      });

      // 응답값을 로컬 상태에도 반영
      const formatted = {
        id: newAnswer.answer_id,
        author: newAnswer.user_nickname,
        content: newAnswer.content,
        createdAt: newAnswer.created_at.split("T")[0],
      };

      setReplies((prev) => [formatted, ...prev]);
      setNewComment("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      alert("댓글 등록에 실패했습니다.");
    }
  };

  if (loading) return <S.PostTitle>로딩 중...</S.PostTitle>;
  if (!post)
    return (
      <S.PostDetailContainer>
        <S.PostTitle>게시글을 찾을 수 없습니다 😢</S.PostTitle>
      </S.PostDetailContainer>
    );

  return (
    <S.PostDetailContainer>
      <S.PostTitle>{post.title}</S.PostTitle>
      <S.PostContent>
        {post.content.split("\n").map((line: string, index: number) => (
          <p key={index}>{line}</p>
        ))}
      </S.PostContent>

      {/* 댓글 섹션 */}
      <S.CommentSection>
        <S.CommentHeader>
          <S.CommentCount>댓글 {replies.length}</S.CommentCount>
          <S.SortSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option>최신순</option>
            <option>인기순</option>
          </S.SortSelect>
        </S.CommentHeader>

        {/* 댓글 작성 박스 */}
        <S.CommentForm onSubmit={handleAddComment}>
          <S.CommentInput
            placeholder="댓글을 입력하세요."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <S.CommentSubmitButton type="submit">등록</S.CommentSubmitButton>
        </S.CommentForm>

        {/* 댓글 리스트 */}
        <S.CommentList>
          {replies.map((reply) => (
            <S.CommentItem key={reply.id}>
              <S.CommentContent>
                <S.CommentAuthorRow>
                  <S.CommentAuthor>{reply.author}</S.CommentAuthor>
                </S.CommentAuthorRow>

                <S.CommentBodyRow>
                  <S.CommentText>{reply.content}</S.CommentText>
                  <S.HeartContainer>
                    {[HeartFace, SlightlyHappy, Pleading].map((emoji) => (
                      <S.Emoji
                        key={emoji}
                        src={emoji}
                        alt={emoji}
                        $isSelected={selectedHearts[reply.id] === emoji}
                        onClick={() => handleHeartClick(reply.id, emoji)}
                      />
                    ))}
                  </S.HeartContainer>
                </S.CommentBodyRow>

                <S.CommentAuthorRow>
                  <S.CommentDate>{reply.createdAt}</S.CommentDate>
                </S.CommentAuthorRow>
              </S.CommentContent>
            </S.CommentItem>
          ))}
        </S.CommentList>
      </S.CommentSection>
    </S.PostDetailContainer>
  );
}
