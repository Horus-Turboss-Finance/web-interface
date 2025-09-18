// Ce fichier est l'ENTRY POINT de la page Dashboard
// -> Il assemble uniquement les sous-composants (Sidebar, Header, Content, Modal)
// -> Toute la logique de state et les hooks customisés sont externalisés
import React from "react";
import DashboardHeader from "../features/dashboard/DashbardSEO";
import { DashboardSidebar } from "../features/dashboard/components/DashboardSidebar";
import { DashboardContent } from "../features/dashboard/components/DashboardContent";
import { DashboardFooterBar } from "../features/dashboard/components/DashboardFooterBar";
import { useDashboard } from "../features/dashboard/hooks/useDashboard";
import { DashboardModal } from "../features/dashboard/components/DashboardModal";
import type { ModalFieldType } from "../features/dashboard/types/types";

export const DashboardPage: React.FC = () => {
  const {
    user,
    errors,
    modalData,
    modalType,
    transactions,
    isSubmitting,
    setModalType,
    handleChange,
    handleModalSubmit,
    transactionFilter,
    setTransactionFilter,
  } = useDashboard();

  const setsetModalType = (v: React.SetStateAction<ModalFieldType>) => {
    handleChange("type", `${transactionFilter == "debit"? "Dépenses": "Revenus"}`)
    return setModalType(v);
  }

  return (
    <div className="dashboard">
      {/* SEO Header */}
      <DashboardHeader />

      {/* Sidebar desktop */}
      <DashboardSidebar user={user} />

      {/* Main Content */}
      <DashboardContent
        user={user}
        transactions={transactions}
        transactionFilter={transactionFilter}
        setTransactionFilter={setTransactionFilter}
        setModalType={setsetModalType}
        onSelectTransaction={(t) => {
          handleChange("amount", Number(t?.amount))
          handleChange("bankId", String(t?.bankId))
          handleChange("baseCategory", t?.base_category)
          handleChange("categoryId", String(t?.categoryId))
          handleChange("date", t?.date?.toString())
          handleChange("description", t?.description||'')
          handleChange("id", String(t?.id))
          handleChange("type", t?.type)
        }}
      />

      {/* Footer Mobile */}
      <DashboardFooterBar setModalType={setsetModalType} />

      {/* Modal de création/édition */}
      {modalData && (
        <DashboardModal
          modalData={modalData}
          modalType={modalType}
          onClose={() => setModalType(null)}
          onSubmit={handleModalSubmit}
          isSubmitting={isSubmitting}
          errors={errors.global}
        />
      )}
    </div>
  );
};

export default DashboardPage;