import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/ThemeRegistry";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import UnderMaintenance from "@/components/UnderMaintenance";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Set to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = false;

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

// Your website URL - update this when you deploy
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://globalconsultingvisahub.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
    template: "%s | Global Consulting & Visa Hub"
  },
  description: "Best USA Licensed Visa Consultant in Sri Lanka. Expert guidance for US visa, USA visa, Schengen visa applications. 8+ years experience, 50+ successful cases. Free consultation for student visa, tourist visa, B1/B2 visa from Sri Lanka.",
  keywords: [
    // Primary keywords
    "US visa Sri Lanka",
    "USA visa Sri Lanka",
    "USA licensed consultant",
    "USA licensed visa consultant Sri Lanka",
    "US visa consultant",
    // Visa types
    "F-1 student visa Sri Lanka",
    "B1 B2 visa Sri Lanka",
    "tourist visa USA from Sri Lanka",
    "US student visa consultant",
    "Schengen visa Sri Lanka",
    "Europe visa Sri Lanka",
    // Brand & service keywords
    "visa consulting Sri Lanka",
    "best visa consultant Sri Lanka",
    "immigration consultant Sri Lanka",
    "visa application help",
    "visa interview preparation",
    // Location keywords
    "Colombo visa consultant",
    "Sri Lanka to USA visa",
    "American visa Sri Lanka"
  ],
  authors: [{ name: "Global Consulting & Visa Hub" }],
  creator: "Global Consulting & Visa Hub",
  publisher: "Global Consulting & Visa Hub",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
    description: "Expert visa consulting with 8+ years experience. Student visas, tourist visas, business visas. 50+ successful cases. Book your free consultation today!",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Global Consulting & Visa Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Consulting & Visa Hub - US & Schengen Visa Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Consulting & Visa Hub | US & Schengen Visa Experts",
    description: "Expert visa consulting with 8+ years experience. 50+ successful cases. Book your free consultation!",
    images: ["/og-image.png"],
  },
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
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Structured Data (JSON-LD) for rich search results
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Global Consulting & Visa Hub",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/favicon.svg`,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94-77-746-8806",
        "contactType": "customer service",
        "availableLanguage": ["English", "Sinhala"],
      },
      "sameAs": [
        "https://wa.me/94777468806"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      "name": "Global Consulting & Visa Hub",
      "description": "Professional visa consulting services for US and Schengen countries with over 8 years of experience.",
      "url": siteUrl,
      "telephone": "+94-77-746-8806",
      "priceRange": "$$",
      "image": `${siteUrl}/og-image.png`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Global Consulting & Visa Hub",
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Visa Consulting",
      "provider": {
        "@id": `${siteUrl}/#organization`
      },
      "areaServed": {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "US Student Visa (F-1)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "US Tourist Visa (B1/B2)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Schengen Visa"
            }
          }
        ]
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
          <WhatsAppFloatingButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}


