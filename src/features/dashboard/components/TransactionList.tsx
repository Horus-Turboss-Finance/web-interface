import React from "react";
import type { ModalFieldType } from "../types/types";
import { useFinancial } from "../../../hooks/financial";
import { balanceSpaces } from "../../../utils/stringManipulate";
import { BtnCard } from "../../../components/linkcards";
import {
  listIconCategory,
  defaultCategories,
  type ITransaction,
} from "../../../types/@types.financesParams";

interface TransactionListProps {
  groupedTransactions: Record<string, ITransaction[]>;
  filter: "debit" | "credit";
  setModalType: (t: ModalFieldType) => void;
  onSelectTransaction?: (tx: ITransaction) => void;
}

/**
 * TransactionList - Affiche les transactions groupées par date, avec filtre sur type.
 */
export const TransactionList: React.FC<TransactionListProps> = ({
  groupedTransactions,
  filter,
  setModalType,
  onSelectTransaction,
}) => {
  const { category, bank } = useFinancial();

  return (
    <>
      {Object.entries(groupedTransactions).map(([dateLabel, txs]) => {
        // Si aucun tx après filtrage par type on n'affiche pas la date
        const filteredByType = txs.filter((t) => t.type === filter);
        if (filteredByType.length === 0) return null;

        return (
          <div key={dateLabel} className="date-group">
            <h3 className="text-md">{dateLabel}</h3>
            <div className="transaction-group">
              {filteredByType.map((tx) => {
                // Titre : base_category > category.name > "Autre"
                const title =
                  tx.base_category ||
                  category?.find((e) => e.id === tx.categoryId)?.name ||
                  "Autre";

                const subtitle =
                  bank?.find((e) => e.id === tx.bankId)?.label ?? "";
                
                // Icon resolution (best-effort): if base_category present map via defaultCategories etc.
                const def =
                  category?.find((e) => e.id === tx.categoryId) ||
                  defaultCategories.find((e) => e.label === tx.base_category);

                const IconComp = listIconCategory[def?.icon ?? ""];
                const IconElement = IconComp ? (
                  <IconComp color="#5d6b98" />
                ) : (
                  "/logo.png"
                );

                // Key construit à partir d'identifiants pour éviter collision
                const key = `${tx.id}-${tx.type}-${tx.amount}-${tx.date}`;

                return (
                  <BtnCard
                    key={key}
                    title={title}
                    amount={`${balanceSpaces(Number(tx.amount))} €`}
                    subTitle={subtitle}
                    Icon={IconElement}
                    size="large"
                    onClickFunc={() => {
                      // On notifie le parent que l'utilisateur veut éditer une transaction
                      if (onSelectTransaction) onSelectTransaction(tx);
                      setModalType("editTransaction");
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};