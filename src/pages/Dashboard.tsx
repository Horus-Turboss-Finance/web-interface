// Ce fichier est l'ENTRY POINT de la page Dashboard
// -> Il assemble uniquement les sous-composants (Sidebar, Header, Content, Modal)
// -> Toute la logique de state et les hooks customisés sont externalisés
import React from "react";
import DashboardHeader from "../features/dashboard/DashbardSEO";
import { useDashboard } from "../features/dashboard/hooks/useDashboard";
import type { ModalFieldType } from "../features/dashboard/types/types";
import { DashboardModal } from "../features/dashboard/components/DashboardModal";
import { DashboardSidebar } from "../features/dashboard/components/DashboardSidebar";
import { DashboardContent } from "../features/dashboard/components/DashboardContent";
import { DashboardFooterBar } from "../features/dashboard/components/DashboardFooterBar";

export const DashboardPage: React.FC = () => {
  const {
    user,
    errors,
    kiffData,
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

  const kiffMood = kiffData?.mood ?? "alerte"

  return (
    <div className="dashboard">
      {/* SEO Header */}
      <DashboardHeader />

      {/* Sidebar desktop */}
      <DashboardSidebar user={user} kiff={kiffData?.kiff_ajuste ?? kiffData?.kiff_brut ?? 3} kiffMessage={kiffMood} />

      {/* Main Content */}
      <DashboardContent
        user={user}
        transactions={transactions}
        setModalType={setsetModalType}
        kiffMessage={kiffMood}
        transactionFilter={transactionFilter}
        setTransactionFilter={setTransactionFilter}
        kiff={kiffData?.kiff_ajuste ?? kiffData?.kiff_brut ?? 3} 
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