// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
// app/layout.tsx or app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamza Farooq | Full Stack Developer",
  description:
    "Portfolio of Hamza Farooq — Full Stack Developer building fast, modern web products.",
  keywords: [
    "Hamza Farooq",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Hamza Farooq" }],
  creator: "Hamza Farooq",
  openGraph: {
    title: "Hamza Farooq | Full Stack Developer",
    description:
      "Portfolio of Hamza Farooq — Full Stack Developer building fast, modern web products.",
    url: "https://yoursite.com",
    siteName: "Hamza Farooq",
    images: [
      {
        url: "https://yoursite.com/og-image.png", // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: "Hamza Farooq Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Farooq | Full Stack Developer",
    description:
      "Portfolio of Hamza Farooq — Full Stack Developer building fast, modern web products.",
    images: ["https://yoursite.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const retailFont = localFont({
  src: "../public/fonts/RetailVariable.ttf",
  variable: "--font-retail",
  display: "swap",
});
const swearFont = localFont({
  src: "../public/fonts/swear-display-thin.otf",
  variable: "--font-swear",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        retailFont.variable,
        swearFont.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <SpeedInsights />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
