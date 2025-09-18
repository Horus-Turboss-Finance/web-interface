import { useUser } from "../hooks/user";

import { Button } from "./buttons";

export const HeaderLogo = () => {
    const {token} = useUser()

    return (
        <div id="logo-bloc">
            <a href="/" className="logo"><img src="/logo.png" alt="Logo" /></a>
            <div className="button-content">
                {token ? 
                    <Button importance="primary" linkAdr="/@me" size="small" textBtn="Ouvrir le dashboard" />
                    :
                    <>
                        <Button importance="tertiary" linkAdr="/signup" size="small" textBtn="Inscription" /> 
                        <Button importance="primary" linkAdr="/signin" size="small" textBtn="Connexion" />
                    </>
                }
                
            </div>
        </div>
    );
}