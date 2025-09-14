import axios from "axios";

const TOUR_BASE_URL = "https://apis.data.go.kr/B551011/KorService2";
const SERVICE_KEY = import.meta.env.VITE_PUBLIC_DATA_KEY;

const tourInstance = axios.create({
  baseURL: TOUR_BASE_URL,
  params: {
    serviceKey: SERVICE_KEY,
    _type: "json",
    MobileOS: "WEB",
    MobileApp: "loco",
  },
});

export default tourInstance;
