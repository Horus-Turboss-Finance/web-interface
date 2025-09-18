import { FooterLinks } from './footerLinks';

export const FooterLinksSection = () => {
    return (
      <footer id="footerLanding">
        <div className="signature-website">
          <a href='/' className="logo">
            <img src="/logo.png" alt="Logo" />
            <h1 className="display-sm">Cash Sights</h1>
          </a>
          <div className="copyright">
            <p className="text-md">© 2025 Cash Sights. All rights reserved.</p>
          </div>
        </div>
        <nav className="navi">
          <FooterLinks
            title="Réseaux sociaux"
            links={[
              { label: "X", href: "https://x.com/HorusTFinance" },
              { label: "Github", href: "https://github.com/Horus-Turboss-Finance" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/cash-sight" },
            ]}
          />
          <FooterLinks
            title="Informations légales"
            links={[
              { label: "Politique de confidentialité", href: "/privacy" },
              { label: "Mentions légales", href: "/legals" },
              { label: "Cookies", href: "/cookies" },
              { label: "CGU", href: "/terms" },
            ]}
          />
          <FooterLinks
            title="Produits"
            links={[
              { label : "Fonctionnalités", href: "/features"}
            ]}
          />
          <FooterLinks
            title="Entreprise"
            links={[
              { label: "À propos", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </nav>
      </footer>
    )
}