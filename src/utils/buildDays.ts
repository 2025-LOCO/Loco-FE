// import { getDaysFromPeriod } from "./getDaysFromPeriod";

// type TLDay = { dayLabel: string; items: TLItem[] };

// export function buildDays(plan: RoutePlan): TLDay[] {
//   const dayCount = getDaysFromPeriod(plan.period);
//   const days: TLDay[] = Array.from({ length: dayCount }, (_, i) => ({
//     dayLabel: `Day ${i + 1}`,
//     items: [],
//   }));

//   for (const v of plan.visits) {
//     const d = Math.min(Math.max(v.day ?? 1, 1), dayCount) - 1; // 0-index
//     days[d].items.push({
//       id: v.id,
//       title: v.title,
//       category: v.category,
//       meta: v.meta,
//       icon: v.icon,
//     });
//   }
//   return days;
// }
