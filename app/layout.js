import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: "italic",
});

export const metadata = {
  title: "Midnight Anthology | Premium Digital Curations",
  description: "Exploring the nexus of minimal design and machine intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
