import { axiosInstance } from '../axiosInstance';
import { responsePromiseMethod } from '../../../utils/responsePromiseMethodApi';
import type { ITransaction } from '../../../types/@types.financesParams'; // Supposé renommé proprement
import type {
  GetTransactionsPayload,
  GetTransactionByIdPayload,
  CreateTransactionPayload,
  EditTransactionPayload,
  DeleteTransactionPayload,
} from './transactionApi.types';

/**
 * Récupère toutes les transactions, avec offset pour pagination
 */
export const getTransactionsApi = async ({
  token,
  offset,
}: GetTransactionsPayload): Promise<ITransaction[]> => {
  const query = offset ? `?offset=${offset}` : '';
  return responsePromiseMethod(
    axiosInstance.get(`/transaction${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<ITransaction[]>;
};

/**
 * Récupère une transaction par son ID
 */
export const getTransactionByIdApi = async ({
  token,
  id,
}: GetTransactionByIdPayload): Promise<ITransaction> => {
  return responsePromiseMethod(
    axiosInstance.get(`/transaction/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<ITransaction>;
};

/**
 * Crée une nouvelle transaction
 */
export const createTransactionApi = async ({
  token,
  bankId,
  categoryId,
  amount,
  type,
  status,
  date,
  description,
  baseCategory,
}: CreateTransactionPayload): Promise<ITransaction> => {
  return responsePromiseMethod(
    axiosInstance.post(
      `/transaction/`,
      {
        bankId,
        categoryId,
        amount,
        type,
        status,
        date,
        description,
        baseCategory,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<ITransaction>;
};

/**
 * Modifie une transaction existante
 */
export const editTransactionApi = async ({
  token,
  id,
  bankId,
  categoryId,
  amount,
  status,
  date,
  description,
  baseCategory,
}: EditTransactionPayload): Promise<ITransaction> => {
  return responsePromiseMethod(
    axiosInstance.put(
      `/transaction/${id}`,
      {
        bankId,
        categoryId,
        amount,
        status,
        date,
        description,
        baseCategory,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<ITransaction>;
};

/**
 * Supprime une transaction via son ID
 */
export const deleteTransactionApi = async ({
  token,
  id,
}: DeleteTransactionPayload): Promise<string> => {
  return responsePromiseMethod(
    axiosInstance.delete(`/transaction/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<string>;
};