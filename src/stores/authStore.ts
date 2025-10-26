// stores/useAuthStore.ts
import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  setLoggedIn: (v) => set({ isLoggedIn: v }),
}));
