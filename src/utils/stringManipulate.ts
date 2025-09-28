import { BankTypeValue } from "../types/@types.financesParams"

export const formatBegginWord = (entit : string) => {
  return entit.split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const balanceSpaces = (balance : number) => {
  return `${
  Number(balance.toFixed(0)).toLocaleString() + 
  (`${balance}`.indexOf('.') !== -1 ? '.' + (Number(`${balance}`).toFixed(2).slice(`${balance}`.indexOf(".")+1)) : '.00')} €`
}

export const getAccountTypeLabel = (type: keyof typeof BankTypeValue): string => {
  const labels = {
    [BankTypeValue.CURRENT]: "Compte courant",
    [BankTypeValue.COMPTE_JOINT]: "Compte joint",
    [BankTypeValue.COMPTE_JEUNE]: "Compte jeune",

    [BankTypeValue.LIVRET_A]: "Livret A",
    [BankTypeValue.LIVRET_JEUNE]: "Livret Jeune",
    [BankTypeValue.LIVRET_LDD]: "Livret de développement durable",
    [BankTypeValue.CEP]: "Compte épargne populaire",
    [BankTypeValue.PEL]: "Plan épargne logement",
    [BankTypeValue.CEL]: "Compte épargne logement",

    [BankTypeValue.CREDIT_CARD]: "Carte de crédit",
    [BankTypeValue.DEBIT_CARD]: "Carte de débit",
    [BankTypeValue.PREPAID_CARD]: "Carte prépayée",
    [BankTypeValue.VIRTUAL_CARD]: "Carte virtuelle",

    [BankTypeValue.PEA]: "Plan d'épargne en actions",
    [BankTypeValue.PLAN_RETRAITE]: "Plan retraite",

    [BankTypeValue.CRYPTO_WALLET]: "Portefeuille crypto",
    [BankTypeValue.BITCOIN_WALLET]: "Portefeuille Bitcoin",
    [BankTypeValue.ETHEREUM_WALLET]: "Portefeuille Ethereum",

    [BankTypeValue.PERSONAL_LOAN]: "Prêt personnel",
    [BankTypeValue.STUDENT_LOAN]: "Prêt étudiant",
    [BankTypeValue.AUTO_LOAN]: "Prêt auto",
    [BankTypeValue.REVOLVING_CREDIT]: "Crédit immobilier",
    [BankTypeValue.OVERDRAFT_ACCOUNT]: "Découvert autorisé",

    [BankTypeValue.CHILD_ACCOUNT]: "Compte enfant",
    [BankTypeValue.CASH]: "Espèces",
    [BankTypeValue.OTHER]: "Autre",
  } as Record<keyof typeof BankTypeValue, string>

  return labels[type] || "Autre"
}