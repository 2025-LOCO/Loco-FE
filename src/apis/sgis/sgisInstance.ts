import axios from "axios";

const SGIS_BASE_URL = "https://sgisapi.kostat.go.kr/OpenAPI3";
const CONSUMER_KEY = import.meta.env.VITE_SGIS_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_SGIS_CONSUMER_SECRET;

let accessToken: string | null = null;
let errCnt = 0; // 무한루프 방지용

// 토큰 발급
export async function fetchAccessToken() {
  if (accessToken) return accessToken;
  console.log(CONSUMER_KEY);
  console.log(CONSUMER_SECRET);
  const res = await axios.get(`${SGIS_BASE_URL}/auth/authentication.json`, {
    params: {
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET,
    },
  });
  accessToken = res.data.result.accessToken;
  errCnt = 0;
  return accessToken;
}

const sgisInstance = axios.create({
  baseURL: SGIS_BASE_URL,
});

// 요청 인터셉터 - 모든 요청에 accessToken 자동 추가
sgisInstance.interceptors.request.use(async (config) => {
  if (!accessToken) {
    accessToken = await fetchAccessToken();
  }
  config.params = {
    ...(config.params || {}),
    accessToken,
  };
  return config;
});

// 응답 인터셉터 - 토큰 만료 시 자동 재발급 후 재요청
sgisInstance.interceptors.response.use(
  // 성공콜백 - 응답 반환
  async (response) => {
    const { data, config } = response;

    // SGIS API errCd 검사
    if (data?.errCd && parseInt(data.errCd, 10) !== 0) {
      switch (parseInt(data.errCd, 10)) {
        case -100:
          throw new Error("유효하지 않은 지역 코드입니다.");
        case -401:
          if (errCnt < 200) {
            console.log("에러처리로 넘어옴");
            errCnt++;
            accessToken = null; // 기존 토큰 초기화
            accessToken = await fetchAccessToken(); // 비동기 호출 - 토큰 재발급
            config.params = {
              ...(config.params || {}),
              accessToken,
            };
            return sgisInstance(config); // 새 토큰으로 재요청
          }
          throw new Error("Access Token이 만료되었습니다.");
        default:
          throw new Error(data.errMsg || "알 수 없는 SGIS API 오류");
      }
    }
    return response; // 정상 응답
  },
  // 실패콜백 - 비동기 처리 필요
  async (error) => {
    return Promise.reject(error); // catch 블록으로 에러 전달
  }
);

export default sgisInstance;
