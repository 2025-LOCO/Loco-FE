import { useState } from "react";
import { useParams } from "react-router";
import * as S from "./styles/detail";

// 이모지 이미지 import
import HeartFace from "@/assets/images/Heart-face.svg";
import SlightlyHappy from "@/assets/images/Slightly-happy.svg";
import Pleading from "@/assets/images/Pleading.svg";

export default function DetailPage() {
  const { id } = useParams();
  const [sortOrder, setSortOrder] = useState("최신순");
  const [selectedHearts, setSelectedHearts] = useState<Record<number, string>>(
    {}
  );
  const [newComment, setNewComment] = useState(""); // ✅ 댓글 입력 상태
  const [replies, setReplies] = useState([
    {
      id: 1,
      author: "수원지기",
      content:
        "북부시 근처에 000 공원이 있는데 , 다른곳보다 여기가 돗자리 펴고 놀기 좋아요! 그리고 버스랑 자전거로도 갈 수 있는 거리입니다.!",
      createdAt: "2025.08.10",
    },
    {
      id: 2,
      author: "진또배기",
      content:
        "저는 사거리 옆에 00 공원을 추천해요. 교통은 자전거 버스 다 가능하고 공원이 비교적 한산해서 편하게 쉬었다가기 좋아요!",
      createdAt: "2025.08.10",
    },
  ]);

  // ✅ 게시글 더미 데이터
  const postData = {
    id: Number(id),
    title: "청주에 돗자리 펴고 있을 수 있는 공원 있을까요?",
    content: `여행가는날 일찍 도착할 것 같아서요 돗자리 펴고 한강처럼 좋을 수 있는 공원이 있을 까요?
렌트는 안할 예정이어서 자전거나 버스로 이동할 수 있는 공원이면 좋겠어요!`,
    author: "작성자",
    createdAt: "2025.08.10",
    views: 5,
  };

  // ✅ 이모지 선택 핸들러
  const handleHeartClick = (commentId: number, emoji: string) => {
    setSelectedHearts((prev) => ({
      ...prev,
      [commentId]: emoji,
    }));
  };

  // ✅ 댓글 작성 핸들러
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

  return (
    <>
      {/* ✅ TalkLayout이 공통 헤더를 렌더링하므로 이 컴포넌트는 본문만 렌더링 */}
      <S.PostDetailContainer>
        {/* 게시글 제목 및 본문 */}
        <S.PostTitle>{postData.title}</S.PostTitle>
        <S.PostContent>
          {postData.content.split("\n").map((line, index) => (
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
                    <S.CommentAuthor>{reply.author}</S.CommentAuthor>
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
                    <S.CommentDate>{reply.createdAt}</S.CommentDate>
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
