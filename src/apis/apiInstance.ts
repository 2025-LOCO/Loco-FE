import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const apiInstance = axios.create({
  baseURL: "https://api.loco-map.store",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    const { response } = error;
    const authStore = useAuthStore.getState();

    if (response?.status === 401) {
      console.warn("토큰 만료 — 자동 로그아웃 처리");
      authStore.setLogout(); // Zustand store에서 로그아웃 함수 실행
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default apiInstance;
