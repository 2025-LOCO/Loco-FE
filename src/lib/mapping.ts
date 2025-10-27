import {
  ATMOSPHERE_MAP,
  ENV_MAP,
  MOVE_MAP,
  PERIOD_MAP,
  PLACE_COUNT_MAP,
  WITH_MAP,
} from "@/constants/tagMappings";

// 한글 → API용 영어/숫자 변환
export function toApiValue(
  category: string,
  value: string
): string | number | undefined {
  switch (category) {
    case "period":
      return (
        {
          당일치기: 1,
          "1박2일": 2,
          "2박3일": 3,
          "3박4일": 4,
          장기여행: 5,
        }[value] ?? undefined
      );

    case "place_count":
      return Number(value);

    case "env":
      return { 바다: "sea", 산: "mountain", 도시: "city", 농촌: "countryside" }[
        value
      ];

    case "with":
      return {
        혼자: "alone",
        친구: "friend",
        연인: "love",
        가족: "family",
        반려동물: "pet",
      }[value];

    case "move":
      return {
        걸어서: "walk",
        자전거: "bike",
        자동차: "car",
        기차: "train",
        버스: "public",
      }[value];

    case "atmosphere":
      return {
        잔잔하고조용한: "잔잔하고조용한",
        신나는액티비티: "신나는액티비티",
        다채로운경험: "다채로운경험",
        맛있는여행: "맛있는여행",
        아늑하고로맨틱한: "아늑하고로맨틱한",
      }[value];

    default:
      return undefined;
  }
}

// ---------------------------------------------------------

// API → 한글 변환 함수
export function toKoreanValue(
  category: string,
  value: string | number
): string {
  const reverse = (obj: Record<string, any>) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

  switch (category) {
    case "period":
      // value가 number일 때만 정상 처리
      return reverse(PERIOD_MAP)[value as number] ?? String(value);

    case "env":
      return reverse(ENV_MAP)[value as string] ?? String(value);

    case "with":
      return reverse(WITH_MAP)[value as string] ?? String(value);

    case "move":
      return reverse(MOVE_MAP)[value as string] ?? String(value);

    case "atmosphere":
      return reverse(ATMOSPHERE_MAP)[value as string] ?? String(value);

    case "place_count":
      return reverse(PLACE_COUNT_MAP)[value as number] ?? String(value);

    default:
      return String(value);
  }
}
