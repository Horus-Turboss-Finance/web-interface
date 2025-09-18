import React, { useState } from 'react';
import { SettingBar } from '../components/settingBar';
import SettingsMetaSEO from '../features/settings/GeneralSettingSEO';
import { BankList } from '../features/settings/components/BankList';
import { CategoryList } from '../features/settings/components/CategoryList';
import { ModalSettingGeneral } from '../features/settings/components/ModalWrapper';
import { useGeneralSettings } from '../features/settings/hooks/useGeneralSettings';
import { SettingHeader } from '../features/settings/components/SettingHeader';

/**
 * Composant principal de la page des réglages généraux.
 * Interface utilisateur uniquement - la logique est encapsulée dans useGeneralSettings.
 */
export const GeneralSettingsPage: React.FC = () => {
  const {
    bank,
    errors,
    category,
    modalData,
    modalType,
    isSubmitting,
    setModalType,
    handleChange,
    handleModalSubmit,
  } = useGeneralSettings();
  const [isClose, setIsClose] = useState(true);


  return (
    <div className="setting-page" onClick={() => { if (!isClose) setIsClose(!isClose) }}>
      <SettingsMetaSEO />
      <SettingBar close={isClose} />

      <main className="main-settings">
        <div className="content-setting">
          <SettingHeader close={isClose} setClose={setIsClose} title='Général' noLine={true}/>
          {/* Comptes bancaires */}
          <section className="section">
            <h2 className="text-md">Comptes bancaires</h2>
            <div className="line"></div>

            <BankList bank={bank} setModalType={setModalType} onSelectBank={(b) => {
              if (isSubmitting) return;
              handleChange("amount", Number(b.balance))
              handleChange("icon", b.icon)
              handleChange("id", String(b.id))
              handleChange("label", b.label)
              handleChange("type", b.type)
            }} />
          </section>

          {/* Catégories */}
          <section className="section">
            <h2 className="text-md">Catégories</h2>
            <div className="line"></div>

            <CategoryList category={category} setModalType={setModalType} setFilterCategoryType={(v) => handleChange("type", `${v == 1 ? "Dépenses" : "Revenus"}`)} onSelectCategory={(c) =>{
              if (isSubmitting) return;
              handleChange("base_category", c.id == 0 ? c.name : c.base_category)
              handleChange("icon", c.icon)
              handleChange("id", String(c.id))
              handleChange("label", c.name)
              handleChange("type", c.type == 1 ? "Dépenses" : "Revenus")
            }} />
          </section>
        </div>
      </main>

      {/* Modal centralisé */}
      {modalData && (
        <ModalSettingGeneral 
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

export default GeneralSettingsPage;