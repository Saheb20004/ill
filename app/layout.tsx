import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPL 2026 - Indian Premier League Fan Hub",
  description: "Complete IPL 2026 coverage with all teams, playing XI squads, player stats, and match updates. Your ultimate destination for Indian Premier League 2026.",
  keywords: ["IPL 2026", "Indian Premier League", "Cricket", "IPL Teams", "IPL Players", "T20 Cricket", "IPL Squads"],
  authors: [{ name: "IPL Fan Hub" }],
  creator: "IPL Fan Hub",
  publisher: "IPL Fan Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ipl2026.com",
    title: "IPL 2026 - Indian Premier League Fan Hub",
    description: "Complete IPL 2026 coverage with all teams, playing XI squads, player stats, and match updates.",
    siteName: "IPL 2026 Fan Hub",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "IPL 2026 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL 2026 - Indian Premier League Fan Hub",
    description: "Complete IPL 2026 coverage with all teams, playing XI squads, player stats, and match updates.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#ff6b00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} style={{ colorScheme: "dark" }}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body style={{ background: "#0a0a0f", color: "#f0f0f0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
