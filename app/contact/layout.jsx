export const metadata = {
  title: "Contact | Maxime Morellon - Développeur Senior disponible",
  description: "Contactez Maxime Morellon pour vos projets web. Disponible pour missions freelance, CTO, tech lead ou développement React/Next.js. Réponse rapide garantie.",
  keywords: [
    "contact développeur",
    "freelance React",
    "CTO disponible",
    "tech lead freelance",
    "mission développement",
    "freelance Next.js",
    "développeur Paris",
    "automatisation IA",
    "consultant technique",
    "mission full-stack"
  ].join(", "),
  openGraph: {
    title: "Contact | Maxime Morellon",
    description: "Disponible pour missions freelance, CTO, tech lead. Expert React, Next.js et automatisation IA.",
    type: "website",
    url: "https://maxime-morellon.dev/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact | Maxime Morellon",
    description: "Contactez-moi pour vos projets web. Disponible pour missions freelance et consulting technique.",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
