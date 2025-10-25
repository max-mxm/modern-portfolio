import { Sora } from "next/font/google";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import "../styles/globals.css";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Maxime Morellon | Développeur Senior Front-end & Automatisation IA",
  description: "Maxime Morellon - Développeur senior front-end avec 7 ans d'expérience, spécialisé en React, Next.js, automatisation et IA. Expert en architecture logicielle, développement full-stack et solutions d'automatisation intelligentes.",
  keywords: [
    "Maxime Morellon",
    "développeur senior front-end",
    "senior front-end developer",
    "automatisation IA",
    "automatisation intelligente",
    "React expert",
    "Next.js spécialiste",
    "développeur senior Paris",
    "front-end architecture",
    "automatisation web",
    "IA développement",
    "React Next.js",
    "TypeScript expert",
    "full-stack senior",
    "CTO développeur",
    "automatisation processus",
    "intelligence artificielle",
    "développement web senior",
    "Paris front-end developer"
  ].join(", "),
  author: "Maxime Morellon",
  creator: "Maxime Morellon",
  publisher: "Maxime Morellon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://maxime-morellon.dev',
    siteName: 'Maxime Morellon Portfolio',
    title: 'Maxime Morellon | Développeur Senior Front-end & Automatisation IA',
    description: 'Maxime Morellon - Développeur senior front-end avec 7 ans d\'expérience. Spécialiste React, Next.js, automatisation et IA. Expert en architecture logicielle et solutions intelligentes.',
    images: [
      {
        url: 'https://maxime-morellon.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maxime Morellon - Développeur Senior Front-end & Automatisation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxime Morellon | Développeur Senior Front-end & Automatisation IA',
    description: 'Développeur senior front-end spécialisé en React, Next.js, automatisation et IA. 7 ans d\'expérience en architecture logicielle.',
    creator: '@maximemorellon',
    images: ['https://maxime-morellon.dev/og-image.png'],
  },
  alternates: {
    canonical: 'https://maxime-morellon.dev',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  themeColor: "#3f24f1ff",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxime Morellon",
    jobTitle: "Développeur Senior Front-end & CTO",
    description: "Développeur senior front-end avec 7 ans d'expérience, spécialisé en automatisation, IA, React et Next.js",
    url: "https://maxime-morellon.dev",
    image: "https://maxime-morellon.dev/og-image.png",
    sameAs: [
      "https://github.com/maximemorellon",
      "https://linkedin.com/in/maximemorellon",
      "https://twitter.com/maximemorellon"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR"
    },
    knowsAbout: [
      "Développement Front-end",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Automatisation",
      "Intelligence Artificielle",
      "Architecture Logicielle",
      "Java",
      "Full-Stack Development"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Développeur Senior Front-end",
      occupationLocation: {
        "@type": "City",
        name: "Paris"
      },
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Automatisation",
        "Intelligence Artificielle",
        "Architecture Front-end"
      ],
      experienceRequirements: "7 ans d'expérience"
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}