import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/interactive/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingContact from "@/components/ui/FloatingContact";
import { siteConfig } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redmooseexterior.com"),
  title: {
    default: `${siteConfig.name} | Professional Pressure Washing & Soft Washing in Charlotte, NC`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Charlotte's premier pressure washing and soft washing service. Professional cleaning for residential and commercial properties. Driveways, patios, siding, roofs & more. Free estimates!",
  keywords: [
    "pressure washing Charlotte NC",
    "soft washing Charlotte",
    "power washing Charlotte",
    "driveway cleaning Charlotte",
    "house washing Charlotte",
    "commercial pressure washing",
    "residential pressure washing",
    "exterior cleaning Charlotte",
    "roof cleaning Charlotte NC",
    "deck cleaning Charlotte",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://redmooseexterior.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Professional Pressure Washing & Soft Washing`,
    description:
      "Charlotte's premier pressure washing and soft washing service. Professional cleaning for residential and commercial properties.",
    images: [
      {
        url: "/images/Red-Moose-Isolated.png",
        width: 1200,
        height: 630,
        alt: "Red Moose Exterior - Professional Pressure Washing in Charlotte NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Pressure Washing Charlotte NC`,
    description: "Professional pressure washing & soft washing services in Charlotte, NC. Free estimates!",
    images: ["/images/Red-Moose-Isolated.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://redmooseexterior.com",
  },
};

// Enhanced structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://redmooseexterior.com/#business",
      name: siteConfig.name,
      image: "https://redmooseexterior.com/images/Red-Moose-Isolated.png",
      url: "https://redmooseexterior.com",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "NC",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.2271,
        longitude: -80.8431,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: siteConfig.rating,
        reviewCount: siteConfig.reviewCount,
        bestRating: 5,
      },
      areaServed: {
        "@type": "City",
        name: "Charlotte",
        containedInPlace: {
          "@type": "State",
          name: "North Carolina",
        },
      },
      serviceType: ["Pressure Washing", "Soft Washing", "Exterior Cleaning"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Exterior Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pressure Washing",
              description: "High-powered cleaning for driveways, patios, decks, and parking lots",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Soft Washing",
              description: "Gentle, low-pressure cleaning for siding, roofs, and delicate surfaces",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://redmooseexterior.com/#website",
      url: "https://redmooseexterior.com",
      name: siteConfig.name,
      description: "Professional pressure washing and soft washing services in Charlotte, NC",
      publisher: {
        "@id": "https://redmooseexterior.com/#business",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://redmooseexterior.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/Red-Moose-Isolated.png" />
        <meta name="theme-color" content="#C41E3A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://redmooseexterior.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C41E3A] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <FloatingContact />
      </body>
    </html>
  );
}
