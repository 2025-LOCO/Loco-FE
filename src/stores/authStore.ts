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
  isLoggedIn: !!localStorage.getItem("accessToken"),
  userId: null,
  nickname: null,
  setLoggedIn: (v) => set({ isLoggedIn: v }),
  setUser: (id, nickname) => set({ userId: id, nickname }),

  // 로그아웃 시 상태 초기화 + localStorage 정리
  setLogout: () => {
    localStorage.removeItem("accessToken");
    set({
      isLoggedIn: false,
      userId: null,
      nickname: null,
    });
  },
}));
