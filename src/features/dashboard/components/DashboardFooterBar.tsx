// Sidebar de la Dashboard (desktop)
// -> Composant pur, pas de logique métier, reçoit uniquement des props
import React from "react";
import { GearIcon } from "../../../assets/gear";
import { PlusIcon } from "../../../assets/plus";
import { HeartIcon } from "../../../assets/heart";
import type { ModalFieldType } from "../types/types";
import { IconButton } from "../../../components/buttons";

interface DashboardSidebarProps {
  setModalType: (v: ModalFieldType ) => void;
}

export const DashboardFooterBar: React.FC<DashboardSidebarProps> = ({ setModalType }) => {
  return (
    <div className="footerBar">
      <div onClick={() => setModalType("createTransaction")}>
        <IconButton
          importance="primary"
          textBtn={<PlusIcon color="#fff" />}
        />
      </div>
      <div className="svgbar">
        <a href="/@me/setting" className="text-md">
          <GearIcon />
        </a>
        <a href="https://coff.ee/Horus.Turboss" className="text-md">
          <HeartIcon />
        </a>
      </div>
    </div>
  );
};