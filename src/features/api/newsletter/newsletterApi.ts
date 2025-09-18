import { axiosInstance } from '../axiosInstance';
import { type SubscribeNewsletterPayload } from './newsletterApi.types';

/**
 * Fonction qui envoie un email à l'API newsletter.
 * Elle utilise une instance Axios centralisée pour plus de cohérence dans les appels.
 * @param payload - Un objet contenant une adresse email à inscrire à la newsletter.
 * @returns Une promesse Axios (peut être traitée avec .then/.catch ou async/await)
 */
export const subscribeToNewsletter = async (
  payload: SubscribeNewsletterPayload
): Promise<void> => {
  await axiosInstance.post('/newsletter/email', payload);
};