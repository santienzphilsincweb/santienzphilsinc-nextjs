import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CTACard from "@/components/CTA-card";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
  description: "The Ultimate Polyurethane Mortar Floor",
  openGraph: {
    title: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description: "The Ultimate Polyurethane Mortar Floor",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description: "The Ultimate Polyurethane Mortar Floor",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: [
    "santienz",
    "philippines",
    "polyurethane",
    "projects",
    "flooring",
    "construction",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-foreground bg-background flex min-h-dvh w-full flex-col text-base antialiased`}
      >
        <main className="z-0 flex-1">
          <Header />
          {children}
          <CTACard />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
