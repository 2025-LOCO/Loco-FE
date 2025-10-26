// src/apis/auth/login.ts
import apiInstance from "../apiInstance";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
  const res = await apiInstance.post<LoginResponse>("api/v1/auth/login", data);
  return res.data;
}
