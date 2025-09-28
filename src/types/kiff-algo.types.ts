export type KiffResult = {
  mode: string,
  kiff_brut: number;
  kiff_ajuste: number;
  mois_survie: number;
  score_stabilite: number;
  mood: 'relax' | 'serré' | 'alerte';
};

export const RELAX_KIFF = [
  "Ton budget respire tranquille. Tu peux te faire kiffer aujourd'hui sans checker ton compte 3 fois. 🍹",
  "Ce petit extra à la pause dej ? C'est validé. Ton kiff score dit que t'as de la marge. 🍰",
  "T'es dans une vibe posée. T'as géré, ton compte suit. Profite sans pression. 💅",
  "T'as de quoi te faire plaisir aujourd'hui. Go acheter ce truc qui te faisait de l'œil ! 👀",
  "Ton kiff score est dans le vert, ton compte est stable, ta vibe est chill. Respire, t'es bien. 🧘",
  "Pas besoin de serrer la ceinture. Le kiff score t'ouvre les portes du plaisir raisonnable. 🟢",
  "Aujourd'hui, le kiff score te dit : tu peux t'offrir un petit kiff sans que ton compte pleure. ☕✨",
  "T'as de l'air dans ton budget. Avance tranquille, sans frein ni klaxon d'alerte. 🚦",
  "Ton portefeuille est en mode lo-fi chill beats. Kiffe ton day. 🎧",
  `Budget au vert = opportunité activée. \nCe soir, c'est toi qui proposes la sortie. 🔓🍕`
]

export const SERRE_KIFF = [
  "Tu peux encore te faire plaisir... à petite dose. Genre happy hour, pas resto gastro. 🍻",
  "Pas le moment de claquer pour des trucs inutiles. Un petit kiff ok, mais calcule. 🧠",
  "On lève un peu le pied : ton budget est pas catastrophique, mais faut pas forcer. 🐢💸",
  "Laisse ce panier en attente encore 24h. Si tu l'oublies, c'est qu'il valait pas le coup. 🛒⌛",
  "C'est le moment de redonner du sens au mot “pâtes”. Le frigo est ton allié. 🍝🔥",
  "Le plaisir du jour est limité. Mais t'es pas à sec, juste en mode chantier. Ça va remonter. 🛠️",
  "Là, ton kiff score te dit de viser l'essentiel. Tu peux te faire plaisir, mais malin. 🧠💶",
  "Pas le moment de flamber, mais tu peux garder un petit plaisir pour la santé mentale. 🎯",
  "Budget serré, mais pas à sec. Tu peux gratter un petit jus, mais pas la bouteille. 🍊",
  "Pas de livraison ce soir. On fait avec ce qu'on a, et c'est déjà pas mal. 🥡📉"
]

export const ALERTE_KIFF = [
  "Là, c'est chaud. Ton kiff score dit stop aux dépenses inutiles. On sécurise le mois avant tout.",
  "On met les petits plaisirs en veille. Ton compte a besoin d'un break pour souffler. 🔋",
  "T'es au fond du budget. Si tu dois claquer, que ce soit vital (genre manger, boire, respirer). 💧",
  "Le kiff est KO pour aujourd'hui. Mais c'est pas la fin du monde - juste un jour sans. 🛑",
  "Ton budget est gelé pour l'instant. On reste au calme, on gère, et ça va repartir. ❄️",
  "C'est serré de ouf. Mais tant que t'en as conscience, t'as le pouvoir d'agir. Courage. 💪",
  "C'est pas glamour, mais t'as connu pire. Garde le cap, chaque choix compte aujourd'hui. 🧭",
  "C'est pas le moment de kiffer, c'est le moment de limiter la casse. On verra demain. 🧠",
  "On ferme le robinet. Claquer aujourd'hui, c'est s'enfoncer. Tiens bon. 🔒",
  "Oui, c'est chaud. Mais t'as vu le coup venir, et c'est déjà une victoire. On fait le dos rond. ⛅"
]