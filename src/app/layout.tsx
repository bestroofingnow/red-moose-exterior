import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/interactive/CustomCursor";
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
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://redmooseexterior.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Professional Pressure Washing & Soft Washing`,
    description:
      "Charlotte's premier pressure washing and soft washing service.",
    images: [
      {
        url: "/images/Red-Moose-Isolated.png",
        width: 1200,
        height: 630,
        alt: "Red Moose Exterior - Professional Pressure Washing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <meta name="theme-color" content="#C41E3A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: "https://redmooseexterior.com/images/Red-Moose-Isolated.png",
              "@id": "https://redmooseexterior.com",
              url: "https://redmooseexterior.com",
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Charlotte",
                addressRegion: "NC",
                addressCountry: "US",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
