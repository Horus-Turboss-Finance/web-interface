/**
 * Raison d'être: type centralisé pour représenter la forme d'erreur API.
 * Pourquoi: éviter les "as" éparpillés + rendre explicite la dépendance envers la shape backend.
 */
export type ApiErrorShape = {
  response?: {
    data?: {
      // Plusieurs backends remontent un message "plat" dans data.data
      data?: string;
      // Optionnel: code d'erreur, utile pour des mappings plus robustes que les strings
      code?: string;
    };
    status?: number;
  };
};

export type AxiosApiResponse = {
  data: string;
}