import { axiosInstance } from '../axiosInstance';
import type { KiffResult } from '../../../types/kiff-algo.types';
import { responsePromiseMethod } from '../../../utils/responsePromiseMethodApi';

// GET /user/@me/kiff-score
export const getKiffAPI = async ({ token }: {token: string;}): Promise<KiffResult> => {
  return responsePromiseMethod(
    axiosInstance.get("/user/@me/kiff-score", {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<KiffResult>;
};