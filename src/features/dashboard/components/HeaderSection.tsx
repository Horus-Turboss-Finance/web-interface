import React from "react";
import { PlusIcon } from "../../../assets/plus";
import { IconButton } from "../../../components/buttons";
import type { IUser } from "../../../types/@types.user";

interface HeaderSectionProps {
  user: IUser | null;
  onAdd: () => void;
}

/**
 * HeaderSection - Affiche le header principal du Dashboard (utilisateur + bouton ajout).
 */
export const HeaderSection: React.FC<HeaderSectionProps> = ({ user, onAdd }) => (
  <header className="main-header">
    <div className="amount mobile-title display-lg">[SOON]</div>
    <div className="submessage">
      <h2 className="mobile-title display-sm">Hey {user?.pseudo} !</h2>
      <p className="mobile-subtitle textlg mediumText">
        Ton Kiff Score arrive bientôt 🚀
      </p>
    </div>
    <div className="addIcon desktop" onClick={onAdd}>
      <p className="text-md">Ajouter une transaction</p>
      <IconButton importance="primary" textBtn={<PlusIcon color="#fff" />} />
    </div>
  </header>
);