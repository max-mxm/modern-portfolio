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
  title: "Ethan Smith | Portfolio",
  description: "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
  keywords: "react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect",
  author: "Sanidhya Kumar Verma",
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