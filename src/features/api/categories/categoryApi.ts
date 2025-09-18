import { axiosInstance } from '../axiosInstance';
import { responsePromiseMethod } from '../../../utils/responsePromiseMethodApi';
import { type ICategory } from '../../../types/@types.financesParams';
import type {
  AddCategoryPayload,
  EditCategoryPayload,
  DeleteCategoryPayload,
  AuthPayload,
} from './categoryApi.types';

// Récupère la liste des catégories
export const getCategoryAPI = async ({ token }: AuthPayload): Promise<ICategory[]> => {
  return responsePromiseMethod(
    axiosInstance.get('/settings/categories', {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<ICategory[]>;
};

// Ajoute une nouvelle catégorie
export const addCategoryAPI = async ({
  token,
  name,
  icon,
  type,
  base_category,
}: AddCategoryPayload): Promise<ICategory> => {
  return responsePromiseMethod(
    axiosInstance.post(
      '/settings/categories',
      {
        name,
        icon,
        type,
        base: base_category,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<ICategory>;
};

// Modifie une catégorie existante
export const editCategoryAPI = async ({
  token,
  id,
  name,
  icon,
}: EditCategoryPayload): Promise<ICategory> => {
  return responsePromiseMethod(
    axiosInstance.put(
      `/settings/categories/${id}`,
      { name, icon },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ) as Promise<ICategory>;
};

// Supprime une catégorie
export const deleteCategoryAPI = async ({
  token,
  id,
}: DeleteCategoryPayload): Promise<string> => {
  return responsePromiseMethod(
    axiosInstance.delete(`/settings/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ) as Promise<string>;
};