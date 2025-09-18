/* Composant de présentation (UI) de la page de connexion.
   Pourquoi : rester simple et déclaratif - toute la logique est dans `useSigninForm`.
*/

import { type FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import SigninSeo from '../features/auth/SigninSEO';
import { Button } from "../components/buttons";
import { BannerMessage } from "../components/message";
import { EmailInput, TextInput } from "../components/inputs";
import { validateSigninForm } from "../features/auth/validations/validation";
import type { SigninFormValues, SigninFormErrors } from "../features/auth/types/types";
import { mapSigninServerError } from "../features/auth/validations/mapServerError";

import useAuth from "../hooks/user";

export const SigninPage = () => {
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
  } = useForm<SigninFormValues, SigninFormErrors>({
    validate: validateSigninForm, 
    mapServerError: mapSigninServerError, 
    submitSuccessMessage: "Bienvenue ! Bon retour parmi nous 🎉", 
    onSubmit: async (valueSubmitted) => {
      await auth.login({
        email: valueSubmitted.email.trim(),
        password: valueSubmitted.password, // ne pas trim les mdp (caractères significatifs)
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
      <SigninSeo/>

      <div className="sign-content">
        <header>
          <h1 className="textlg">C'est bon de te revoir</h1>
          <p className="desc text-md">Nous sommes si heureux de te rendre service</p>
        </header>

        {/* noValidate pour que le navigateur ne fasse pas sa validation native en double */}
        <form onSubmit={onSubmit} noValidate aria-live="polite">
          <EmailInput 
            id="email" 
            stateInput={values.email}
            setStateInput={(v) => handleChange("email", String(v))}
            label="Identifiant" 
            obligatoire 
            placeholder="John.wick@gmail.com" 
            errorMessage={errors.email}
          />

          <div className="group-class-input margin-class">
            <TextInput 
              id="password"   
              stateInput={values.password}
              setStateInput={(v) => handleChange("password", String(v))}
              label="Mot de passe" 
              obligatoire 
              placeholder="•••••••••••••••••" 
              type="password" 
              errorMessage={errors.password}
            />
            {/* <a href="/password/forgot" className="text-xs">Tu as oublié ton mot de passe ?</a> */}
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
              textBtn={isSubmitting ? "Connection…" : "Se connecter"}
              disabled={isSubmitting || !isValid}
              type="submit" 
              size="large" 
            />
            <p className="text-xs">Besoin d'un compte ? <a href="/signup">S'inscrire</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;