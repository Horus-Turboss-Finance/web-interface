import React from "react";
import { PlusIcon } from "../../../assets/plus";
import { IconButton } from "../../../components/buttons";
import type { IUser } from "../../../types/@types.user";
import { KiffMessage } from "../../../components/kiff-message";
import { KiffMood } from "../utils/kiffMessage";

interface HeaderSectionProps {
  onAdd: () => void;
  user: IUser | null;
  kiff: number | null;
  kiffMessage: "relax" | "serré" | "alerte"
}

/**
 * HeaderSection - Affiche le header principal du Dashboard (utilisateur + bouton ajout).
 */
export const HeaderSection: React.FC<HeaderSectionProps> = ({ user, onAdd, kiff, kiffMessage }) => (
  <header className="main-header">
    <div className="amount mobile-title display-lg">{kiff} €</div>
    <div className="submessage">
      <h2 className="mobile-title display-sm">Hey {user?.pseudo} !</h2>
      <p className="mobile-subtitle textlg mediumText">
        <KiffMessage type={kiffMessage} message={KiffMood(kiffMessage)} />
      </p>
    </div>
    <div className="addIcon desktop" onClick={onAdd}>
      <p className="text-md">Ajouter une transaction</p>
      <IconButton importance="primary" textBtn={<PlusIcon color="#fff" />} />
    </div>
  </header>
);