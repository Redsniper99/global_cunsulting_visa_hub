import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/ThemeRegistry";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import UnderMaintenance from "@/components/UnderMaintenance";

// Set to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = true;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
  description: "Your trusted partner for US and Schengen visa consulting. Expert guidance, transparent process, and personalized support for students, families, and professionals. Over 5 years of experience with high approval outcomes.",
  keywords: ["visa consulting", "US visa", "Schengen visa", "student visa", "F-1 visa", "tourist visa", "B1 B2 visa", "immigration consulting"],
  authors: [{ name: "Global Consulting & Visa Hub" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
    description: "Expert visa consulting for US and Schengen countries. Student visas, tourist visas, business visas, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Global Consulting & Visa Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
    description: "Expert visa consulting for US and Schengen countries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Show maintenance page if MAINTENANCE_MODE is true
  if (MAINTENANCE_MODE) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
          suppressHydrationWarning
        >
          <ThemeRegistry>
            <UnderMaintenance />
          </ThemeRegistry>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeRegistry>
          <SmoothScrollProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}


