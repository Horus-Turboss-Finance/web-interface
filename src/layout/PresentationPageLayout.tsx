import { Button } from "../components/buttons"
import { HeaderLogo } from "../components/header"
import { FooterLinksSection } from "../components/footers"

export const PresentationPageLayout = ({
    header,
    children
} : {
    header: {
        cta?: boolean
        uptitle?: string|React.ReactNode
        title: string|React.ReactNode
        subtitle: string|React.ReactNode
        darkMode?: boolean
        link_cta?: string
    },
    children: React.ReactNode
}) => {
    return (<>
        <header id="pageHeader" className={header.darkMode ? "darkMode" : ""}>
            <HeaderLogo />
            <main className={"pagePresentation" + " " + (header.darkMode ? "" : "whiteMode")}>
                <div className="left">
                    {header.uptitle && <p className="textBrandSecondaryColor">{header.uptitle}</p>}
                    <h1 className="display-md">{header.title}</h1>
                    <p className="subtle text-sm">{header.subtitle}</p>
                    {header.cta && <Button linkAdr="/#whitelistForm" importance="primary" textBtn="Rejoins la Whitelist" size="large" />}
                    {header.link_cta && <Button linkAdr="/#whitelistForm" importance="optionnel" textBtn={header.link_cta} size="large" />}
                </div>
                <div className="presentation-img">
                    {header.darkMode && <img src="/phone-example.png" alt="Exemple d'interface" />}
                </div>
            </main>
        </header>
        <main id="pageContent">
            {children}
        </main>
        <FooterLinksSection />
    </>)
}