// 여행 기간 (한글 ↔ 숫자)
export const PERIOD_MAP = {
  당일치기: 1,
  "1박2일": 2,
  "2박3일": 3,
  "3박4일": 4,
  장기여행: 5,
} as const;

// 여행 장소 (한글 ↔ 영어)
export const ENV_MAP = {
  바다: "sea",
  산: "mountain",
  도시: "city",
  농촌: "countryside",
} as const;

// 동행 (한글 ↔ 영어)
export const WITH_MAP = {
  혼자: "alone",
  친구: "friend",
  연인: "love",
  가족: "family",
  반려동물: "pet",
} as const;

// 이동수단 (한글 ↔ 영어)
export const MOVE_MAP = {
  걸어서: "walk",
  자전거: "bike",
  자동차: "car",
  기차: "train",
  버스: "public",
} as const;

// 분위기 (한글 ↔ 영어)
export const ATMOSPHERE_MAP = {
  "잔잔하고 조용한": "잔잔하고 조용한",
  "신나는 액티비티": "신나는 액티비티",
  "다채로운 경험": "다채로운 경험",
  "맛있는 여행": "맛있는 여행",
  "아늑하고 로맨틱한": "아늑하고 로맨틱한",
} as const;

// 하루 방문지 수 (한글 ↔ 숫자)
export const PLACE_COUNT_MAP = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
} as const;
