import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from "./styles/detail";

// 이모지 이미지 import
import HeartFace from "@/assets/images/Heart-face.svg";
import SlightlyHappy from "@/assets/images/Slightly-happy.svg";
import Pleading from "@/assets/images/Pleading.svg";
import { getQnADetail } from "@/apis/qna/getQnaDetail";

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

  // ✅ 게시글 불러오기
  useEffect(() => {
    async function fetchQnADetail() {
      try {
        if (!id) return;
        setLoading(true);

        const data = await getQnADetail(Number(id));

        setPost(data);
        // answers 배열이 있다면 댓글 리스트로 설정
        setReplies(
          data.answers?.map((ans: any, index: number) => ({
            id: index + 1,
            author: ans.user_name || "익명",
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

  // 댓글 작성 핸들러 (임시 클라이언트만 추가)
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newReply = {
      id: replies.length + 1,
      author: "익명 로코",
      content: newComment.trim(),
      createdAt: new Date().toISOString().split("T")[0],
    };

    setReplies((prev) => [newReply, ...prev]);
    setNewComment("");
  };

  if (loading) return <S.PostTitle>로딩 중...</S.PostTitle>;

  if (!post) {
    return (
      <S.PostDetailContainer>
        <S.PostTitle>게시글을 찾을 수 없습니다 😢</S.PostTitle>
      </S.PostDetailContainer>
    );
  }

  return (
    <S.PostDetailContainer>
      {/* 제목 및 본문 */}
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
