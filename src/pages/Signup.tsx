/* Composant de présentation (UI) de la page d'inscription.
   Pourquoi : rester simple et déclaratif - toute la logique est dans `useSignupForm`.
*/

import useAuth from "../hooks/user";
import { type FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import SignUpSeo from '../features/auth/SignupSEO';
import { Button } from "../components/buttons";
import { Checkbox } from "../components/checkbox";
import { BannerMessage } from "../components/message";
import { EmailInput, TextInput } from "../components/inputs";
import { validateSignupForm } from "../features/auth/validations/validation";
import type { SignupFormErrors, SignupFormValues } from "../features/auth/types/types";
import { mapSigninServerError } from "../features/auth/validations/mapServerError";

export function SignupPage() {
  const auth = useAuth()
  const {
    values,
    errors,
    isSubmitting,
    successMessage,
    isValid,
    setErrors,
    handleChange,
    handleSubmit,
    setSuccessMessage,
  } = useForm<SignupFormValues, SignupFormErrors>({
    validate: validateSignupForm, 
    mapServerError: mapSigninServerError, 
    submitSuccessMessage: "Bienvenue ! Ton compte a bien été créé 🎉", 
    onSubmit: async (valueSubmitted) => {
      await auth.signup({
        email: valueSubmitted.email.trim(),
        password: valueSubmitted.password, // ne pas trim les mdp (caractères significatifs)
        name: valueSubmitted.name.trim(),
      });
  }});

  // Handle submit du formulaire natif => on appelle notre handleSubmit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit();
  };

  return (
    <div className="connecticPage">
      {/* SEO séparé */}
      <SignUpSeo />

      <div className="sign-content">
        <header>
          <h1 className="textlg">Bienvenue parmi nous !</h1>
          <p className="desc text-md">Nous avons hâte de te rendre service</p>
        </header>

        {/* noValidate pour que le navigateur ne fasse pas sa validation native en double */}
        <form onSubmit={onSubmit} noValidate aria-live="polite">
          {/* Nom */}
          <TextInput
            id="name"
            label="Nom"
            stateInput={values.name}
            setStateInput={(v) => handleChange("name", String(v))}
            placeholder="John Wick"
            obligatoire
            errorMessage={errors.name}
          />

          {/* Email */}
          <EmailInput
            id="email"
            label="Email"
            stateInput={values.email}
            setStateInput={(v) => handleChange("email", String(v))}
            placeholder="john.wick@gmail.com"
            obligatoire
            errorMessage={errors.email}
          />

          {/* Password */}
          <TextInput
            id="password"
            label="Mot de passe"
            stateInput={values.password}
            setStateInput={(v) => handleChange("password", String(v))}
            placeholder="••••••••"
            obligatoire
            type="password"
            errorMessage={errors.password}
          />

          {/* Checkbox Accept Terms */}
          <div className="group-class-input margin-class">
            <Checkbox 
              checkValue={values.acceptTerms}
              setCheckValue={(checked) => handleChange("acceptTerms", checked)}
              label={<>Je suis d'accord avec nos sympathiques <a href="/terms" target="_blank" rel="noopener noreferrer">conditions d'utilisation</a></>}
            />
          </div>

          {/* Affichage d'erreur globale si besoin */}
          {errors.global && (
            <BannerMessage type="error" message={errors.global} handleClose={() => setErrors({})} />
          )}

          {/* Affichage message succès */}
          {successMessage && (
            <BannerMessage type="success" message={successMessage} handleClose={() => setSuccessMessage(null)} />
          )}

          <div className="group-class-input">
            <Button
              importance="primary"
              textBtn={isSubmitting ? "Inscription…" : "S'inscrire"}
              disabled={isSubmitting || !values.acceptTerms || !isValid}
              type="submit"
              size="large"
            />
            <p className="text-xs">Déjà un compte ? <a href="/signin">Se connecter</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;