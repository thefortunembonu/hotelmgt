import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serene Escapes Hotels",
  description: "Built by Fortune Mbonu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cyan-200/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
