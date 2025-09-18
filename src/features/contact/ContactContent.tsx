import type { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { submitContact } from "./api/contactApi";
import { Button } from "../../components/buttons";
import { Checkbox } from "../../components/checkbox";
import { validateContactForm } from "./validations/validation";
import { BannerMessage } from "../../components/message";
import { mapContactServerError } from "./validations/mapServerError";
import type { ContactFormErrors, ContactFormValues } from "./types/types";
import { CardContact } from "../../components/contact-cards";
import { EmailInput, TextareaInput, TextInput } from "../../components/inputs";

export const ContactContent: React.FC = () => {
  const {
    values,
    errors,
    isValid,
    isSubmitting,
    successMessage,
    setErrors,
    handleChange,
    handleSubmit,
    setSuccessMessage,
  } = useForm<ContactFormValues, ContactFormErrors>({
    validate: validateContactForm, 
    mapServerError: mapContactServerError, 
    submitSuccessMessage: "Merci pour votre message, nous avons hâte de le lire ✨", 
    onSubmit: async (valueSubmitted) => {
      await submitContact({
        ...valueSubmitted,
        // Optionnel: trim au bord du réseau pour éviter les surprises côté API
        firstName: valueSubmitted.firstName.trim(),
        lastName: valueSubmitted.lastName.trim(),
        email: valueSubmitted.email.trim(),
        message: valueSubmitted.message.trim(),
      });
  }});

  // Convertit l'envoi du form standard en appel à handleSubmit (qui renvoie une Promise).
  // On empêche le comportement par défaut et on appelle notre handler.
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit();
  };

  return (<main className="main-contact-page">
  <div className="cards-line" aria-hidden={false}>
    <CardContact title="Contacts spécifiques" icon="thumbtack">
      <ul>
        <li>Partnerships → À venir</li>
        <li>Press / Media → À venir</li>
        <li>Bug reporting → À venir</li>
        <li>Technical support → À venir</li>
      </ul>
    </CardContact>

    <CardContact title="Nos horaires" icon="clock">
      <>
        <p className="text-md">Nous sommes disponibles :</p>
        <p className="text-sm">Du <strong>lundi au vendredi</strong></p>
        <p className="text-sm">De <strong>10:00 à 14:00</strong> (Heure de Paris)</p>
      </>
    </CardContact>

    <CardContact title="Nos réseaux professionnels" icon="link">
      <ul>
        <li><a href="https://x.com/HorusTFinance">X</a></li>
        <li><a href="https://github.com/Horus-Turboss-Finance">Github</a></li>
        <li><a href="https://www.linkedin.com/company/cash-sight">LinkedIn</a></li>
      </ul>
    </CardContact>
  </div>

  <div className="form">
    <header className="pagePresentation whiteMode">
      <p className="textBrandSecondaryColor">Contactez-nous</p>
      <h2 className="display-xs">Prendre contact</h2>
      <p className="subtle text-sm">Nous serions ravis de connaître votre avis. Veuillez remplir ce formulaire.</p>
    </header>

    <form className="contact-form" onSubmit={onSubmit} noValidate aria-live="polite">
      <div className="name-input group-input" role="group" aria-label="Votre identité">
        <TextInput
          id="first-name"
          label="Prénom"
          stateInput={values.firstName}
          setStateInput={(v) => handleChange("firstName", String(v))}
          obligatoire
          placeholder="John"
          errorMessage={errors.firstName}
        />
        <TextInput
          id="last-name"
          label="Nom"
          stateInput={values.lastName}
          setStateInput={(v) => handleChange("lastName", String(v))}
          obligatoire
          placeholder="Wick"
          errorMessage={errors.lastName}
        />
      </div>

      <div className="group-input">
        <EmailInput
          id="email"
          label="Email"
          stateInput={values.email}
          setStateInput={(v) => handleChange("email", String(v))}
          obligatoire
          placeholder="john.wick@gmail.com"
          errorMessage={errors.email}
        />
      </div>

      <div className="group-input">
        <TextareaInput
          id="message"
          label="Message"
          obligatoire
          placeholder="Laissez-nous un message"
          errorMessage={errors.message}
        />
      </div>

      <div className="group-input">
        <Checkbox
          checkValue={values.acceptPrivacy}
          setCheckValue={(checked) => handleChange("acceptPrivacy", checked)}

          label={<>
            Je suis d'accord avec notre sympathique{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>
          </>}
        />
      </div>

      {/* Messages / erreurs globales */}
      {errors.global && (
        <BannerMessage
          type="error"
          message={errors.global}
          handleClose={() => { setErrors({}) }}
        />
      )}

      {successMessage && (
        <BannerMessage
          type="success"
          message={successMessage}
          handleClose={() => setSuccessMessage(null)}
        />
      )}

      <div className="form-actions">
        <Button
          importance="primary"
          textBtn={isSubmitting ? "Envoi…" : "Envoyer le message"}
          disabled={isSubmitting || !values.acceptPrivacy || !isValid}
          type="submit"
          size="large"
          aria-disabled={isSubmitting || !values.acceptPrivacy || !isValid}
        />
      </div>
    </form>
  </div>
  </main>)
} 