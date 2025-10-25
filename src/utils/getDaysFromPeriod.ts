// // "1박2일", "2박3일", "당일치기" 등을 1,2,3… 일수로 변환
// export function getDaysFromPeriod(period?: string): number {
//   if (!period) return 1;
//   if (period.includes("당일")) return 1;

//   const m = period.match(/(?:(\d+)박)?\s*(\d+)일/); // "1박2일", "3일" 모두 매칭
//   if (!m) return 1;
//   const days = parseInt(m[2], 10);
//   return Number.isFinite(days) && days > 0 ? days : 1;
// }
