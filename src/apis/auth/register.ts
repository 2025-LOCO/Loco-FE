import apiInstance from "../apiInstance";

export interface RegisterRequest {
  email: string;
  nickname: string;
  intro: string;
  city_id: string;
  password: string;
}

export async function registerUser(data: RegisterRequest) {
  try {
    const res = await apiInstance.post("/api/v1/auth/register", data);
    return res.data;
  } catch (error: any) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    throw error;
  }
}
