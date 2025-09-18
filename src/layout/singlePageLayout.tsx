import React from 'react';
import { Button } from '../components/buttons';

/**
 * Interface définissant les propriétés attendues par le layout.
 * - `title`: le titre principal de la page.
 * - `description`: le texte explicatif ou d'erreur.
 * - `isDashboardRedirect`: si `true`, le bouton redirige vers le tableau de bord de l'utilisateur.
 */
interface SinglePageLayoutProps {
  title: string;
  description: string;
  isDashboardRedirect?: boolean;
}

/**
 * SinglePageLayout est un composant de présentation utilisé pour des pages isolées (erreurs, maintenance, etc.).
 * Il centralise le contenu avec un titre, une description et un bouton de redirection contextuel.
 */
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({
  title,
  description,
  isDashboardRedirect = false,
}) => {
  const buttonLabel = isDashboardRedirect ? 'Go back to dashboard' : 'Go back to home';
  const buttonLink = isDashboardRedirect ? '/@me' : '/';

  return (
    <div className="single-page-layout">
      <h1 className="display-md single-page-layout__title">{title}</h1>
      <p className='single-page-layout__description'>{description}</p>
      <Button importance="primary" textBtn={buttonLabel} linkAdr={buttonLink} />
    </div>
  );
};

export default SinglePageLayout;