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
  title: "Maxime Morellon | Portfolio",
  description: "Portfolio de Maxime Morellon, développeur Full-Stack avec 7 ans d'expérience, spécialisé en React, Next.js et Java. Expert en développement front-end et back-end pour des projets prestigieux.",
  keywords: "react, next, nextjs, java, javascript, typescript, full-stack, développeur, portfolio, framer-motion, ui, ux",
  author: "Maxime Morellon",
};

export const viewport = {
  themeColor: "#f13024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}