import React, { useState } from 'react';
import { SettingBar } from '../components/settingBar';
import SettingsMetaSEO from '../features/settings/ProfilSettingSEO';
import SettingHeader from '../features/settings/components/SettingHeader';
import { useProfilSettings } from '../features/settings/hooks/useProfilSettings';
import { ModalSettingProfil } from '../features/settings/components/ModalWrapper';

import { Button } from '../components/buttons';
import type { ModalFieldType } from '../features/settings/types/ProfiTypes';

export const ProfilSettings: React.FC = () => {
  const {  
    user,
    modalData,
    modalType,
    isSubmitting,
    setModalType,
    onDeleteClick,
    handleModalSubmit,
    
  } = useProfilSettings()
  const [isClose, setIsClose] = useState(true);

  return (
    <div className="setting-page" onClick={() => {if (!isClose) setIsClose(!isClose)}}>
      <SettingsMetaSEO />
      <SettingBar close={isClose} />

      <main className='main-settings'>
        <div className="content-setting">
          <SettingHeader close={isClose} setClose={setIsClose} title='Profil' />
          <main className="cardProfil shadows-sm">
            <div className="banner" style={{ backgroundColor: user?.banner ?? "#EFCB8C" }}></div>
            <div className="profilPicture">
              <div className="containerImg">
                <img src={user?.PPURL??"/logo.png"} alt="Profile picture" />
              </div>
              <h3 className="text-xl">{user?.pseudo??""}</h3>
            </div>

            <div className="formPage">
              {[
                { label: "Pseudo", value: user?.pseudo ?? "", field: "pseudo" },
                { label: "Nom", value: user?.name ?? "", field: "name" },
                { label: "Email", value: user?.email ?? "", field: "email" },
              ].map(({ label, value, field }) => (
                <div className="input-group-form" key={field}>
                  <div className="left">
                    <h4 className="text-sm">{label}</h4>
                    <p className="text-md">{value}</p>
                  </div>
                  <div className="rigth" onClick={() => setModalType(field as ModalFieldType)}>
                    <Button
                      importance='secondary'
                      textBtn='Modifier'
                      size='small'
                    />
                  </div>
                </div>
              ))}
            </div>
          </main>

          <footer className="sensible">
            <div className="securityZone">
              <div className="password">
                {/* <h3 className="text-md">Mot de passe et clés d'authentification</h3> */}
                <h3 className="text-md">Sécurité du compte</h3>
                <div className="clickon" onClick={() => setModalType("password" as ModalFieldType)}><Button importance='primary' textBtn='Réinitialiser le mot de passe' size='large' /></div>
              </div>
              {/* <div className="authKeys">
                <h4 className="text-sm">Clé d'authentification</h4>
                <p className="text-sm">Sécurise ton compte avec des clés d'authentification</p>
                <Button importance='primary' textBtn='Enregistrer mes clés' size='large' />
              </div> */}
            </div>
            <div className="dangerZone">
              <h3 className="text-md">Suppression du compte</h3>
              <p className="text-sm">Attention, ceci est irréversible</p>
              <div onClick={onDeleteClick}>
                <Button importance='secondary' textBtn='Supprimer mon compte' size='large' destructive />
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Affichage du Modal conditionnel */}
      {modalData && (
        <ModalSettingProfil
          modalData={modalData}
          modalType={modalType}
          onClose={() => setModalType(null)}
          onSubmit={handleModalSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default ProfilSettings;