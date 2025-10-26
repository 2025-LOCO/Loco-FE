import { useState } from "react";
import { useParams } from "react-router";
import * as S from "./styles/detail";

type ReplyType = {
  id: number;
  user_id: number;
  user_name: string;
  content: string;
  react: string;
  created_at: string;
};

// 이모지 이미지 import
import HeartFace from "@/assets/images/Heart-face.svg";
import SlightlyHappy from "@/assets/images/Slightly-happy.svg";
import Pleading from "@/assets/images/Pleading.svg";

// ✅ 더미데이터 import
import { Posts, NoCommentPosts } from "@/data/dummy/postList";

export default function DetailPage() {
  const { id } = useParams();
  const [sortOrder, setSortOrder] = useState("최신순");
  const [selectedHearts, setSelectedHearts] = useState<Record<number, string>>(
    {}
  );
  const [newComment, setNewComment] = useState("");

  // ✅ 게시글 데이터 가져오기
  const allPosts = [...Posts, ...NoCommentPosts];
  const post = allPosts.find((p) => p.post_id === Number(id));

  // ✅ 댓글 초기값
  const [replies, setReplies] = useState<ReplyType[]>(
    post?.comments
      ? post.comments.map((c, index) => ({
          id: index + 1,
          user_id: c.user_id,
          user_name: c.user_name,
          content: c.content,
          react: c.react,
          created_at: c.created_at,
        }))
      : []
  );

  // ✅ 이모지 선택 핸들러
  const handleHeartClick = (commentId: number, emoji: string) => {
    setSelectedHearts((prev) => ({
      ...prev,
      [commentId]: emoji,
    }));
  };

  // ✅ 댓글 작성 핸들러 (Posts 구조에 맞게)
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newReply = {
      id: replies.length + 1,
      user_id: Math.floor(Math.random() * 10000),
      user_name: "익명 로코",
      content: newComment.trim(),
      react: "real",
      created_at: new Date().toISOString().split("T")[0],
    };

    setReplies((prev) => [newReply, ...prev]);
    setNewComment("");
  };

  // ✅ 게시글이 없을 경우 예외 처리
  if (!post) {
    return (
      <S.PostDetailContainer>
        <S.PostTitle>게시글을 찾을 수 없습니다 😢</S.PostTitle>
      </S.PostDetailContainer>
    );
  }

  return (
    <>
      <S.PostDetailContainer>
        {/* 게시글 제목 및 본문 */}
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostContent>
          {post.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </S.PostContent>

        {/* ✅ 댓글 섹션 */}
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

          {/* ✅ 댓글 작성 박스 */}
          <S.CommentForm onSubmit={handleAddComment}>
            <S.CommentInput
              placeholder="댓글을 입력하세요."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <S.CommentSubmitButton type="submit">등록</S.CommentSubmitButton>
          </S.CommentForm>

          {/* ✅ 댓글 리스트 */}
          <S.CommentList>
            {replies.map((reply) => (
              <S.CommentItem key={reply.id}>
                <S.CommentContent>
                  {/* 작성자 */}
                  <S.CommentAuthorRow>
                    <S.CommentAuthor>{reply.user_name}</S.CommentAuthor>
                  </S.CommentAuthorRow>

                  {/* 본문 + 이모지 */}
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

                  {/* 날짜 */}
                  <S.CommentAuthorRow>
                    <S.CommentDate>{reply.created_at}</S.CommentDate>
                  </S.CommentAuthorRow>
                </S.CommentContent>
              </S.CommentItem>
            ))}
          </S.CommentList>
        </S.CommentSection>
      </S.PostDetailContainer>
    </>
  );
}
