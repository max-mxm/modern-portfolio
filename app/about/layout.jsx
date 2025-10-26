export const metadata = {
  title: "À Propos | Maxime Morellon - Développeur Senior Full-Stack & CTO",
  description: "Développeur Senior Full-Stack avec 7 ans d'expérience. Expert en React, Next.js, Java et automatisation IA. Actuellement CTO chez Davancorp. Plus de 50 projets livrés avec succès.",
  keywords: [
    "Maxime Morellon",
    "développeur senior",
    "full-stack developer",
    "CTO",
    "React expert",
    "Next.js specialist",
    "automatisation",
    "intelligence artificielle",
    "7 ans expérience",
    "Davancorp",
    "développeur Paris",
    "tech lead"
  ].join(", "),
  openGraph: {
    title: "À Propos | Maxime Morellon",
    description: "7 ans d'expérience en développement Full-Stack. Expert React, Next.js, Java et automatisation IA. CTO chez Davancorp.",
    type: "profile",
    url: "https://maxime-morellon.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | Maxime Morellon",
    description: "Développeur Senior Full-Stack avec 7 ans d'expérience. Expert en React, Next.js et automatisation IA.",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
