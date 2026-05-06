// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const retailFont = localFont({
  src: "../public/fonts/RetailVariable.ttf",
  variable: "--font-retail",
});
const swearFont = localFont({
  src: "../public/fonts/swear-display-thin.otf",
  variable: "--font-swear",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", retailFont.variable, swearFont.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
