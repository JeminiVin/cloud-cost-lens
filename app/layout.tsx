import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CloudCost-Lens | Multi-Cloud Cost Estimator & Planner",
  description: "Compare AWS, Vercel, and Supabase deployment costs dynamically. Optimize your cloud architecture for free.",
  metadataBase: new URL("https://vercel.app"), 
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  // 👇 Yahan Google se jo content string copy ki hai, use paste karein
  verification: {
    google: "AAPKA_COPY_KIYA_HUA_CONTENT_STRING", 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}