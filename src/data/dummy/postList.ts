export const Posts = [
  {
    user_id: 1,
    user_name: "로코러버",
    post_id: 1,
    created_at: "2025.08.10",
    title: "청주에 돗자리 펴고 있을 수 있는 공원 있을까요?",
    content:
      "요즘 날씨가 좋아서 돗자리 펴고 쉴만한 공원을 찾고 있어요! 혹시 청주에 그런 곳 있나요?",
    views: 58,
    comments: [
      {
        user_id: 2,
        user_name: "가이드 정",
        content: "문암생태공원 추천드려요! 잔디도 넓고 돗자리 펴기 좋아요.",
        react: "real",
        created_at: "2025.08.11",
      },
      {
        user_id: 3,
        user_name: "청주사랑",
        content: "무심천 근처도 산책 겸 돗자리 피기 괜찮아요!",
        react: "soso",
        created_at: "2025.08.11",
      },
      {
        user_id: 4,
        user_name: "로코사랑",
        content: "날씨만 괜찮으면 청남대도 좋아요 😄",
        react: "real",
        created_at: "2025.08.12",
      },
    ],
  },
  {
    user_id: 5,
    user_name: "맛집탐방",
    post_id: 2,
    created_at: "2025.08.12",
    title: "홍천에 부모님과 갈만한 조용한 공원이 있을까요?",
    content:
      "사람이 너무 붐비지 않고 조용한 분위기의 공원을 찾고 있습니다. 추천 부탁드려요!",
    views: 35,
    comments: [
      {
        user_id: 6,
        user_name: "홍천가이드",
        content: "삼봉자연휴양림이나 은행나무숲 가보세요. 한적하고 예뻐요.",
        react: "real",
        created_at: "2025.08.13",
      },
    ],
  },
  {
    user_id: 7,
    user_name: "로드트리비",
    post_id: 3,
    created_at: "2025.08.13",
    title: "파주 영어마을 임진각 이동 방법 추천 부탁드려요!",
    content:
      "자가용이 없는데 대중교통으로 가는 게 괜찮을까요? 버스 노선이 복잡해서 고민 중입니다.",
    views: 72,
    comments: [
      {
        user_id: 8,
        user_name: "파주현지인",
        content: "합정에서 900번 버스 타면 바로 갑니다!",
        react: "real",
        created_at: "2025.08.14",
      },
      {
        user_id: 9,
        user_name: "서울여행자",
        content: "임진각역에서 도보 10분이에요.",
        react: "soso",
        created_at: "2025.08.14",
      },
    ],
  },
];

export const NoCommentPosts = [
  {
    user_id: 10,
    user_name: "여행가",
    post_id: 4,
    created_at: "2025.08.14",
    title: "여수 야경 볼만한 포인트 있을까요?",
    content: "낮에는 오동도 갈 거고, 밤에는 야경 명소를 알고 싶어요!",
    views: 44,
    comments: [],
  },
  {
    user_id: 11,
    user_name: "트래블러",
    post_id: 5,
    created_at: "2025.08.15",
    title: "대전 성심당 말고 숨은 맛집 있을까요?",
    content:
      "성심당은 이미 유명해서 제외하고, 현지인만 아는 빵집이나 카페 추천 부탁드려요 ☕️",
    views: 23,
    comments: [],
  },
  {
    user_id: 12,
    user_name: "자연러버",
    post_id: 6,
    created_at: "2025.08.16",
    title: "속초에서 캠핑하기 좋은 곳 있을까요?",
    content:
      "텐트 치기 편하고, 주변에 화장실 있는 자연 캠핑장 추천해주시면 감사하겠습니다!",
    views: 51,
    comments: [],
  },
];
