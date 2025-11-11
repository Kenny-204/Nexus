import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "Nexus",
  description: "A marketplace for unilag students",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${poppins.className}antialiased `}>{children} </body>
    </html>
  );
}
