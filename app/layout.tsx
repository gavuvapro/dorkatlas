import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DorkAtlas - Google Search Operators Library",
  description: "The world's most comprehensive, beginner-friendly repository of Google search operators and ethical OSINT research workflows. Educational resource for developers, researchers, journalists, and students.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DorkAtlas - Google Search Operators Library",
    description: "Discover legitimate Google search operators and ethical research techniques. Built for education, privacy awareness, and responsible OSINT.",
    images: [{ url: "/og-image.png" }],
  },
  metadataBase: new URL("https://dorkatlas.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50">
        {children}
        <Toaster position="top-center" richColors closeButton />
        
        {/* Permanent Warning Banner - Required by project spec */}
        <div className="fixed bottom-0 left-0 right-0 bg-amber-900/95 text-amber-50 text-xs py-2 px-4 z-50 border-t border-amber-800">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
            <span className="font-medium">⚠️ Designed for education and public-information research only.</span>
            <span className="hidden md:inline">Do not use this project to violate privacy, access protected systems, or perform unauthorized activities.</span>
          </div>
        </div>
      </body>
    </html>
  );
}
