// Rôle : afficher la zone principale (header actions, tabs, transactions list).
// Pourquoi : séparer l'UI du hook/logic pour rendre le code testable et lisible.

import React, { useMemo } from "react";
import { FilterTabs } from "./FilterTabs";
import { EmptyState } from "./EmptyState";
import { HeaderSection } from "./HeaderSection";
import { TransactionList } from "./TransactionList";
import type { ModalFieldType } from "../types/types";
import { reduceDateFormat } from "../utils/dateUtils";
import type { IUser } from "../../../types/@types.user";
import { type ITransaction } from "../../../types/@types.financesParams";

interface DashboardContentProps {
  user: IUser | null;
  transactions: ITransaction[];
  transactionFilter: "debit" | "credit";
  setTransactionFilter: (t: "debit" | "credit") => void;
  setModalType: (t: ModalFieldType) => void;
  onSelectTransaction?: (tx: ITransaction) => void; // optional callback to let parent set selected transaction
}

/**
 * DashboardContent - Composant principal de la zone Dashboard
 * - Contient les sections : header, filtres (tabs), liste des transactions ou empty state.
 * Implementation notes:
 * - Composant pur : ne modifie pas les données, il notifie via callbacks.
 * - Ajout d'un petit filtre de mois en haut (utilise getLastNMonths) : utile pour UX.
 */
export const DashboardContent: React.FC<DashboardContentProps> = ({
  user,
  transactions,
  transactionFilter,
  setModalType,
  onSelectTransaction,
  setTransactionFilter,
}) => {
  // Regroupement des transactions par date (formatée)
  const groupedTransactions = useMemo(() => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .reduce(reduceDateFormat, {} as Record<string, ITransaction[]>);
  }, [transactions]);

  const hasTransactions = transactions.filter(e => e.type == transactionFilter).length > 0;

  return (
    <main className="main-content">
      <HeaderSection user={user} onAdd={() => setModalType("createTransaction")} />

      <article>
        <FilterTabs
          selectedFilter={transactionFilter}
          onSelect={setTransactionFilter}
        />

        <div className="transactions shadows-sm">
          {hasTransactions ? (
            <TransactionList
              groupedTransactions={groupedTransactions}
              filter={transactionFilter}
              setModalType={setModalType}
              onSelectTransaction={onSelectTransaction}
            />
          ) : (
            <EmptyState onCreate={() => setModalType("createTransaction")} />
          )}
        </div>
      </article>
    </main>
  );
};