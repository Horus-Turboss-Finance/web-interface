import { axiosInstance } from '../../api/axiosInstance';
import { responsePromiseMethod } from '../../../utils/responsePromiseMethodApi';
import type {
  SignupPayload,
  LoginPayload,
  UpdateProfilePayload,
  UpdateEmailPayload,
  UpdatePasswordPayload,
} from '../types/types';

// Typage centralisé pour les objets utilisateur
interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  pseudo: string;
  avatar: string;
}

/**
 * Inscription utilisateur
 */
export const signupUser = (payload: SignupPayload): Promise<string> => {
  return responsePromiseMethod(
    axiosInstance.post('/auth/signup', payload)
  ) as Promise<string>;
};

/**
 * Connexion utilisateur
 */
export const loginUser = (payload: LoginPayload): Promise<void> => {
  return responsePromiseMethod(
    axiosInstance.post('/auth/signin', payload)
  ) as Promise<void>;
};

/**
 * Récupération des infos de l'utilisateur connecté
 */
export const getUserInfo = (): Promise<User> => {
  return responsePromiseMethod(
    axiosInstance.get('/user/@me')
  ) as Promise<User>;
};

/**
 * Mise à jour du profil utilisateur
 */
export const updateMyProfile = (
  payload: UpdateProfilePayload
): Promise<User> => {
  return responsePromiseMethod(
    axiosInstance.put('/user/@me', payload)
  ) as Promise<User>;
};

/**
 * Mise à jour de l'adresse e-mail
 */
export const updateMyEmail = (
  payload: UpdateEmailPayload
): Promise<User> => {
  return responsePromiseMethod(
    axiosInstance.put('/user/@me/email', payload)
  ) as Promise<User>;
};

/**
 * Mise à jour du mot de passe
 */
export const updateMyPassword = (
  payload: UpdatePasswordPayload
): Promise<User> => {
  return responsePromiseMethod(
    axiosInstance.put('/user/@me/credential', payload)
  ) as Promise<User>;
};

/**
 * Suppression du compte utilisateur
 */
export const deleteMyAccount = (): Promise<void> => {
  return responsePromiseMethod(
    axiosInstance.delete('/user/@me')
  ) as Promise<void>;
};

export const signOutMyAccount = (): Promise<void> => {
  return responsePromiseMethod(
    axiosInstance.post('/auth/signout')
  ) as Promise<void>;
};