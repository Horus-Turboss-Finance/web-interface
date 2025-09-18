export const FooterLinks = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
    <div className="containlinks">
        <h4 className="text-sm">{title}</h4>
        <nav>
        {links.map((link, i) => (
            <a key={i} href={link.href}>{link.label}</a>
        ))}
        </nav>
    </div>
);