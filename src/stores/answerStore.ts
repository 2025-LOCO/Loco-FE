import type { AnswerValueMap } from "@/data/answers";
import { questions } from "@/data/questions";
import { create } from "zustand";

type AnswerStore = {
  answers: Partial<AnswerValueMap>;
  setAnswer: <Id extends keyof AnswerValueMap>(
    id: Id,
    answer: AnswerValueMap[Id]
  ) => void;
  reset: () => void;
};

// 초기 상태: 모든 답변은 "전체"
const initialAnswers = Object.fromEntries(
  questions.map((q) => [q.id, "전체"])
) as Partial<AnswerValueMap>;

export const useAnswerStore = create<AnswerStore>((set) => ({
  answers: initialAnswers,
  setAnswer: (id, answer) =>
    set((state) => ({
      answers: { ...state.answers, [id]: answer },
    })),
  reset: () => set({ answers: initialAnswers }),
}));
