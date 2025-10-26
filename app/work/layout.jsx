export const metadata = {
  title: "Projets | Maxime Morellon - Portfolio Développeur Senior",
  description: "Découvrez mes 6 derniers projets professionnels : Davancorp (CTO), Ministère de l'Intérieur (Tech Lead), projets gouvernementaux, Airbus et Total. Plus de 50 projets livrés avec succès.",
  keywords: [
    "portfolio développeur",
    "projets React",
    "projets Next.js",
    "développement gouvernemental",
    "Davancorp",
    "Ministère Intérieur",
    "Airbus",
    "Total",
    "projets full-stack",
    "automatisation IA",
    "tech lead projets",
    "références développeur"
  ].join(", "),
  openGraph: {
    title: "Projets | Maxime Morellon",
    description: "Portfolio de 6 projets majeurs : CTO Davancorp, Tech Lead ministères, Airbus, Total. Expertise en React, Java et automatisation.",
    type: "website",
    url: "https://maxime-morellon.dev/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | Maxime Morellon",
    description: "Portfolio de projets : Davancorp, ministères, Airbus, Total. Expertise React, Java et automatisation IA.",
  },
};

export default function WorkLayout({ children }) {
  return children;
}
