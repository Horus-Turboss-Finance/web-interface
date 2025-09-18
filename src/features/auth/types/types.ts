// Rôle : centraliser les types TS pour l'inscription & connexion.
// Pourquoi : documenter les shapes, faciliter la maintenance et les tests.
export type SignupFormValues = {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
};

export type SignupFormErrors = Partial<
  Record<keyof SignupFormValues | "global", string | undefined>
>;


export type SigninFormValues = {
  email: string;
  password: string;
};

export type SigninFormErrors = Partial<
  Record<keyof SigninFormValues | "global", string | undefined>
>;

export interface SignupPayload {
  email: string;
  password: string;
  name: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UpdateProfilePayload {
  name?: string;
  pseudo?: string;
}

export interface UpdateEmailPayload {
  email: string;
  password: string;
}

export interface UpdatePasswordPayload {
  oldPassword: string;
  newPassword: string;
}