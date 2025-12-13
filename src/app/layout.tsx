import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "./providers";
import RouteTransition from "@/components/route-transition";
// removed framer-motion in server layout; using CSS animations instead

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mohaned Ashraf | Software Engineer",
    template: "%s | Mohaned Ashraf",
  },
  description: "Software Engineer based in Cairo, Egypt. Specializing in building scalable enterprise web applications with React, Next.js, and Node.js.",
  keywords: ["Software Engineer", "Full Stack Developer", "Frontend Engineer", "React", "Next.js", "TypeScript", "Node.js", "Cairo", "Egypt"],
  authors: [{ name: "Mohaned Ashraf" }],
  creator: "Mohaned Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohanedashraf.com",
    title: "Mohaned Ashraf | Software Engineer",
    description: "Building scalable enterprise products and effortless user experiences.",
    siteName: "Mohaned Ashraf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohaned Ashraf | Software Engineer",
    description: "Building scalable enterprise products and effortless user experiences.",
    creator: "@mohanedashraf",
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
};

import Loader from "@/components/loader";
import Header from "@/components/header";
import GlassDistortion from "@/components/effects/glass-distortion";

import GoogleAnalytics from "@/components/analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GA_ID && (
         <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body className={`${spaceGrotesk.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Loader />
          <Header />
          <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
            <div className="background-canvas" />
            <div className="absolute blur-3xl mix-blend-multiply dark:mix-blend-screen haze-amber" />
            <div className="absolute blur-3xl mix-blend-multiply dark:mix-blend-screen haze-teal" />
          </div>
          <RouteTransition>{children}</RouteTransition>
        </ThemeProvider>
        <GlassDistortion />
      </body>
    </html>
  );
}
