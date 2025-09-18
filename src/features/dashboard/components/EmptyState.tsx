import React from "react";
import { Button } from "../../../components/buttons";

interface EmptyStateProps {
  onCreate: () => void;
}

/**
 * EmptyState - Affiche un message quand aucune transaction n'est encore présente.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ onCreate }) => (
  <div className="date-group fullpage">
    <h3 className="text-md">Commence par créer une transaction</h3>
    <p className="text-sm">
      Ton kiff score se base sur tes transactions. Rends le plus précis en créant ta première transaction.
    </p>
    <div onClick={onCreate}>
      <Button importance="primary" textBtn="Je crée une transaction" size="large" />
    </div>
  </div>
);