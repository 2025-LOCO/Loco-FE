import { create } from "zustand";

type TripAnswers = {
  [key: number]: string | number; // id별 답변
};

type AnswerStore = {
  answers: TripAnswers;
  setAnswer: (id: number, answer: string | number) => void;
  reset: () => void;
};

export const useAnswerStore = create<AnswerStore>((set) => ({
  answers: {},
  setAnswer: (id, answer) =>
    set((state) => ({ answers: { ...state.answers, [id]: answer } })),
  reset: () => set({ answers: {} }),
}));
