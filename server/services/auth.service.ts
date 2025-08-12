// src/api/services/auth.service.ts

import client from "../api/client";
import { endpoints } from "../api/endpoints";
import type { ApiResponse } from "../api/types/api-response";

interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const res = await client.post<ApiResponse<LoginResponse>>(
      endpoints.login,
      credentials
    );

    if (res.data.status === "success" && res.data.data?.token) {
      const token = res.data.data.token;
      localStorage.setItem("token", token);
    }

    return res.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};
