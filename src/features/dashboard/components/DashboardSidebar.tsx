// Sidebar de la Dashboard (desktop)
// -> Composant pur, pas de logique métier, reçoit uniquement des props
import React from "react";
import { KiffMood } from "../utils/kiffMessage";
import type { IUser } from "../../../types/@types.user";
import { KiffMessage } from "../../../components/kiff-message";

interface DashboardSidebarProps {
  user: IUser | null;
  kiff: number | null;
  kiffMessage: "relax" | "serré" | "alerte";
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ user, kiff, kiffMessage }) => (
  <aside className="sidebar">
    <div className="sidebar-top">
      <h2 className="display-sm">Hey {user?.pseudo} !</h2>
        <div className="submessage">
          <div className="amount display-lg">{kiff} €</div>
          <p className="subtitle text-lg mediumText">
            <KiffMessage type={kiffMessage} message={KiffMood(kiffMessage)} />
            </p>
        </div>
      <p className="subtitle text-lg mediumText"></p>
    </div>

    <div className="line"></div>

    <div className="footer-side-bar">
      <nav className="sidebar-menu">
        <a href="/@me/setting" className="text-md">Paramètres</a>
        <a href="https://coff.ee/Horus.Turboss" className="text-md supportUs">Supportez-nous ☕</a>
      </nav>
      <div className="sidebar-logo">
        <img src="/logo.png" alt="logo" />
        <p className="display-sm">Cash Sights</p>
      </div>
    </div>
  </aside>
);