// Typage des payloads pour chaque appel API lié aux transactions
// Cela évite la duplication de types dans les appels, améliore l'auto-complétion

export interface AuthPayload {
  token: string;
}

export interface GetTransactionsPayload extends AuthPayload {
  offset?: number;
}

export interface GetTransactionByIdPayload extends AuthPayload {
  id: number;
}

export type TransactionStatus = 'pending' | 'completed' | 'failed';
export type TransactionType = 'credit' | 'debit' | 'transfert';

export interface CreateTransactionPayload extends AuthPayload {
  date?: string;
  status?: TransactionStatus;
  type: TransactionType;
  amount: number;
  bankId: number;
  categoryId?: number;
  description?: string;
  baseCategory?: string;
}

export interface EditTransactionPayload extends AuthPayload {
  id: number;
  date?: string;
  status?: TransactionStatus;
  amount?: number;
  bankId?: number;
  categoryId?: number;
  description?: string;
  baseCategory?: string;
}

export interface DeleteTransactionPayload extends AuthPayload {
  id: string;
}