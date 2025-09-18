import { Button } from "./buttons";

export const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="micro-card">
    <h3 className="text-xl">{title}</h3>
    <p className="text-md">{desc}</p>
    <Button importance="optionnel" textBtn="Voir plus" linkAdr="/features" />
  </div>
);