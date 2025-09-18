import { axiosInstance } from '../axiosInstance';
import { responsePromiseMethod } from '../../../utils/responsePromiseMethodApi';
import { type IBank } from '../../../types/@types.financesParams';
import type {
  AddBankPayload,
  AuthTokenPayload,
  DeleteBankPayload,
  EditBankPayload,
} from './bankApi.types';

// GET /settings/accounts
export const getBanksAPI = async ({ token }: AuthTokenPayload): Promise<IBank[]> => {
  return responsePromiseMethod(
    axiosInstance.get('/settings/accounts', {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<IBank[]>;
};

// POST /settings/accounts
export const addBankAPI = async ({
  token,
  label,
  type,
  balance,
  icon,
}: AddBankPayload): Promise<IBank> => {
  return responsePromiseMethod(
    axiosInstance.post(
      '/settings/accounts',
      { label, type, balance, icon },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<IBank>;
};

// PUT /settings/accounts/:id
export const editBankAPI = async ({
  token,
  id,
  label,
  type,
  balance,
  icon,
}: EditBankPayload): Promise<IBank> => {
  return responsePromiseMethod(
    axiosInstance.put(
      `/settings/accounts/${id}`,
      { label, type, balance, icon },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<IBank>;
};

// DELETE /settings/accounts/:id
export const deleteBankAPI = async ({ token, id }: DeleteBankPayload): Promise<string> => {
  return responsePromiseMethod(
    axiosInstance.delete(`/settings/accounts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<string>;
};