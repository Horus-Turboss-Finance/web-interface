import { TvIcon } from "../assets/tv";
import { BusIcon } from "../assets/bus";
import { BoltIcon } from "../assets/bolt";
import { FireIcon } from "../assets/fire";
import { GiftIcon } from "../assets/gift";
import { GameIcon } from "../assets/game";
import { BookIcon } from "../assets/book";
import { FilmIcon } from "../assets/film";
import { TaxiIcon } from "../assets/taxi";
import { AwardIcon } from "../assets/award";
import { PizzaIcon } from "../assets/pizza";
import { GaugeIcon } from "../assets/gauge";
import { WaterIcon } from "../assets/water";
import { GlobeIcon } from "../assets/globe";
import { PhoneIcon } from "../assets/phone";
import { ShirtIcon } from "../assets/shirt";
import { CarOnIcon } from "../assets/car-on";
import { ViandeIcon } from "../assets/viande";
import { CoffeeIcon } from "../assets/coffee";
import { ScisorIcon } from "../assets/scisor";
import { SchoolIcon } from "../assets/school";
import { ParkingIcon } from "../assets/parking";
import { MedicalIcon } from "../assets/medical";
import { TabletsIcon } from "../assets/tablets";
import { IceCreamIcon } from "../assets/icecream";
import { DumbbellIcon } from "../assets/dumbbell";
import { QuestionIcon } from "../assets/question";
import { MountainIcon } from "../assets/mountain";
import { LandmarkIcon } from "../assets/landmark";
import { CarBurstIcon } from "../assets/car-burst";
import { HandshakeIcon } from "../assets/handshake";
import { WineGlassIcon } from "../assets/wine-glass";
import { HouseUserIcon } from "../assets/house-user";
import { HouseFireIcon } from "../assets/house-fire";
import { WandMagicIcon } from "../assets/wand-magic";
import { PeggyBankIcon } from "../assets/peggy-bank";
import { BasketFillIcon } from "../assets/basket-fill";
import { SackDollarIcon } from "../assets/sack-dollar";
import { FileMedicalIcon } from "../assets/file-medical";
import { PersonWalkingIcon } from "../assets/person-walking";
import { SpraySparklesIcon } from "../assets/spray-sparkles";
import { MoneyBillWaveIcon } from "../assets/money-bill-wave";
import { MoneyBillTrendUpIcon } from "../assets/money-bill-trend-up";
import { HandHoldingDollarIcon } from "../assets/hand-holding-dollar";
import { CircleDollarToSlotIcon } from "../assets/circle-dollar-to-slot";

import type { ElementType } from "react";
import { CarIcon } from "../assets/car";
import { BusinessTimeIcon } from "../assets/business-time";

export const listIconCategory: Record<string, ElementType<{ color?: string }>> = {
  CircleDollarToSlotIcon,
  HandHoldingDollarIcon,
  MoneyBillTrendUpIcon,
  SpraySparklesIcon,
  PersonWalkingIcon,
  MoneyBillWaveIcon,
  FileMedicalIcon,
  BasketFillIcon,
  SackDollarIcon,
  PeggyBankIcon,
  HouseUserIcon,
  WandMagicIcon,
  HouseFireIcon,
  WineGlassIcon,
  HandshakeIcon,
  IceCreamIcon,
  DumbbellIcon,
  CarBurstIcon,
  LandmarkIcon,
  QuestionIcon,
  MountainIcon,
  ParkingIcon,
  MedicalIcon,
  TabletsIcon,
  CoffeeIcon,
  ViandeIcon,
  ScisorIcon,
  SchoolIcon,
  AwardIcon,
  CarOnIcon,
  GaugeIcon,
  GlobeIcon,
  PhoneIcon,
  PizzaIcon,
  WaterIcon,
  ShirtIcon,
  BoltIcon,
  GiftIcon,
  FilmIcon,
  TaxiIcon,
  FireIcon,
  BookIcon,
  GameIcon,
  CarIcon,
  BusIcon,
  TvIcon,
};

export const defaultCategories: { label: string; icon: keyof typeof listIconCategory; type: 1 | 2 }[] = [
  // --- Dépenses ---
  { label: "Alimentation", icon: "BasketFillIcon", type: 1 },
  { label: "Restaurants & Fast-food", icon: "PizzaIcon", type: 1 },
  { label: "Cafés & Bars", icon: "CoffeeIcon", type: 1 },
  { label: "Logement & Charges", icon: "HouseUserIcon", type: 1 },
  { label: "Électricité & Eau", icon: "WaterIcon", type: 1 },
  { label: "Internet & Téléphone", icon: "PhoneIcon", type: 1 },
  { label: "Transport & Essence", icon: "CarIcon", type: 1 },
  { label: "Santé & Médicaments", icon: "MedicalIcon", type: 1 },
  { label: "Assurance", icon: "FileMedicalIcon", type: 1 },
  { label: "Sport & Fitness", icon: "DumbbellIcon", type: 1 },
  { label: "Divertissement & Loisirs", icon: "GameIcon", type: 1 },
  { label: "Voyages & Vacances", icon: "MountainIcon", type: 1 },
  { label: "Éducation & Livres", icon: "BookIcon", type: 1 },
  { label: "Vêtements & Accessoires", icon: "ShirtIcon", type: 1 },
  { label: "Cadeaux & Événements", icon: "GiftIcon", type: 1 },
  { label: "Impôts & Taxes", icon: "LandmarkIcon", type: 1 },
  { label: "Autres dépenses", icon: "QuestionIcon", type: 1 },

  // --- Recettes ---
  { label: "Salaire", icon: "HandHoldingDollarIcon", type: 2 },
  { label: "Prime", icon: "MoneyBillTrendUpIcon", type: 2 },
  { label: "Investissements", icon: "SackDollarIcon", type: 2 },
  { label: "Économies", icon: "PeggyBankIcon", type: 2 },
  { label: "Remboursement & Prêt", icon: "MoneyBillWaveIcon", type: 2 },
  { label: "Revenus locatifs", icon: "HouseUserIcon", type: 2 },
  { label: "Ventes & Revente", icon: "CircleDollarToSlotIcon", type: 2 },
  { label: "Aides & Subventions", icon: "AwardIcon", type: 2 },
  { label: "Autres revenus", icon: "QuestionIcon", type: 2 },
];

export const FINANCIAL_PLATFORMS = {
  ABN_AMRO: "https://web.bankin.com/img/banks-home-icons/nl/abn-amro.png",
  ACTIVOBANK: "https://web.bankin.com/img/banks-home-icons/pt/activobank.png",
  ADMIRALS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0Z9mjKKLgZc-nuH3jJGYOf6556tRc7q-4g&s",
  ALLIANZ: "https://web.bankin.com/img/banks-home-icons/fr/allianz.png",
  AMERICAN_EXPRESS: "https://web.bankin.com/img/banks-home-icons/fr/american-express.png",
  ANYTIME: "https://web.bankin.com/img/banks-home-icons/fr/anytime.png",
  ATLANTICO_EUROPA: "https://web.bankin.com/img/banks-home-icons/pt/atlantico-europa.png",
  ATOM_BANK: "https://www.atombank.co.uk/38af943936dea9f7095c.svg?url",
  AVATRADE: "https://www.avatrade.com/favicon.ico",
  AXA_BANK: "https://web.bankin.com/img/banks-home-icons/fr/axa-banque.png",
  BANCO_BPI: "https://web.bankin.com/img/banks-home-icons/pt/banco-bpi.png",
  BANCO_BPM: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lH856oPb1CApKBaOwFYGkmWjq4YjQC3VkQ&s",
  BANCO_DE_INVESTIMENTO_GLOBAL: "https://web.bankin.com/img/banks-home-icons/pt/big-banco-de-investimento-global.png",
  BANCO_MONTEPIO: "https://web.bankin.com/img/banks-home-icons/pt/banco-montepio.png",
  BANCO_PORTUGUES_DE_GESTAO: "https://web.bankin.com/img/banks-home-icons/pt/banco-portugues-de-gestao.png",
  BANCO_SABADELL: "https://www.bancsabadell.com/StaticFiles/GrupoBS/img/ico_playstore_BS.jpg",
  BANCO_SANTANDER: "https://www.santander.com/content/dam/santander-com/images/image-resources/san-logo.png",
  BANKINTER: "https://web.bankin.com/img/banks-home-icons/es/bankinter.png",
  BANQUE_CHALUS: "https://web.bankin.com/img/banks-home-icons/fr/banque-chalus.png",
  BANQUE_DE_SAVOIE: "https://web.bankin.com/img/banks-home-icons/fr/banque-de-savoie.png",
  BANQUE_DELUBAC: "https://web.bankin.com/img/banks-home-icons/fr/banque-delubac-&-cie.png",
  BANQUE_DES_TERRITOIRES: "https://web.bankin.com/img/banks-home-icons/fr/banque-des-territoires.png",
  BANQUE_FIDUCIAL: "https://web.bankin.com/img/banks-home-icons/fr/banque-fiducial.png",
  BANQUE_PALATINE: "https://web.bankin.com/img/banks-home-icons/fr/banque-palatine.png",
  BANQUE_POPULAIRE: "https://web.bankin.com/img/banks-home-icons/fr/banque-populaire.png",
  BANQUE_SBE: "https://web.bankin.com/img/banks-home-icons/fr/banque-sbe.png",
  BANQUE_TRANSATLANTIQUE: "https://web.bankin.com/img/banks-home-icons/fr/banque-transatlantique.png",
  BARCLAYS: "https://i.pinimg.com/736x/5a/a3/34/5aa33450e906c5d808bf8a02a463ab9d.jpg",
  BBVA: "https://web.bankin.com/img/banks-home-icons/es/bbva.png",
  BELFIUS: "https://web.bankin.com/img/banks-home-icons/be/belfius.png",
  BEOBANK: "https://web.bankin.com/img/banks-home-icons/be/beobank.png",
  BFORBANK: "https://web.bankin.com/img/banks-home-icons/fr/bforbank.png",
  BINANCE: "https://bitcoin.fr/wp-content/uploads/2022/03/Binance.jpg",
  BITPANDA: "https://www.mind.eu.com/fintech/wp-content/uploads/sites/2/2021/06/Bitpanda-500X500.png",
  BLANK: "https://web.bankin.com/img/banks-home-icons/fr/blank.png",
  BNEXT: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DcpSXoFdmJcPEQm3ubuVG0k-2U21k9_qQ&s",
  BNP_PARIBAS: "https://web.bankin.com/img/banks-home-icons/fr/bnp.png",
  BOURSOBANK: "https://web.bankin.com/img/banks-home-icons/fr/boursobank.png",
  BRED: "https://web.bankin.com/img/banks-home-icons/fr/bred.png",
  BTP_BANQUE: "https://web.bankin.com/img/banks-home-icons/fr/btp-banque.png",
  BUDDYBANK: "https://upload.wikimedia.org/wikipedia/commons/5/55/Logo-buddybank.png",
  BUNQ: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bunq_%28bank%29_company_logo_2017.svg/1200px-Bunq_%28bank%29_company_logo_2017.svg.png",
  BUX_ZERO: "https://finance-heros.fr/wp-content/uploads/2021/06/avis-bux.jpeg",
  CAISSE_EPARGNE: "https://web.bankin.com/img/banks-home-icons/fr/caisse-d-epargne-professionnels-banxo.png", 
  CAIXABANK: "https://web.bankin.com/img/banks-home-icons/es/caixabank.png",
  CARREFOUR_BANQUE: "https://web.bankin.com/img/banks-home-icons/fr/carrefour-banque.png",
  CBC: "https://web.bankin.com/img/banks-home-icons/be/cbc.png",
  CCF: "https://web.bankin.com/img/banks-home-icons/fr/ccf.png",
  CIC: "https://web.bankin.com/img/banks-home-icons/fr/cic.png",
  CITI: "https://cdn-icons-png.flaticon.com/512/217/217437.png",
  CMC_MARKETS: "https://honey.investfox.com/uploads/CM_Cbluelogo_35fac9fb39.jpeg",
  COINBASE: "https://eu-images.contentstack.com/v3/assets/blt7dacf616844cf077/bltd9de5684a51468c1/679969af8594a42af9a84cd1/Coinbase-Logo.png?width=1280&auto=webp&quality=80&format=jpg&disable=upscale",
  COMMERZBANK: "https://web.bankin.com/img/banks-home-icons/de/commerzbank.png",
  CREDIT_AGRICOLE: "https://web.bankin.com/img/banks-home-icons/fr/credit-agricole.png",
  CREDIT_COOPERATIF: "https://www.groupebpce.com/app/uploads/2024/03/CCOOP-312x351px.png",
  CREDIT_MARITIME: "https://web.bankin.com/img/banks-home-icons/fr/credit-maritime.png",
  CREDIT_MUNICIPAL: "https://web.bankin.com/img/banks-home-icons/fr/credit-municipal.png",
  CREDIT_MUTUEL: "https://web.bankin.com/img/banks-home-icons/fr/credit-mutuel.png",
  CURVE: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtyp56IPIkX89f-VwigiK5fVr2hLwUl3gEw&s",
  DEGIRO: "https://web.bankin.com/img/banks-home-icons/nl/degiro.png", 
  DEUTSCHE_BANK: "https://logo-marque.com/wp-content/uploads/2021/03/Deutsche-Bank-Logo-650x366.png",
  DZ_BANK: "https://www.dzbank.com/content/dam/dzbank/bilder/Homepage/rahmenelemente/dzbank_fav_icon.png",
  ETORO: "https://eu-images.contentstack.com/v3/assets/blt7dacf616844cf077/blta223dd8d72f81e7c/68665b39185b8b901ae98afe/eToro_1280.png?width=1280&auto=webp&quality=80&format=jpg&disable=upscale",
  EUROBIC: "https://web.bankin.com/img/banks-home-icons/pt/eurobic.png",
  FINTRO: "https://web.bankin.com/img/banks-home-icons/be/fintro.png",
  FLOA: "https://web.bankin.com/img/banks-home-icons/fr/floa.png",
  FORTIS: "https://web.bankin.com/img/banks-home-icons/be/fortis.png",
  FORTUNEO: "https://web.bankin.com/img/banks-home-icons/fr/fortuneo.png",
  FREETRADE: "https://logos-world.net/wp-content/uploads/2024/12/Freetrade-Symbol.png",
  FXCM: "https://images.seeklogo.com/logo-png/42/2/fxcm-logo-png_seeklogo-427230.png",
  HELIOS: "https://moralscore.org/media/icons/large/logo_helios_512x512.png",
  HELLO_BANK: "https://web.bankin.com/img/banks-home-icons/fr/hello-bank.png",
  HSBC: "https://web.bankin.com/img/banks-home-icons/fr/hsbc.png",
  HYPE: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5b2037a4768df400015b2794/0x0.png",
  HYPOVEREINSBANK: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejwWuj7YwFd09BJaImlwEdw-Wh5eeHzMcDQ&s",
  IBERCAJA: "https://web.bankin.com/img/banks-home-icons/es/ibercaja.png",
  IG_GROUP: "https://eu-images.contentstack.com/v3/assets/blt7dacf616844cf077/blte20c3a9604f5a17b/6799806be02362515af05a6b/IG-Group.jpg",
  IMAGINBANK: "https://www.caixabank.com/en/docs/comunicacion/67968.JPG",
  INDEXA_CAPITAL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93W4Tyye0AF2ecrdUcW3oDPqRi00mKVp_-w&s",
  ING: "https://web.bankin.com/img/banks-home-icons/nl/ing.png",
  INTERACTIVE_BROKERS: "https://storage.googleapis.com/neobanque-website/logo/interactivebrokers.png",
  INTESA_SANPAOLO: "https://logoeps.com/wp-content/uploads/2014/01/intesa-sanpaolo-vector-logo.png",
  KBC: "https://web.bankin.com/img/banks-home-icons/be/kbc.png",
  KFW: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEcp-fxI37CHl1KDPmQuQE8KsIvRjinorPA&s",
  KNAB: "https://future-impact.io/wp-content/uploads/2022/08/KNAB.webp",
  KONTIST: "https://play-lh.googleusercontent.com/QlLINKMDt736RlJAurwxuZB9ZZPvjo4CzND6wzDL_UrLrrw2y5b_n0ay2WgKfDvIVAn6",
  KRAKEN: "https://zengo.com/wp-content/uploads/kraken_300x300@x2.png",
  LA_BANQUE_POSTALE: "https://web.bankin.com/img/banks-home-icons/fr/la-banque-postale.png",
  LAZARD_FRERES_BANQUE: "https://web.bankin.com/img/banks-home-icons/fr/lazard-freres-banque.png", 
  LCL: "https://web.bankin.com/img/banks-home-icons/fr/lcl.png",
  LIBERTEX: "https://play-lh.googleusercontent.com/kxkkLTHmsX90qyxE1OktA6t2PIaeEr1PXUwyf6GT-_986J-jk8cXyBwCtVw31Zf3Kg=w240-h480-rw",
  LIGHTYEAR: "https://play-lh.googleusercontent.com/6aaKikELgn6bvQjvA0O8CcfRMu1hk1o1JQZayc5-ZZGzGITpwLAy7mw3ukWUjFlgjVk=w240-h480-rw",
  LLOYDS: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Lloyds_Bank_logo_2024.svg/1200px-Lloyds_Bank_logo_2024.svg.png",
  LOUVRE_BANQUE_PRIVE: "https://web.bankin.com/img/banks-home-icons/fr/louvre-banque-privee.png",
  LUNAR: "https://pbs.twimg.com/ext_tw_video_thumb/1204432200508329984/pu/img/Tx2wG0FDRs8Fg0J1.jpg",
  LUNO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAman-PeVNTB5IuaZd26uJQgHrG5mz8Ahx0w&s",
  MA_FRENCH_BANK: "https://play-lh.googleusercontent.com/45YKe_hn5VlEphRFvCoTJ3ue9JxZ8SwxZM2xH5P8htP2l9YDhwRDqZ5iC3oOn_24MaOp",
  MANAGER_ONE: "https://web.bankin.com/img/banks-home-icons/fr/manager-one.png",
  MARKETS_COM: "https://icon2.cleanpng.com/20180907/yf/kisspng-markets-com-foreign-exchange-market-trader-broker-fai-trading-con-il-bonus-senza-deposito-1713942795922.webp",
  MEMOBANK: "https://web.bankin.com/img/banks-home-icons/fr/memo-bank.png",
  MILLEIS_BANQUE: "https://web.bankin.com/img/banks-home-icons/fr/milleis-banque.png", 
  MILLENNIUM_BCP: "https://web.bankin.com/img/banks-home-icons/pt/millennium-bcp.png",
  MONABANQ: "https://web.bankin.com/img/banks-home-icons/fr/monabanq.png",
  MONEYFARM: "https://play-lh.googleusercontent.com/TK-ltSowVw0K93bfmKPnv9n3Hmu6yLdY8wQcdEdGQzpaNSYlBEzKxG98d84peeLZbEg",
  MONTE_DEI_PASCHI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkvbYHVYCKOHTcyd0ogeiNPtQ6sy-nTaVNA&s",
  MONZO: "https://www.logo.wine/a/logo/Monzo_(bank)/Monzo_(bank)-Logo.wine.svg",
  NICKEL: "https://play-lh.googleusercontent.com/zNWUIunwswQk2GvYjS51FeZrD1KhZx9yaGnRzNxjErVpFzl5GjTsXavtF2u9oBu4Own2",
  NAGA: "https://s3-symbol-logo.tradingview.com/the-naga-ag--600.png",
  N26: "https://web.bankin.com/img/banks-home-icons/fr/n26.png",
  NUTMEG: "https://play-lh.googleusercontent.com/6uPo0FH21YTgqNZ8IcuW3n_qRoB_9iwOEYSnmSvlVeGHL4J3wnEJFBWxL-HYDPwpRu8",
  NATWEST: "https://logos-world.net/wp-content/uploads/2021/02/NatWest-Logo.png",
  NATIXIS: "https://web.bankin.com/img/banks-home-icons/fr/natixis.png",
  NEF_PRO: "https://web.bankin.com/img/banks-home-icons/fr/nef-pro.png",
  NOVO_BANCO : "https://web.bankin.com/img/banks-home-icons/pt/novo-banco.png",
  NOVOBANCO_DOS_ACORES: "https://web.bankin.com/img/banks-home-icons/pt/novobanco-dos-acores.png",
  ONLYONE: "https://onlyonecard.eu/wp-content/uploads/2023/01/logo_onlyone_name_transparent.svg",
  OPENBANK: "https://web.bankin.com/img/banks-home-icons/es/openbank.png",
  ORANGE_BANK: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVMbjnNZ6YBJnfw6INWmuSL3_d4CsvHcJTQ&s",
  PAYMIUM: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNJ8cv2hKXhs46GhYtlY_lHFRN5bOYuF9JA&s",
  PAYPAL: "https://web.bankin.com/img/banks-home-icons/fr/paypal.png",
  PEPPERSTONE: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmTTAPmfQ4rlJm0_0pUBBHYJDx316-wEIcA&s",
  PIXPAY: "https://cdn.prod.website-files.com/67dbd8426b4f2c45d0422564/68115011336949a8d872ad12_Frame%2014250.png",
  PLUS500: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgcLoVAnhRq1XyBNJUyZproly_tg1jnamhw&s",
  PROPULSE_BY_CA: "https://web.bankin.com/img/banks-home-icons/fr/propulse-by-ca.png",
  QONTO: "https://web.bankin.com/img/banks-home-icons/es/qonto.png",
  RABOBANK: "https://web.bankin.com/img/banks-home-icons/nl/rabobank.png",
  REVOLUT: "https://web.bankin.com/img/banks-home-icons/nl/revolut.png",
  ROTHSCHILD_MARTIN_MAUREL: "https://web.bankin.com/img/banks-home-icons/fr/rothschild-martin-maurel.png",
  SANTANDER: "https://web.bankin.com/img/banks-home-icons/es/santander.png",
  SAXO_BANK: "https://thebanks.eu/img/logos/Saxo_Bank.png",
  SCALABLE_CAPITAL: "https://asset.brandfetch.io/idPZpDlq7I/idqNRHSSqg.png",
  SHINE: "https://web.bankin.com/img/banks-home-icons/fr/shine.png",
  SOCIETE_GENERALE: "https://web.bankin.com/img/banks-home-icons/fr/sg.png",
  SOGEXIA: "https://cdn.prod.website-files.com/664c9627b45b9aa265f94304/6660a2710cdfdc3e3653dad7_Favicon%2032x32px.png",
  SPIFF: "https://spiff.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-15-at-11.49.32-AM.png",
  STAKE: "https://play-lh.googleusercontent.com/nkbOovQtDY7YD8JLIJXJnbD8zXnzixv50yaN9JYo9sCgjCUT-tyvNXJTLrxZ25oxwFiu",
  STANDARD_CHARTERED: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45uCMOZoXBmTzG6X-ZvKd2T0tILB2m2TPWQ&s",
  STARLING_BANK: "https://www.openbanking.org.uk/wp-content/uploads/2021/04/Starling-Bank-Logo-2-375x375.png",
  SWISSBORG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5SKdnFsekr6VHV1VjneXeXV0v30NZQOBmQ&s",
  THEMIS_BANQUE: "https://web.bankin.com/img/banks-home-icons/fr/themis-banque.png",
  TIDE: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9nFErWo0RUbijFLdjQ5KNyhnN31zY7rggg&s",
  TOMORROW: "https://play-lh.googleusercontent.com/SqWSo_zNi0FnV1CELDO7f7HI_Cu85kksuvut_tgMNmvv1G9QRrvBWoxsTSYzxCf8uw",
  TRADE_REPUBLIC: "https://img.cryptorank.io/coins/trade_republic1666019115974.png",
  TRADING_212: "https://storage.googleapis.com/neobanque-website/logo/trading212.webp",
  UBI_BANCA: "https://logoeps.com/wp-content/uploads/2014/01/ubi-banca-italy-vector-logo.png",
  UNICAJA: "https://web.bankin.com/img/banks-home-icons/es/unicaja.png",
  UNICREDIT: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejwWuj7YwFd09BJaImlwEdw-Wh5eeHzMcDQ&s",
  VIVID_MONEY: "https://play-lh.googleusercontent.com/xXphkdngYZfG3QR5WXcWy8fXo8LgfMgv03UiEaA4xroL82GGUgH8-LhnobjsYigDjA",
  VYBE: "https://vybecard.com/favicon.ico",
  WISE: "https://web.bankin.com/img/banks-home-icons/fr/wise.png",
  XTB: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN6wssSgwxDEC-bxYLtO_qi8ujSkGHaD6HA&s",
  YOMONI: "https://web.bankin.com/img/banks-home-icons/fr/yomoni.png",
  AUTRE: "/logo.png"
}

export const BankAccountType: Record<string, {value: string, icon: ElementType<{ color?: string }>}> = {
  CHECKING: {value: "checking", icon: CircleDollarToSlotIcon},
  CURRENT: {value: "current", icon: SackDollarIcon},
  COMPTE_CHEQUE: {value: "compte_cheque", icon: PeggyBankIcon},
  COMPTE_A_VUE: {value: "compte_a_vue", icon: CircleDollarToSlotIcon},
  COMPTE_DEPOT: {value: "compte_depot", icon: SackDollarIcon},
  COMPTE_JEUNE: {value: "compte_jeune", icon: PeggyBankIcon},
  COMPTE_JOINT: {value: "compte_joint", icon: HandshakeIcon},
  SAVINGS: {value: "savings", icon: HandHoldingDollarIcon},
  LIVRET_A: {value: "livret_a", icon: SackDollarIcon},
  LIVRET_JEUNE: {value: "livret_jeune", icon: PeggyBankIcon},
  LIVRET_LDD: {value: "livret_developpement_durable", icon: MedicalIcon},
  CEP: {value: "compte_epargne_populaire", icon: AwardIcon},
  PEL: {value: "plan_epargne_logement", icon: HandHoldingDollarIcon},
  CEL: {value: "compte_epargne_logement", icon: HouseUserIcon},
  FIXED_DEPOSIT: {value: "fixed_deposit", icon: MoneyBillWaveIcon},
  MONEY_MARKET: {value: "money_market", icon: LandmarkIcon},
  HIGH_YIELD_SAVINGS: {value: "high_yield_savings", icon: MoneyBillWaveIcon},
  BUSINESS: {value: "business", icon: BusinessTimeIcon },
  COMPTE_PRO: {value: "compte_pro", icon: GlobeIcon },
  CORPORATE: {value: "corporate", icon: SackDollarIcon },
  MERCHANT: {value: "merchant_account", icon: BusinessTimeIcon },
  CREDIT_CARD: {value: "credit_card", icon: HandHoldingDollarIcon },
  DEBIT_CARD: {value: "debit_card", icon: CircleDollarToSlotIcon },
  PREPAID_CARD: {value: "prepaid_card", icon: MoneyBillTrendUpIcon },
  INVESTMENT: {value: "investment", icon: PeggyBankIcon },
  RETIREMENT: {value: "retirement", icon: WineGlassIcon },
  PEA: {value: "plan_epargne_action", icon: PeggyBankIcon },
  PLAN_RETRAITE: {value: "plan_retraite", icon: FireIcon },
  STOCK_PLAN: {value: "stock_plan", icon: PeggyBankIcon },
  PRECIOUS_METALS: {value: "precious_metals", icon: MoneyBillWaveIcon },
  CRYPTO_WALLET: {value: "crypto_wallet", icon: MoneyBillTrendUpIcon },
  BITCOIN_WALLET: {value: "bitcoin_wallet", icon: CircleDollarToSlotIcon },
  ETHEREUM_WALLET: {value: "ethereum_wallet", icon: MoneyBillTrendUpIcon },
  DEFI_ACCOUNT: {value: "defi_account", icon: CircleDollarToSlotIcon },
  NFT_ACCOUNT: {value: "nft_account", icon: MoneyBillTrendUpIcon },
  STABLECOIN_WALLET: {value: "stablecoin_wallet", icon: CircleDollarToSlotIcon },
  LOAN: {value: "loan", icon: FireIcon },
  STUDENT_LOAN: {value: "student_loan", icon: SchoolIcon },
  AUTO_LOAN: {value: "auto_loan", icon: CarIcon },
  PERSONAL_LOAN: {value: "personal_loan", icon: HouseUserIcon },
  CASH: {value: "cash", icon: MoneyBillWaveIcon },
  PENSION_FUND: {value: "pension_fund", icon: WineGlassIcon },
  INSURANCE_ACCOUNT: {value: "insurance_account", icon: CircleDollarToSlotIcon },
  MULTI_CURRENCY: {value: "multi_currency", icon: MoneyBillWaveIcon },
  GIFT_CARD_ACCOUNT: {value: "gift_card_account", icon: GiftIcon },
  HEALTH_SAVINGS_ACCOUNT: {value: "health_savings_account", icon: MedicalIcon },
  CHILD_ACCOUNT: {value: "child_account", icon: HouseUserIcon },
  OTHER: {value: "other", icon: QuestionIcon }
}

export const ALL_ICONS: Record<
  string,
  ElementType<{ color?: string }> | string
> = {
  ...listIconCategory,
  ...FINANCIAL_PLATFORMS,
};

// Normalisation des types utilisés dans l'application pour un typage centralisé
export interface IBank {
  id: number;
  balance: number|string;
  type: string;
  label: string;
  icon: string;
}

export interface ICategory {
  id: number;
  icon: string;
  name: string;
  type?: number;
  base_category: string|undefined;
}

export interface ITransaction {
  id: number;
  date: Date;
  type: string;
  status: string;
  userId: number;
  bankId: number;
  amount: number|string;
  base_category: string;
  categoryId: number;
  description?: string | undefined;
}

export interface FinancialContextType {
  category: ICategory[]|null;
  addCategory: (params: {name: string, icon: string, type: number}) => Promise<unknown>;
  removeCategory: (params: {id?: number, base_category?:string, data?: {icon:string, type: 1|2}}) => Promise<unknown>;
  updateCategory: (params: {id?: number, base_category?: string, icon: string, name: string, type?: 1|2}) => Promise<unknown>;
  bank: IBank[]|null;
  addBank: (params: {label: string, type: string, balance: number, icon: string}) => Promise<unknown>;
  removeBank: ({id}: {id: number}) => Promise<unknown>;
  updateBank: ({id, label, type, balance, icon}: {id: number, label: string, type: string, balance: number, icon: string}) => Promise<unknown>;
  transaction: ITransaction[]|null;
  addTransaction : (params: {bankId: number, categoryId: number, amount: number, type: "credit"|"debit"|"transfert", status?: "pending"|"completed"|"failed", date?: string, description?: string, baseCategory?:string}) => Promise<unknown>
  removeTransaction : ({id}: {id: number}) => Promise<unknown>
  updateTransaction : (params: {bankId: number, categoryId: number, amount: number, id: number, status?: "pending"|"completed"|"failed", date?: string, description?: string; baseCategory?:string}) => Promise<unknown>
};