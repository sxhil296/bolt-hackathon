import type { Metadata } from "next";

import localFont from "next/font/local";
import { Tektur } from "next/font/google";

import "./globals.css";

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
});
const fluxBox = localFont({
  src: "./fonts/FluxBoxes-XGADo.ttf",
  variable: "--font-flux-box",
});

export const metadata: Metadata = {
  title: "Bolt Hackathon",
  description: "Bolt Hackathon Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fluxBox.className} ${tektur.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
