import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  userId: number | null;
  nickname: string | null;
  setLoggedIn: (v: boolean) => void;
  setUser: (id: number, nickname: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // 앱 시작 시 localStorage 값 기반으로 초기화
  isLoggedIn: !!localStorage.getItem("accessToken"),
  userId: Number(localStorage.getItem("userId")) || null,
  nickname: localStorage.getItem("nickname") || null,

  setLoggedIn: (v) => set({ isLoggedIn: v }),

  // 로그인 시 userId, nickname을 localStorage에도 저장
  setUser: (id, nickname) => {
    localStorage.setItem("userId", String(id));
    localStorage.setItem("nickname", nickname);
    set({ userId: id, nickname });
  },

  // 로그아웃 시 localStorage 및 상태 초기화
  setLogout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("nickname");
    set({
      isLoggedIn: false,
      userId: null,
      nickname: null,
    });
  },
}));
