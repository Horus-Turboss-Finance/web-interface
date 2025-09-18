// Utilitaires de date pour la dashboard - centralisé pour réutilisation.
// Pourquoi : éviter duplication de logique date/locale dans plusieurs composants.

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { ITransaction } from "../../../types/@types.financesParams";

export const reduceDateFormat = (acc: {
      [date: string]: ITransaction[];
  }, t:ITransaction) => {
  const now = new Date(),
    m1 = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()),
    p1 = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
    w1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
    w2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  
  const d = t.date;
  const key =
    d > m1 && d < p1
      ? d > w1 && d < w2
        ? format(d, "cccc d", { locale: fr }) // Exemple : "Dimanche 31"
        : format(d, "d LLLL", { locale: fr }) // Exemple : "15 Août"
      : format(d, "PPP", { locale: fr }); // Exemple : "1 novembre 2015"

  if (!acc[key]) acc[key] = [];
  acc[key].push(t);
  return acc;
};