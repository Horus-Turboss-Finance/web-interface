// Typage des paramètres d'appel des fonctions API pour plus de lisibilité et réutilisabilité
export interface AuthTokenPayload {
  token: string;
}

export interface AddBankPayload extends AuthTokenPayload {
  label: string;
  type: string;
  balance: number;
  icon: string;
}

export interface EditBankPayload extends AddBankPayload {
  id: string;
}

export interface DeleteBankPayload extends AuthTokenPayload {
  id: string;
}