import client from "../api/client";
import { endpoints } from "../api/endpoints";
import type { ApiResponse } from "../api/types/api-response";

export const baseService = {
  getStatus: async () => {
    const res = await client.get<ApiResponse<string>>(endpoints.base);
    return res.data;
  },
};
