import { ALERTE_KIFF, RELAX_KIFF, SERRE_KIFF } from "../../../types/kiff-algo.types";

export const KiffMood = (kiffMood : "relax" | "serré" | "alerte") => 
  kiffMood == "relax" ? RELAX_KIFF[new Date().getDate()%10] :
  kiffMood == "serré" ? SERRE_KIFF[new Date().getDate()%10] :
  ALERTE_KIFF[new Date().getDate()%10]