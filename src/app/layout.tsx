import type { Metadata } from "next";
import { Comic_Neue, Inter, Poppins } from "next/font/google";

import "./globals.css";
import { Authprovider } from "@/lib/contexts/AuthContext";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

//const comicNeue = Comic_Neue({ subsets: ["latin"] });
const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  style: "normal",
});

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
      <body className={`${poppins.className}antialiased `}>
        <Authprovider>{children}</Authprovider>
      </body>
    </html>
  );
}
