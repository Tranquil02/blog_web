import "./globals.css";

export const metadata = {
  title: "Midnight Anthology | Premium Digital Curations",
  description: "Exploring the nexus of minimal design and machine intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
