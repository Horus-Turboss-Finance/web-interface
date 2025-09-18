import React, { useState } from "react";
import { Button } from "../../components/buttons";
import { EmailInput } from "../../components/inputs";
import { BannerMessage } from "../../components/message";
import { FeatureCard } from "../../components/featureCards";
import { subscribeToNewsletter } from "../api/newsletter/newsletterApi";

export const LandingContent: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const emailInput = document.getElementById("email") as HTMLInputElement;
    if(!emailInput || !emailInput.value) return;

    const email = emailInput.value;

    setSubmitted(true);

    subscribeToNewsletter({email}).then(()=>setSubmitted(true)).catch(() => {});
  }

  return (
    <>
      <section id="FeatureLanding">
        <header>
          <p className="info text-sm textBrandSecondaryColor">Features</p>
          <h2 className="display-sm">Ce que tu peux faire. Et c'est déjà pas mal.</h2>
          <p className="text-md">Une application qui vous considère, vous aide et vous accompagne pour réussir vos projets</p>
        </header>
        <main>
          {[{
            title: "Ajoute une dépense",
            desc: "En 5 secondes, t'écris : combien, quand quoi.\nC'est noté et tu peux déjà regarder l'évolution de ton kiff score",
          },{
            title: "Regarde ton Kiff Score",
            desc: "Paramètre le pour qu'il te monte si t'es encore large par jour, semaine ou mois.",
          },{
            title: "Organise à ta sauce",
            desc: "Resto, transports, kiff, c'est toi qui décides !",
          }].map(
            (f, i) => <FeatureCard key={i} {...f} />
          )}
        </main>
      </section>

      <section id="ctaLanding">
        <main>
          <div className="text-content">
            <h2 className="display-sm">C'est ton argent. <br/>Personne regarde.</h2>
            <p className="text-md">T'as rien à connecter. Pas de RIB, pas de flicage. C'est toi qui dis combien, et quand.</p>
          </div>
          <div className="button-content">
            <Button importance="primary" size="large" textBtn="Inscrit toi à la Whiteliste !" linkAdr="#whitelistForm" />
          </div>
        </main>
      </section>
      
      <section id="whitelistLanding">
        <div className="text-content">
          <h2 className="display-sm" id="whitelistForm">Tu veux tester en premier ?</h2>
          <p className="text-md">L'application se construit. Inscris toi pour avoir les mises à jours et rester informé.</p>
        </div>
        {submitted && <BannerMessage type="success" message="Merci à toi ! Nous t'inviterons dès l'ouverture !" handleClose={() => setSubmitted(false)} />}
        <form onSubmit={handleSubmit} className="button-content">
          <div className="input">
            <div className="group-valid">
              <EmailInput id="email" placeholder="ici-cest-la-hess@gmail.com" icon  />
            </div>
            <p className="subtle text-xs">
              Nous faisons attention à tes données privées dans notre <a href="/privacy">politique de confidentialité</a>
            </p>
          </div>
          <Button importance="primary" textBtn="Je m'inscris" type="submit" size="large" />
        </form>
      </section>
    </>
  )
}