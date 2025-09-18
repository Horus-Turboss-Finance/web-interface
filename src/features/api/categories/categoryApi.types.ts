// Typage des payloads pour chaque fonction API
// Cela permet de réutiliser les types dans les appels et dans les hooks

export interface AuthPayload {
  token: string;
}

export interface AddCategoryPayload extends AuthPayload {
  name: string;
  icon: string;
  type: number;
  base_category?: string;
}

export interface EditCategoryPayload extends AuthPayload {
  id: string;
  name: string;
  icon: string;
}

export interface DeleteCategoryPayload extends AuthPayload {
  id: string;
}
