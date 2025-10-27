import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  userId: number | null;
  nickname: string | null;
  setLoggedIn: (v: boolean) => void;
  setUser: (id: number, nickname: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  userId: null,
  nickname: null,
  setLoggedIn: (v) => set({ isLoggedIn: v }),
  setUser: (id, nickname) => set({ userId: id, nickname }),
}));
