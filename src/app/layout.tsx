import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import SidebarMenu from "./components/SidebarMenu";
import Footer from "./components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe Photography | Professional Photography Services",
  description:
    "Professional photography portfolio showcasing wedding, portrait, fashion, and commercial photography. Capturing moments, creating memories.",
  openGraph: {
    title: "John Doe Photography",
    description:
      "Professional photography services — capturing moments, creating memories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} font-body antialiased bg-base text-primary`}
      >
        <SidebarMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
