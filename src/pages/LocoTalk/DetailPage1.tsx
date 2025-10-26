// import { useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import * as S from "./styles/detail1";
// import LocationDropDown from "@/components/LocationDropDown";
// import Divider from "@/components/Divider";

// // 이모지 이미지 import
// import HeartFace from "@/assets/images/Heart-face.svg";
// import SlightlyHappy from "@/assets/images/Slightly-happy.svg";
// import Pleading from "@/assets/images/Pleading.svg";

// export default function PostDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [sortOrder, setSortOrder] = useState("최신순");
//   const [selectedHearts, setSelectedHearts] = useState<Record<number, string>>({});

//   const TabMenus = [
//     { name: "로코지기", to: "loco-guide" },
//     { name: "로코장소", to: "loco-place" },
//     { name: "로코루트", to: "loco-route" },
//     { name: "로코문답", to: "/loco-talk" },
//   ];

//   // 임시 데이터 (실제로는 API에서 가져올 데이터)
//   const postData = {
//     id: 1,
//     title: "청주에 돗자리 펴고 있을 수 있는 공원 있을까요?",
//     content: `여행가는날 일찍 도착할 것 같아서요 돗자리 펴고 한강처럼 좋을 수 있는 공원이 있을 까요?
// 렌트는 안할 예정이어서 자전거나 버스로 이동할 수 있는 공원이면 좋겠어요!`,
//     author: "작성자",
//     createdAt: "2025.08.10",
//     views: 5,
//     replies: [],
//   };

//   const replies = [
//     {
//       id: 1,
//       author: "수원지기",
//       content: "북부시 근처에 000 공원이 있는데 , 다른곳보다 여기가 돗자리 펴고 놀기 좋아요! 그리고 버스랑 자전거로도 갈 수 있는 거리입니다.!",
//       createdAt: "2025.08.10",
//     },
//     {
//       id: 2,
//       author: "진또배기",
//       content: "저는 사거리 옆에 00 공원을 추천해요. 교통은 자전거 버스 다 가능하고 공원이 비교적 한산해서 편하게 쉬었다가기 좋아요!",
//       createdAt: "2025.08.10",
//     },
//     { id: 3, author: "사용자3", content: "추가 댓글 내용입니다.", createdAt: "2025.08.10" },
//     { id: 4, author: "사용자4", content: "또 다른 댓글입니다.", createdAt: "2025.08.10" },
//     { id: 5, author: "사용자5", content: "마지막 댓글입니다.", createdAt: "2025.08.10" },
//   ];

//   // 이모지 선택 핸들러
//   const handleHeartClick = (commentId: number, emoji: string) => {
//   setSelectedHearts((prev) => ({
//     ...prev,
//     [commentId]: emoji,
//   }));
// };


//   return (
//     <S.TalkSection>
//       {/* 헤더 섹션 */}
//       <div>
//         <LocationDropDown />
//         <S.LocationIntroduce>지역에 대한 한 줄 설명</S.LocationIntroduce>
//       </div>
//       <S.Title>로코 문답</S.Title>

//       {/* 네비게이션 탭 */}
//       <S.TabContainer>
//         {TabMenus.map((tabMenu) => (
//           <S.TabItem to={tabMenu.to} key={tabMenu.name}>
//             {tabMenu.name}
//           </S.TabItem>
//         ))}
//       </S.TabContainer>

//       <Divider
//         height="1px"
//         backgroundColor="color-mix(in srgb, var(--color-navy) 30%, white);"
//         maxWidth="100%"
//       />

//       {/* 게시글 상세 내용 */}
//       <S.PostDetailContainer>
//         <S.PostTitle>{postData.title}</S.PostTitle>
//         <S.PostContent>
//           {postData.content.split("\n").map((line, index) => (
//             <p key={index}>{line}</p>
//           ))}
//         </S.PostContent>

//         {/* 댓글 섹션 */}
//         <S.CommentSection>
//           <S.CommentHeader>
//             <S.CommentCount>댓글</S.CommentCount>
//             <S.SortSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//               <option>최신순</option>
//               <option>인기순</option>
//             </S.SortSelect>
//           </S.CommentHeader>

//           <S.CommentList>
//             {replies.map((reply) => (
//                 <S.CommentItem key={reply.id}>
//                    <S.CommentContent>
//                    {/* 작성자 + 날짜 */}
//                     <S.CommentAuthorRow>
//                         <S.CommentAuthor>{reply.author}</S.CommentAuthor>
//                     </S.CommentAuthorRow>

//                    {/* 댓글 내용 + 이모지 */}
//                        <S.CommentBodyRow>
//                          <S.CommentText>{reply.content}</S.CommentText>
//                          <S.HeartContainer>
//                            {[HeartFace, SlightlyHappy, Pleading].map((emoji) => (
//                              <S.Emoji
//                              key={emoji}
//                              src={emoji}
//                              alt={emoji}
//                              $isSelected={selectedHearts[reply.id] === emoji}
//                              onClick={() => handleHeartClick(reply.id, emoji)}
//                              />
//                            ))}
//                          </S.HeartContainer>
//                         </S.CommentBodyRow>
//                           <S.CommentAuthorRow> 
//                             <S.CommentDate>{reply.createdAt}</S.CommentDate>
//                          </S.CommentAuthorRow>
//                     </S.CommentContent>
//                  </S.CommentItem>
//               ))}
//           </S.CommentList>
//         </S.CommentSection>
//       </S.PostDetailContainer>
//     </S.TalkSection>
//   );
// }
