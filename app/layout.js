import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import LocomotiveProvider from '@/Provider/Locomotiveprovider';
import NavbarWrapper from '@/components/NavbarWrapper';
import NavObserver from '@/components/Navobserver';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Midnight Anthology | Premium Digital Curations",
  description: "Exploring the nexus of minimal design and machine intelligence.",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          font-sans
          bg-[var(--bg-primary)]
          text-[var(--text-primary)]
        `}
      >
        <NavbarWrapper />
        <NavObserver />

        <LocomotiveProvider>
          <div id="nav-sentinel" className="h-[50px]" aria-hidden="true" />
          {children}
        </LocomotiveProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
