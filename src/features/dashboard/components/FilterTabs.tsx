import React from "react";
import { Button } from "../../../components/buttons";

interface FilterTabsProps {
  selectedFilter: "debit" | "credit";
  onSelect: (filter: "debit" | "credit") => void;
}

/**
 * FilterTabs - Onglets pour filtrer les transactions (Dépenses / Revenus).
 */
export const FilterTabs: React.FC<FilterTabsProps> = ({
  selectedFilter,
  onSelect,
}) => (
  <div className="tabs">
    <div onClick={() => onSelect("debit")}>
      <Button
        importance={selectedFilter === "debit" ? "primary" : "tertiary"}
        textBtn="Dépenses"
      />
    </div>
    <div onClick={() => onSelect("credit")}>
      <Button
        importance={selectedFilter === "credit" ? "primary" : "tertiary"}
        textBtn="Revenus"
      />
    </div>
  </div>
);