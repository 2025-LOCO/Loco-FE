import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://13.125.208.248",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 요청 5초 초과 시 자동 중단
});

// 요청 인터셉터 (토큰 자동 추가)
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (공통 에러 처리)
apiInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("[API Error]", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiInstance;
